import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // ------------------------导航栏--------------------------
  // 主页
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home'),
    meta: { title: '极光社区' }
  },
  // 旅行
  {
    name: 'journey',
    path: '/journey',
    component: () => import('@/views/journey/Index'),
    meta: { title: '旅行' }
  },
  // 旅行详情
  {
    name: 'journey-detail',
    path: '/journey/:id',
    component: () => import('@/views/journey/Detail'),
    meta: { title: '详情' }
  },
  // 活动
  {
    name: 'activities',
    path: '/activities',
    component: () => import('@/views/activity/index'),
    meta: { title: '活动' }
  },
  // 帮助-问题反馈
  {
    name: 'feedback',
    path: '/help/feedback',
    component: () => import('@/views/help/feedback'),
    meta: { title: '帮助-问题反馈' }
  },
  // 帮助-联系我们
  {
    name: 'contact',
    path: '/help/contact',
    component: () => import('@/views/help/contact'),
    meta: { title: '帮助-联系我们' }
  },

  // ------------------------文章--------------------------
  // 发布
  {
    name: 'post-create',
    path: '/post/create',
    component: () => import('@/views/post/Create'),
    meta: { title: '信息发布' }
  },
  // 详情
  {
    name: 'post-detail',
    path: '/post/:id',
    component: () => import('@/views/post/Detail')
  },
  // 编辑
  {
    name: 'topic-edit',
    path: '/topic/edit/:id',
    component: () => import('@/views/post/Edit'),
    meta: {
      title: '编辑'
    }
  },
  // ------------------------用户--------------------------
  // 用户主页
  {
    name: 'user',
    path: '/member/:username/home',
    component: () => import('@/views/user/Profile'),
    meta: { title: '主页' }
  },
  // 用户设置
  {
    name: 'user-setting',
    path: '/member/:username/setting',
    component: () => import('@/views/user/Setting'),
    meta: { title: '设置' }
  },

  // ------------------------卡片--------------------------
  // 摸鱼
  {
    name: 'idle',
    path: '/idle',
    component: () => import('@/views/idle/idle'),
    meta: { title: '圆桌派' }
  },
  // 专栏
  {
    name: 'columns',
    path: '/columns',
    component: () => import('@/views/column/List'),
    meta: { title: '专栏' }
  },
  // 专栏详情页
  {
    name: 'column-detail',
    path: '/column/:title',
    component: () => import('@/views/column/Detail')
  },
  // ------------------------专栏--------------------------

  // ------------------------首页--------------------------
  // 标签详情页，查询标签关联主题
  {
    name: 'tag',
    path: '/tag/:name',
    component: () => import('@/views/tag/Tag'),
    meta: { title: '主题列表' }
  },
  // 排行
  {
    name: 'ranking',
    path: '/ranking',
    component: () => import('@/views/Ranking'),
    meta: { title: '积分榜' }
  },
  // 检索
  {
    name: 'search',
    path: '/search',
    component: () => import('@/views/Search'),
    meta: { title: '检索' }
  },

  // 活动洽谈
  {
    name: 'cooperation',
    path: '/cooperation',
    component: () => import('@/views/cooperation/index'),
    meta: { title: '活动页面合作' }
  },

  // ------------------------权限--------------------------
  // 登录
  {
    name: 'login',
    path: '/login',
    component: () => import('@/views/auth/Login'),
    meta: { title: '登录' }
  },
  // 注册
  {
    name: 'register',
    path: '/register',
    component: () => import('@/views/auth/Register'),
    meta: { title: '注册' }
  },
  // ------------------------错误--------------------------
  // 404-NotFound
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/error/404'),
    meta: { title: '404-NotFound' }
  },
  // 404 page must be placed at the end !!!
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  mode: 'hash',
  // mode: 'history',
  base: '/',
  scrollBehavior: () => ({ y: 0 }),
  routes
})

export default router
