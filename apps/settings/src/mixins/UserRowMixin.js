/**
 * SPDX-FileCopyrightText: 2019 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { formatFileSize } from '@nextcloud/files'
import { useFormatDateTime } from '@nextcloud/vue'

export default {
	props: {
		user: {
			type: Object,
			required: true,
		},
		settings: {
			type: Object,
			default: () => ({}),
		},
		groups: {
			type: Array,
			default: () => [],
		},
		subAdminsGroups: {
			type: Array,
			default: () => [],
		},
		quotaOptions: {
			type: Array,
			default: () => [],
		},
		languages: {
			type: Array,
			required: true,
		},
		externalActions: {
			type: Array,
			default: () => [],
		},
	},
	setup(props) {
		const { formattedFullTime } = useFormatDateTime(props.user.firstLogin, { relativeTime: false })
		return {
			formattedFullTime,
		}
	},
	computed: {
		showConfig() {
			return this.$store.getters.getShowConfig
		},

		/* GROUPS MANAGEMENT */
		userGroups() {
			const userGroups = this.groups.filter(group => this.user.groups.includes(group.id))
			return userGroups
		},
		userSubAdminsGroups() {
			const userSubAdminsGroups = this.subAdminsGroups.filter(group => this.user.subadmin.includes(group.id))
			return userSubAdminsGroups
		},
		availableGroups() {
			return this.groups.map((group) => {
				// clone object because we don't want
				// to edit the original groups
				const groupClone = Object.assign({}, group)

				// two settings here:
				// 1. user NOT in group but no permission to add
				// 2. user is in group but no permission to remove
				groupClone.$isDisabled
					= (group.canAdd === false
						&& !this.user.groups.includes(group.id))
					|| (group.canRemove === false
						&& this.user.groups.includes(group.id))
				return groupClone
			})
		},

		/* QUOTA MANAGEMENT */
		usedSpace() {
			const quotaUsed = this.user.quota.used > 0 ? this.user.quota.used : 0
			return t('settings', '{size} used', { size: formatFileSize(quotaUsed, true) })
		},

		usedQuota() {
			let quota = this.user.quota.quota
			if (quota > 0) {
				quota = Math.min(100, Math.round(this.user.quota.used / quota * 100))
			} else {
				const usedInGB = this.user.quota.used / (10 * Math.pow(2, 30))
				// asymptotic curve approaching 50% at 10GB to visualize used stace with infinite quota
				quota = 95 * (1 - (1 / (usedInGB + 1)))
			}
			return isNaN(quota) ? 0 : quota
		},

		// Mapping saved values to objects
		userQuota() {
			if (this.user.quota.quota >= 0) {
				// if value is valid, let's map the quotaOptions or return custom quota
				const humanQuota = formatFileSize(this.user.quota.quota)
				const userQuota = this.quotaOptions.find(quota => quota.id === humanQuota)
				return userQuota || { id: humanQuota, label: humanQuota }
			} else if (this.user.quota.quota === 'default') {
				// default quota is replaced by the proper value on load
				return this.quotaOptions[0]
			}
			return this.quotaOptions[1] // unlimited
		},

		/* PASSWORD POLICY? */
		minPasswordLength() {
			return this.$store.getters.getPasswordPolicyMinLength
		},

		/* LANGUAGE */
		userLanguage() {
			const availableLanguages = this.languages[0].languages.concat(this.languages[1].languages)
			const userLang = availableLanguages.find(lang => lang.code === this.user.language)
			if (typeof userLang !== 'object' && this.user.language !== '') {
				return {
					code: this.user.language,
					name: this.user.language,
				}
			} else if (this.user.language === '') {
				return false
			}
			return userLang
		},

		userFirstLogin() {
			if (this.user.firstLogin > 0) {
				return this.formattedFullTime
			}
			if (this.user.firstLogin < 0) {
				return t('settings', 'Unknown')
			}
			return t('settings', 'Never')
		},

		/* LAST LOGIN */
		userLastLoginTooltip() {
			if (this.user.lastLogin > 0) {
				return OC.Util.formatDate(this.user.lastLogin)
			}
			return ''
		},
		userLastLogin() {
			if (this.user.lastLogin > 0) {
				return OC.Util.relativeModifiedDate(this.user.lastLogin)
			}
			return t('settings', 'Never')
		},
	},
}
