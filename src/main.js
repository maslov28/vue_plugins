import { createApp } from 'vue'
import App from './App.vue'
import globalRegPlugin from './globalRegPlugin'

const app = createApp(App)

app.use(globalRegPlugin)

app.mount('#app')
