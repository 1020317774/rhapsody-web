import request from '@/utils/request'

export function getList() {
  return request(({
    url: '/journey/all',
    method: 'get'
  }))
}

export function getById(id) {
  return request(({
    url: `/journey/${id}`,
    method: 'get'
  }))
}
