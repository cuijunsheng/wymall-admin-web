import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout/Layout'


export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/Login'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [{
      path: '/home',
      name: 'home',
      component: () => import('views/home/Home'),
      meta: {title: '首页', icon: 'home'}
    }]
  },
  {
    path: '/goods',
    component: Layout,
    name: 'goods',
    redirect: '/goods/list',
    meta: {title: '商品', icon: 'goods'},
    children: [{
      path: 'list',
      name: 'list',
      component: () => import('views/goods/goods/index'),
      meta: {title: '商品列表', icon: 'goods-list'}
    },
      {
        path: 'add',
        name: 'add',
        component: () => import('views/goods/goods/add'),
        meta: {title: '添加商品', icon: 'goods-add'}
      },
      {
        path: 'category',
        name: 'category',
        component: () => import('views/goods/category/index'),
        meta: {title: '商品分类', icon: 'goods-category'}
      },
      {
        path: 'attribute',
        name: 'attribute',
        component: () => import('views/goods/attribute/index'),
        meta: {title: '商品类型', icon: 'goods-attr'}
      },
      {
        path: 'brand',
        name: 'brand',
        component: () => import('views/goods/brand/index'),
        meta: {title: '品牌管理', icon: 'goods-brand'}
      },
    ]
  },

  // 404 page must be placed at the end !!!
  {path: '*', redirect: '/404', hidden: true}
]

const createRouter = () => new Router({
  mode: 'history',
  scrollBehavior: () => ({y: 0}),
  routes: constantRoutes
})

const router = createRouter()


export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
