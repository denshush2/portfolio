import CodeTags from 'vue-material-design-icons/CodeTags.vue';

export default {
  components: {
    CodeTags,
  },
  data: () => ({
    isActive: 'Home',
    menu: [
      {
        name: 'Home',
      },
      {
        name: 'Projects',
      },
      {
        name: 'Blog',
      },
      {
        name: 'CV',
      },
    ],
  }),
  methods: {
    changeRoute(name) {
      this.isActive = name;
      this.$router.push({ name });
    },
  },
};
