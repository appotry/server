<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2018 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
namespace OCA\DAV\CalDAV;

use OCA\DAV\Exception\UnsupportedLimitOnInitialSyncException;
use Sabre\DAV\Exception\MethodNotAllowed;
use Sabre\DAV\Exception\NotFound;
use Sabre\DAV\INode;
use Sabre\DAV\PropPatch;

/**
 * Class CachedSubscription
 *
 * @package OCA\DAV\CalDAV
 * @property CalDavBackend $caldavBackend
 */
class CachedSubscription extends \Sabre\CalDAV\Calendar {

	/**
	 * @return string
	 */
	public function getPrincipalURI():string {
		return $this->calendarInfo['principaluri'];
	}

	/**
	 * @return array
	 */
	public function getACL() {
		return [
			[
				'privilege' => '{DAV:}read',
				'principal' => $this->getOwner(),
				'protected' => true,
			],
			[
				'privilege' => '{DAV:}read',
				'principal' => $this->getOwner() . '/calendar-proxy-write',
				'protected' => true,
			],
			[
				'privilege' => '{DAV:}read',
				'principal' => $this->getOwner() . '/calendar-proxy-read',
				'protected' => true,
			],
			[
				'privilege' => '{' . Plugin::NS_CALDAV . '}read-free-busy',
				'principal' => '{DAV:}authenticated',
				'protected' => true,
			],
			[
				'privilege' => '{DAV:}write-properties',
				'principal' => $this->getOwner(),
				'protected' => true,
			]
		];
	}

	/**
	 * @return array
	 */
	public function getChildACL() {
		return [
			[
				'privilege' => '{DAV:}read',
				'principal' => $this->getOwner(),
				'protected' => true,
			],

			[
				'privilege' => '{DAV:}read',
				'principal' => $this->getOwner() . '/calendar-proxy-write',
				'protected' => true,
			],
			[
				'privilege' => '{DAV:}read',
				'principal' => $this->getOwner() . '/calendar-proxy-read',
				'protected' => true,
			],
		];
	}

	/**
	 * @return null|string
	 */
	public function getOwner() {
		if (isset($this->calendarInfo['{http://owncloud.org/ns}owner-principal'])) {
			return $this->calendarInfo['{http://owncloud.org/ns}owner-principal'];
		}
		return parent::getOwner();
	}


	public function delete() {
		$this->caldavBackend->deleteSubscription($this->calendarInfo['id']);
	}

	/**
	 * @param PropPatch $propPatch
	 */
	public function propPatch(PropPatch $propPatch) {
		$this->caldavBackend->updateSubscription($this->calendarInfo['id'], $propPatch);
	}

	/**
	 * @param string $name
	 * @return CalendarObject|\Sabre\CalDAV\ICalendarObject
	 * @throws NotFound
	 */
	public function getChild($name) {
		$obj = $this->caldavBackend->getCalendarObject($this->calendarInfo['id'], $name, CalDavBackend::CALENDAR_TYPE_SUBSCRIPTION);
		if (!$obj) {
			throw new NotFound('Calendar object not found');
		}

		$obj['acl'] = $this->getChildACL();
		return new CachedSubscriptionObject($this->caldavBackend, $this->calendarInfo, $obj);
	}

	/**
	 * @return INode[]
	 */
	public function getChildren(): array {
		$objs = $this->caldavBackend->getCalendarObjects($this->calendarInfo['id'], CalDavBackend::CALENDAR_TYPE_SUBSCRIPTION);

		$children = [];
		foreach ($objs as $obj) {
			$children[] = new CachedSubscriptionObject($this->caldavBackend, $this->calendarInfo, $obj);
		}

		return $children;
	}

	/**
	 * @param array $paths
	 * @return array
	 */
	public function getMultipleChildren(array $paths):array {
		$objs = $this->caldavBackend->getMultipleCalendarObjects($this->calendarInfo['id'], $paths, CalDavBackend::CALENDAR_TYPE_SUBSCRIPTION);

		$children = [];
		foreach ($objs as $obj) {
			$children[] = new CachedSubscriptionObject($this->caldavBackend, $this->calendarInfo, $obj);
		}

		return $children;
	}

	/**
	 * @param string $name
	 * @param null|resource|string $data
	 * @return null|string
	 * @throws MethodNotAllowed
	 */
	public function createFile($name, $data = null) {
		throw new MethodNotAllowed('Creating objects in cached subscription is not allowed');
	}

	/**
	 * @param string $name
	 * @return bool
	 */
	public function childExists($name):bool {
		$obj = $this->caldavBackend->getCalendarObject($this->calendarInfo['id'], $name, CalDavBackend::CALENDAR_TYPE_SUBSCRIPTION);
		if (!$obj) {
			return false;
		}

		return true;
	}

	/**
	 * @param array $filters
	 * @return array
	 */
	public function calendarQuery(array $filters):array {
		return $this->caldavBackend->calendarQuery($this->calendarInfo['id'], $filters, CalDavBackend::CALENDAR_TYPE_SUBSCRIPTION);
	}

	/**
	 * @inheritDoc
	 */
	public function getChanges($syncToken, $syncLevel, $limit = null) {
		if (!$syncToken && $limit) {
			throw new UnsupportedLimitOnInitialSyncException();
		}

		return parent::getChanges($syncToken, $syncLevel, $limit);
	}
}
