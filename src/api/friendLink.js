import request from '@/utils/request'

// 获取友链
export function getFriendLinkList() {
  return request(({
    url: '/friend/link/all',
    method: 'get'
  }))
}
