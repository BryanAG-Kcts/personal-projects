import { defineAsyncComponent } from 'vue'
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/libros'
  },
  {
    path: '/libros',
    component: defineAsyncComponent(() => import('./templates/BookLayout.vue')),
    children: [
      {
        path: '',
        component: defineAsyncComponent(
          () => import('./pages/BookListPage.vue')
        )
      },
      {
        path: ':id',
        component: defineAsyncComponent(
          () => import('./pages/BookDetailPage.vue')
        )
      },
      {
        path: 'nuevo',
        component: defineAsyncComponent(() => import('./pages/BookNewForm.vue'))
      },
      {
        path: 'dashboard',
        component: defineAsyncComponent(() => import('./pages/BookChart.vue'))
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    component: defineAsyncComponent(() => import('./pages/NotFoundPage.vue'))
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
