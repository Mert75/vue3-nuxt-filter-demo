import { $fetch } from 'ofetch'

import { PHONE_FEED_URL } from '../constants'

export default defineEventHandler(() => $fetch(PHONE_FEED_URL))
