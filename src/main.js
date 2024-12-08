import { createApp } from 'vue'
import i18n from './lang/i18n'
import App from './App.vue'
import './assets/styles/theme.scss'
const app = createApp(App)
app.use(i18n)
app.mount('#app')
createApp(App).mount('#app')
