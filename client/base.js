import { createSSRApp } from 'vue'
import {
  createRouter,
  createMemoryHistory,
  createWebHistory
} from 'vue-router'

import base from './base.vue'
import routes from './routes.js'
// import createState from './state.js'

import './assets/main.css'
import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/lara-dark-teal/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'

export async function createApp (
  // ctx,
  url
) {
  const instance = createSSRApp(base)

  // Populate todoList state with SSR context data
  // or client-side hydrated SSR context data

  // const state = createState(ctx.data)
  // instance.provide('state', state)

  instance.use(PrimeVue, { ripple: true })
  instance.component('Button', Button)
  instance.component('InputText', InputText)

  const history = import.meta.env.SSR
    ? createMemoryHistory()
    : createWebHistory()
  const router = createRouter({ history, routes })
  instance.use(router)

  if (url) {
    router.push(url)
    await router.isReady()
  }

  return {
    // ctx,
    router,
    instance
  }
}
