import { $fetch } from 'ofetch'
import { PHONE_FEED_URL } from '../constants'
import { configureSWRHeaders } from '../utils/swr'

async function fetchPhoneFeed() {
  const response = await $fetch(PHONE_FEED_URL, { parseResponse: JSON.parse })

  return response
}

export default defineEventHandler((event) => {
  configureSWRHeaders(event)

  return fetchPhoneFeed()
})
