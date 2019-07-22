import Vue from 'vue';
import firebase from 'firebase';
import VueMaterial from 'vue-material';
import App from './App.vue';
import router from './router';
import store from './store';
import config from './config';
import './assets/styles/index.scss';
import 'vue-material-design-icons/styles.css';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';
import i18n from './i18n';

firebase.initializeApp(config.firebase);
Vue.use(VueMaterial);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app');
