import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import Anima from './Anima.vue'

const app = createApp(Anima)

app.use(createPinia())

app.mount('#app')
