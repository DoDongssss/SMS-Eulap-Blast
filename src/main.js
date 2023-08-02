import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { gsap } from 'gsap'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

AOS.init();
const app = createApp(App)

// app.use(ElementPlus)
app.use(gsap)
app.use(router)
app.mount('#app')
