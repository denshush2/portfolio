import CodeTags from 'vue-material-design-icons/CodeTags.vue';
import CountryFlag from 'vue-country-flag';

export default {
  components: {
    CodeTags,
    CountryFlag,
  },
  data: () => ({
    isActive: 'Home',
    showNavigation: false,
    showSidepanel: false,
  }),
  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale;
    },
    changeRoute(name) {
      this.isActive = name;
      this.$router.push({ name });
    },
  },
};
