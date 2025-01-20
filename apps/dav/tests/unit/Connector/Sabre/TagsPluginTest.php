<?php

/**
 * SPDX-FileCopyrightText: 2016-2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-FileCopyrightText: 2014-2016 ownCloud, Inc.
 * SPDX-License-Identifier: AGPL-3.0-only
 */
namespace OCA\DAV\Tests\unit\Connector\Sabre;

use OCA\DAV\Connector\Sabre\Directory;
use OCA\DAV\Connector\Sabre\File;
use OCA\DAV\Connector\Sabre\Node;
use OCA\DAV\Connector\Sabre\TagList;
use OCA\DAV\Connector\Sabre\TagsPlugin;
use OCA\DAV\Upload\UploadFile;
use OCP\EventDispatcher\IEventDispatcher;
use OCP\ITagManager;
use OCP\ITags;
use OCP\IUser;
use OCP\IUserSession;
use Sabre\DAV\Tree;

class TagsPluginTest extends \Test\TestCase {
	public const TAGS_PROPERTYNAME = TagsPlugin::TAGS_PROPERTYNAME;
	public const FAVORITE_PROPERTYNAME = TagsPlugin::FAVORITE_PROPERTYNAME;
	public const TAG_FAVORITE = TagsPlugin::TAG_FAVORITE;

	/**
	 * @var \Sabre\DAV\Server
	 */
	private $server;

	/**
	 * @var Tree
	 */
	private $tree;

	/**
	 * @var ITagManager
	 */
	private $tagManager;

	/**
	 * @var ITags
	 */
	private $tagger;

	/**
	 * @var IEventDispatcher
	 */
	private $eventDispatcher;

	/**
	 * @var IUserSession
	 */
	private $userSession;

	/**
	 * @var TagsPlugin
	 */
	private $plugin;

	protected function setUp(): void {
		parent::setUp();
		$this->server = new \Sabre\DAV\Server();
		$this->tree = $this->getMockBuilder(Tree::class)
			->disableOriginalConstructor()
			->getMock();
		$this->tagger = $this->getMockBuilder(ITags::class)
			->disableOriginalConstructor()
			->getMock();
		$this->tagManager = $this->getMockBuilder(ITagManager::class)
			->disableOriginalConstructor()
			->getMock();

		$this->eventDispatcher = $this->getMockBuilder(IEventDispatcher::class)
			->disableOriginalConstructor()
			->getMock();
		$user = $this->createMock(IUser::class);
		/**
		 * @var IUserSession
		 */
		$this->userSession = $this->createMock(IUserSession::class);
		$this->userSession->expects($this->any())
			->method('getUser')
			->withAnyParameters()
			->willReturn($user);
		$this->tagManager->expects($this->any())
			->method('load')
			->with('files')
			->willReturn($this->tagger);
		$this->plugin = new TagsPlugin($this->tree, $this->tagManager, $this->eventDispatcher, $this->userSession);
		$this->plugin->initialize($this->server);
	}

	/**
	 * @dataProvider tagsGetPropertiesDataProvider
	 */
	public function testGetProperties($tags, $requestedProperties, $expectedProperties): void {
		$node = $this->getMockBuilder(Node::class)
			->disableOriginalConstructor()
			->getMock();
		$node->expects($this->any())
			->method('getId')
			->willReturn(123);

		$expectedCallCount = 0;
		if (count($requestedProperties) > 0) {
			$expectedCallCount = 1;
		}

		$this->tagger->expects($this->exactly($expectedCallCount))
			->method('getTagsForObjects')
			->with($this->equalTo([123]))
			->willReturn([123 => $tags]);

		$propFind = new \Sabre\DAV\PropFind(
			'/dummyPath',
			$requestedProperties,
			0
		);

		$this->plugin->handleGetProperties(
			$propFind,
			$node
		);

		$result = $propFind->getResultForMultiStatus();

		$this->assertEmpty($result[404]);
		unset($result[404]);
		$this->assertEquals($expectedProperties, $result);
	}

	/**
	 * @dataProvider tagsGetPropertiesDataProvider
	 */
	public function testPreloadThenGetProperties($tags, $requestedProperties, $expectedProperties): void {
		$node1 = $this->getMockBuilder(File::class)
			->disableOriginalConstructor()
			->getMock();
		$node1->expects($this->any())
			->method('getId')
			->willReturn(111);
		$node2 = $this->getMockBuilder(File::class)
			->disableOriginalConstructor()
			->getMock();
		$node2->expects($this->any())
			->method('getId')
			->willReturn(222);

		$expectedCallCount = 0;
		if (count($requestedProperties) > 0) {
			// this guarantees that getTagsForObjects
			// is only called once and then the tags
			// are cached
			$expectedCallCount = 1;
		}

		$node = $this->getMockBuilder(Directory::class)
			->disableOriginalConstructor()
			->getMock();
		$node->expects($this->any())
			->method('getId')
			->willReturn(123);
		$node->expects($this->exactly($expectedCallCount))
			->method('getChildren')
			->willReturn([$node1, $node2]);

		$this->tagger->expects($this->exactly($expectedCallCount))
			->method('getTagsForObjects')
			->with($this->equalTo([123, 111, 222]))
			->willReturn(
				[
					111 => $tags,
					123 => $tags
				]
			);

		// simulate sabre recursive PROPFIND traversal
		$propFindRoot = new \Sabre\DAV\PropFind(
			'/subdir',
			$requestedProperties,
			1
		);
		$propFind1 = new \Sabre\DAV\PropFind(
			'/subdir/test.txt',
			$requestedProperties,
			0
		);
		$propFind2 = new \Sabre\DAV\PropFind(
			'/subdir/test2.txt',
			$requestedProperties,
			0
		);

		$this->plugin->handleGetProperties(
			$propFindRoot,
			$node
		);
		$this->plugin->handleGetProperties(
			$propFind1,
			$node1
		);
		$this->plugin->handleGetProperties(
			$propFind2,
			$node2
		);

		$result = $propFind1->getResultForMultiStatus();

		$this->assertEmpty($result[404]);
		unset($result[404]);
		$this->assertEquals($expectedProperties, $result);
	}

	public function tagsGetPropertiesDataProvider() {
		return [
			// request both, receive both
			[
				['tag1', 'tag2', self::TAG_FAVORITE],
				[self::TAGS_PROPERTYNAME, self::FAVORITE_PROPERTYNAME],
				[
					200 => [
						self::TAGS_PROPERTYNAME => new TagList(['tag1', 'tag2']),
						self::FAVORITE_PROPERTYNAME => true,
					]
				]
			],
			// request tags alone
			[
				['tag1', 'tag2', self::TAG_FAVORITE],
				[self::TAGS_PROPERTYNAME],
				[
					200 => [
						self::TAGS_PROPERTYNAME => new TagList(['tag1', 'tag2']),
					]
				]
			],
			// request fav alone
			[
				['tag1', 'tag2', self::TAG_FAVORITE],
				[self::FAVORITE_PROPERTYNAME],
				[
					200 => [
						self::FAVORITE_PROPERTYNAME => true,
					]
				]
			],
			// request none
			[
				['tag1', 'tag2', self::TAG_FAVORITE],
				[],
				[
					200 => []
				],
			],
			// request both with none set, receive both
			[
				[],
				[self::TAGS_PROPERTYNAME, self::FAVORITE_PROPERTYNAME],
				[
					200 => [
						self::TAGS_PROPERTYNAME => new TagList([]),
						self::FAVORITE_PROPERTYNAME => false,
					]
				]
			],
		];
	}

	public function testGetPropertiesSkipChunks(): void {
		$sabreNode = $this->getMockBuilder(UploadFile::class)
			->disableOriginalConstructor()
			->getMock();

		$propFind = new \Sabre\DAV\PropFind(
			'/dummyPath',
			[self::TAGS_PROPERTYNAME, self::TAG_FAVORITE],
			0
		);

		$this->plugin->handleGetProperties(
			$propFind,
			$sabreNode
		);

		$result = $propFind->getResultForMultiStatus();
		$this->assertCount(2, $result[404]);
	}

	public function testUpdateTags(): void {
		// this test will replace the existing tags "tagremove" with "tag1" and "tag2"
		// and keep "tagkeep"
		$node = $this->getMockBuilder(Node::class)
			->disableOriginalConstructor()
			->getMock();
		$node->expects($this->any())
			->method('getId')
			->willReturn(123);

		$this->tree->expects($this->any())
			->method('getNodeForPath')
			->with('/dummypath')
			->willReturn($node);

		$this->tagger->expects($this->once())
			->method('getTagsForObjects')
			->with($this->equalTo([123]))
			->willReturn([123 => ['tagkeep', 'tagremove', self::TAG_FAVORITE]]);

		// then tag as tag1 and tag2
		$this->tagger->expects($this->exactly(2))
			->method('tagAs')
			->withConsecutive(
				[123, 'tag1'],
				[123, 'tag2'],
			);

		// it will untag tag3
		$this->tagger->expects($this->once())
			->method('unTag')
			->with(123, 'tagremove');

		// properties to set
		$propPatch = new \Sabre\DAV\PropPatch([
			self::TAGS_PROPERTYNAME => new TagList(['tag1', 'tag2', 'tagkeep'])
		]);

		$this->plugin->handleUpdateProperties(
			'/dummypath',
			$propPatch
		);

		$propPatch->commit();

		// all requested properties removed, as they were processed already
		$this->assertEmpty($propPatch->getRemainingMutations());

		$result = $propPatch->getResult();
		$this->assertEquals(200, $result[self::TAGS_PROPERTYNAME]);
		$this->assertFalse(isset($result[self::FAVORITE_PROPERTYNAME]));
	}

	public function testUpdateTagsFromScratch(): void {
		$node = $this->getMockBuilder(Node::class)
			->disableOriginalConstructor()
			->getMock();
		$node->expects($this->any())
			->method('getId')
			->willReturn(123);

		$this->tree->expects($this->any())
			->method('getNodeForPath')
			->with('/dummypath')
			->willReturn($node);

		$this->tagger->expects($this->once())
			->method('getTagsForObjects')
			->with($this->equalTo([123]))
			->willReturn([]);

		// then tag as tag1 and tag2
		$this->tagger->expects($this->exactly(2))
			->method('tagAs')
			->withConsecutive(
				[123, 'tag1'],
				[123, 'tag2'],
			);

		// properties to set
		$propPatch = new \Sabre\DAV\PropPatch([
			self::TAGS_PROPERTYNAME => new TagList(['tag1', 'tag2'])
		]);

		$this->plugin->handleUpdateProperties(
			'/dummypath',
			$propPatch
		);

		$propPatch->commit();

		// all requested properties removed, as they were processed already
		$this->assertEmpty($propPatch->getRemainingMutations());

		$result = $propPatch->getResult();
		$this->assertEquals(200, $result[self::TAGS_PROPERTYNAME]);
		$this->assertFalse(false, isset($result[self::FAVORITE_PROPERTYNAME]));
	}

	public function testUpdateFav(): void {
		// this test will replace the existing tags "tagremove" with "tag1" and "tag2"
		// and keep "tagkeep"
		$node = $this->getMockBuilder(Node::class)
			->disableOriginalConstructor()
			->getMock();
		$node->expects($this->any())
			->method('getId')
			->willReturn(123);

		$this->tree->expects($this->any())
			->method('getNodeForPath')
			->with('/dummypath')
			->willReturn($node);

		// set favorite tag
		$this->tagger->expects($this->once())
			->method('tagAs')
			->with(123, self::TAG_FAVORITE);

		// properties to set
		$propPatch = new \Sabre\DAV\PropPatch([
			self::FAVORITE_PROPERTYNAME => true
		]);

		$this->plugin->handleUpdateProperties(
			'/dummypath',
			$propPatch
		);

		$propPatch->commit();

		// all requested properties removed, as they were processed already
		$this->assertEmpty($propPatch->getRemainingMutations());

		$result = $propPatch->getResult();
		$this->assertFalse(false, isset($result[self::TAGS_PROPERTYNAME]));
		$this->assertEquals(200, isset($result[self::FAVORITE_PROPERTYNAME]));

		// unfavorite now
		// set favorite tag
		$this->tagger->expects($this->once())
			->method('unTag')
			->with(123, self::TAG_FAVORITE);

		// properties to set
		$propPatch = new \Sabre\DAV\PropPatch([
			self::FAVORITE_PROPERTYNAME => false
		]);

		$this->plugin->handleUpdateProperties(
			'/dummypath',
			$propPatch
		);

		$propPatch->commit();

		// all requested properties removed, as they were processed already
		$this->assertEmpty($propPatch->getRemainingMutations());

		$result = $propPatch->getResult();
		$this->assertFalse(false, isset($result[self::TAGS_PROPERTYNAME]));
		$this->assertEquals(200, isset($result[self::FAVORITE_PROPERTYNAME]));
	}
}
