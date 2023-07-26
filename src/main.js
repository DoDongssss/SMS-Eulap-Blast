import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { gsap } from 'gsap'

const app = createApp(App)
app.use(gsap)
app.use(router)
app.mount('#app')
