import request from '@/utils/request'

export function getCount() {
  return request(({
    url: '/websocket/site/stats',
    method: 'get'
  }))
}
