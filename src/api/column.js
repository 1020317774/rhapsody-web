import request from '@/utils/request'

export function getList(query) {
  return request(({
    url: '/column/all',
    method: 'get',
    // data: query.column,
    params: {
      page: query.current,
      size: query.size
    }
  }))
}

// 获取专栏下的文章
export function getPosts(query) {
  return request(({
    url: `/column/${query.title}/all`,
    method: 'get',
    params: {
      page: query.current,
      size: query.size
    }
  }))
}

