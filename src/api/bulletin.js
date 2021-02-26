import request from '@/utils/request'

export function getBulletin() {
  return request(({
    url: '/bulletin/show',
    method: 'get'
  }))
}
