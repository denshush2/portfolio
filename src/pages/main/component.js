import NavBar from '../../containers/navbar/index.vue';
import PersonalInfo from '../../containers/home/personalInfo/index.vue';
import Links from '../../containers/home/links/index.vue';

export default {
  name: 'page',
  components: {
    NavBar,
    PersonalInfo,
    Links,
  },
  beforeMount() {
    console.log('Before Mount Main');
  },
  beforeDestroy() {
    console.log('Before Destroy Main');
  },
};
