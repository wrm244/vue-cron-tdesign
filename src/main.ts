import './assets/main.css'
import TCron from './packages/vue-cron-test.vue'
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.component('TCron', TCron)
app.mount('#app')
declare module 'vue' {
  export interface GlobalComponents {
    TCron: typeof TCron
  }
}
