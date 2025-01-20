<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */
namespace OCP\Group\Events;

use OCP\EventDispatcher\Event;
use OCP\IGroup;
use OCP\IUser;

/**
 * @since 18.0.0
 */
class BeforeUserAddedEvent extends Event {
	/** @var IGroup */
	private $group;

	/*** @var IUser */
	private $user;

	/**
	 * @since 18.0.0
	 */
	public function __construct(IGroup $group, IUser $user) {
		parent::__construct();
		$this->group = $group;
		$this->user = $user;
	}

	/**
	 * @return IGroup
	 * @since 18.0.0
	 */
	public function getGroup(): IGroup {
		return $this->group;
	}

	/**
	 * @return IUser
	 * @since 18.0.0
	 */
	public function getUser(): IUser {
		return $this->user;
	}
}
