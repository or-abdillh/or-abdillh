import { createApp } from 'vue'
import App from '@/App.vue' 
import AOS from 'aos'

import '@/styles/index.css'
import '@/styles/app.css'
import 'animate.css'
import 'aos/dist/aos.css'

AOS.init({ delay: '200' })

createApp(App).mount('#app')
