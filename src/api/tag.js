import request from '@/utils/request'

export function getTagList(page, size) {
  return request({
    url: '/tag/all',
    method: 'get',
    params: {
      page: page,
      size: size
    }
  })
}

export function getTopicsByTag(paramMap) {
  return request({
    url: '/tag/' + paramMap.name,
    method: 'get',
    params: {
      page: paramMap.page,
      size: paramMap.size
    }
  })
}
