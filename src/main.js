import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
import { Icon } from '@iconify/vue';
import { createPinia } from 'pinia';

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(store)
app.component("Icon", Icon)
app.use(pinia)

app.mount('#app')
