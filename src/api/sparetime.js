import request from '@/utils/request'

export function getList(type, query) {
  return request(({
    url: '/sparetime',
    method: 'get',
    params: {
      type: type,
      page: query.page,
      size: query.size
    }
  }))
}
