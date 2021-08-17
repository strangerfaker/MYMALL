import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import router from "./router";

//这里的引用有问题
// import 'element-ui/lib/theme-chalk/index.css';
// import {transformToRequire} from "../build/vue-loader.conf";

Vue.config.productionTip = false
Vue.use(ElementUI);


new Vue({
  el: '#app',
  render: h => h(App),
  router
})

