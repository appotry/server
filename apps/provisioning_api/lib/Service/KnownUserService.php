<?php

declare(strict_types=1);
/**
 * @copyright Copyright (c) 2021 Joas Schilling <coding@schilljs.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

namespace OCA\Settings\Service;

use OCA\Provisioning_API\Model\KnownUserMapper;

class KnownUserService {
	/** @var KnownUserMapper */
	protected $mapper;
	/** @var array */
	protected $knownUsers = [];

	public function __construct(KnownUserMapper $mapper) {
		$this->mapper = $mapper;
	}

	public function isKnownToUser(string $knownTo, string $user): bool {
		if (!isset($this->knownUsers[$knownTo])) {
			$entities = $this->mapper->getKnownTo($knownTo);
			$this->knownUsers[$knownTo] = [];
			foreach ($entities as $entity) {
				$this->knownUsers[$knownTo][$entity->getKnownUser()] = true;
			}
		}

		return isset($this->knownUsers[$knownTo][$user]);
	}
}
