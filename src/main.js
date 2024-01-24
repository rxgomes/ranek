import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import LoadingComponent from './components/LoadingComponent.vue'
import filters from "./helpers";


const vm = createApp(App)
vm.use(store)
vm.use(router)
vm.config.globalProperties.$filters = filters;
vm.component("LoadingComponent", LoadingComponent)
vm.mount('#app')