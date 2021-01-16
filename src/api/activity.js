import request from '@/utils/request'

export function getList(query) {
  return request(({
    url: '/activity/all',
    method: 'get',
    params: {
      page: query.page,
      size: query.size
    }
  }))
}
