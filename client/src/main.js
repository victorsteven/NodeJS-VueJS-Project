import Vue from 'vue'
import App from './App.vue'
import router from './router/index';
import Vuetify from 'vuetify';
import { sync } from 'vuex-router-sync';
import 'vuetify/dist/vuetify.min.css';
import store from '@/store/store';
import VueYouTubeEmbed from 'vue-youtube-embed'

Vue.config.productionTip = false
Vue.use(Vuetify);
Vue.use(VueYouTubeEmbed)


sync(store, router);

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
