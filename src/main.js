import './style.css'
import './responsive.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'animate.css';

import App from './App.vue'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)

app.mount('#app')

