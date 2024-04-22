import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createApp } from 'vue'
import App from './App.vue'
import { store, key } from './store'

const app = createApp(App)

app.use(store, key)

app.mount('#app')