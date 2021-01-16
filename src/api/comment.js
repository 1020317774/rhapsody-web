import request from '@/utils/request'

export function pushComment(data) {
  return request({
    url: '/comment',
    method: 'post',
    data: data
  })
}

export function fetchCommentsByTopicId(param) {
  return request({
    url: '/comments',
    method: 'get',
    params: {
      topicId: param
    }
  })
}

// 用户主页：获取用户发布过的评论
export function getCommentsByUserId(userId, page, size) {
  return request({
    url: '/comments/user/' + userId,
    method: 'get',
    params: {
      page: page,
      size: size
    }
  })
}
