import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout/Layout'


export const constantRouterMap = [
  {
    path: '/login',
    component: () => import('views/login'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('views/404'),
    hidden: true
  },

  {
    path: '',
    component: Layout,
    redirect: '/home',
    children: [{
      path: 'home',
      name: 'home',
      component: () => import('views/home'),
      meta: {title: '首页', icon: 'home'}
    }]
  },

  // 404 page must be placed at the end !!!
  {path: '*', redirect: '/404', hidden: true}
]

export const asyncRouterMap = [
  {
    path: '/product',
    component: Layout,
    name: 'product',
    redirect: '/product/product',
    meta: {title: '商品', icon: 'product'},
    children: [{
      path: 'product',
      name: 'product',
      component: () => import('views/product'),
      meta: {title: '商品列表', icon: 'product-list'}
    },
      {
        path: 'addProduct',
        name: 'addProduct',
        component: () => import('views/product/Add'),
        meta: {title: '添加商品', icon: 'product-add'}
      },
      {
        path: 'category',
        name: 'category',
        component: () => import('views/product/category/index'),
        meta: {title: '商品分类', icon: 'product-category'}
      },
      {
        path: 'attribute',
        name: 'attribute',
        component: () => import('views/product/attribute/index'),
        meta: {title: '商品属性', icon: 'product-attribute'}
      },
      {
        path: 'brand',
        name: 'brand',
        component: () => import('views/product/brand/index'),
        meta: {title: '品牌管理', icon: 'product-brand'}
      },
    ]
  },
  {path: '*', redirect: '/404', hidden: true}
]

export default new Router({
  mode: 'history', //后端支持可开
  scrollBehavior: () => ({y: 0}),
  routes: constantRouterMap
})
