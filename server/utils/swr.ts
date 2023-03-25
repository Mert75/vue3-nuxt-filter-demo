import { H3Event } from 'h3'

// SWR will cache the response for 10 seconds
// and then revalidate the response in the background
export function configureSWRHeaders(event: H3Event) {
  setHeader(event, 'Cache-Control', 's-maxage=10, stale-while-revalidate')
}
