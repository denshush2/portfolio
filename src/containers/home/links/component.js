import GithubIcon from 'vue-material-design-icons/GithubCircle.vue';
import LinkedInIcon from 'vue-material-design-icons/LinkedinBox.vue';
import GmailIcon from 'vue-material-design-icons/Gmail.vue';
import GitLabIcon from 'vue-material-design-icons/Gitlab.vue';

export default {
  components: {
    GithubIcon,
    LinkedInIcon,
    GmailIcon,
    GitLabIcon,
  },
  data: () => ({
    links: [
      {
        componentName: 'GithubIcon',
        link: 'https://github.com/denshush2',
      },
      {
        componentName: 'LinkedInIcon',
        link: 'https://www.linkedin.com/in/denshush2/',
      },
      {
        componentName: 'GmailIcon',
        link: 'https://mail.google.com/',
      },
      {
        componentName: 'GitLabIcon',
        link: 'https://gitlab.com/denshush2',
      },
    ],
  }),
  methods: {
    redirect(link) {
      window.open(link, '_blank');
    },
  },
};
