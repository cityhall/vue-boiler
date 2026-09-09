import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/auth/LoginView.vue'),
    meta: { public: true },
  },
  {
    path: '/auth/sso/callback',
    name: 'sso-callback',
    component: () => import('@/views/auth/SsoCallbackView.vue'),
    meta: { public: true },
  },
  {
    path: '/',
    component: () => import('@/layouts/AppShell.vue'),
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/views/HomeView.vue'),
      },
      {
        path: 'catalog',
        name: 'catalog',
        component: () => import('@/views/catalog/CatalogListView.vue'),
        meta: { permission: 'catalog:read' },
      },
      {
        path: 'catalog/new',
        name: 'catalog-new',
        component: () => import('@/views/catalog/CatalogFormView.vue'),
        meta: { permission: 'catalog:write' },
      },
      {
        path: 'perf/live',
        name: 'perf-live',
        component: () => import('@/views/perf/PerformanceLiveView.vue'),
        meta: { permission: 'perf:live' },
      },
      {
        path: '403',
        name: 'forbidden',
        component: () => import('@/views/errors/ForbiddenView.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/errors/NotFoundView.vue'),
    meta: { public: true },
  },
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach(async (to) => {
  const auth = useAuthStore()
  if (!auth.bootstrapped) {
    await auth.bootstrap()
  }

  if (to.meta.public) return true

  if (to.meta.requiresAuth !== false && !auth.isAuthenticated) {
    return {
      name: 'login',
      query: { redirect: to.fullPath },
    }
  }

  const permission = to.meta.permission as string | undefined
  if (permission && !auth.hasPermission(permission)) {
    return { name: 'forbidden' }
  }

  return true
})
