import { createSSRApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'

import 'primevue/resources/themes/lara-dark-teal/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

import Button from 'primevue/button'
import InputText from 'primevue/inputtext'

export function createApp() {
  const app = createSSRApp(App)

  app.use(PrimeVue, { ripple: true })

  app.component('Button', Button)
  app.component('InputText', InputText)

  return app
}
