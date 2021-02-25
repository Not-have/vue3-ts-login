// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'
// import store from './store'

// createApp(App).use(store).use(router).mount('#app')



import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入elementUI
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

// 这块 不适用链式的
// createApp(App).use(store).use(router).mount('#app')

const app = createApp(App);
app.use(ElementPlus);
app.use(store);
app.use(router);
app.mount('#app');
