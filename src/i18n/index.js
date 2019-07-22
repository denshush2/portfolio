import Vue from 'vue';
import VueI18n from 'vue-i18n';
import en from './en';
import es from './es';
import ru from './ru';

Vue.use(VueI18n);
export default new VueI18n({
  local: 'en',
  silentTranslationWarn: true,
  fallbackLocale: 'en',
  messages: {
    en,
    ru,
    es,
  },
});
// import en from './en';
// import ru from './ru';

// export default (name, local = 'en') => {
//   let response;
//   if (local === 'en') {
//     response = en[name];
//   }
//   if (local === 'ru') {
//     response = ru[name];
//   }
//   return response;
// };
