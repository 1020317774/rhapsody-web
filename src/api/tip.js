import request from '@/utils/request'

export function getTodayTip(type) {
  return request(({
    url: '/tip/today',
    method: 'get',
    params: { type: type }
  }))
}
