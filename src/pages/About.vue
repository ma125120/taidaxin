<template>
  <div class="page-about">
  	<MyNav color="true" active="3"></MyNav>
  	<Top :data="nav"></Top>
  	<AboutChild :data="aboutData"></AboutChild>
  	<Milestone :data="milestone"></Milestone>
  	<Dynamic :data="dynamic"></Dynamic>
	  <Advantage :data="advantage"></Advantage>
    <Contact></Contact>
<!--     <AsideNav :data="nav"></AsideNav> -->
    <MyFooter></MyFooter>
    <!-- 返回顶部 -->
    <ToTop></ToTop> 
    <!-- 固定的导航 -->
    <MyNav color="true" fixed="true" active="3"></MyNav>
  </div>
</template>

<script>
import Top from '../components/about/Top';
import AboutChild from '../components/about/AboutChild';
import Milestone from '../components/about/Milestone';
import Dynamic from '../components/about/Dynamic';
import Advantage from '../components/about/Advantage';
import Contact from '../components/about/Contact';
import AsideNav from '../components/about/AsideNav';
import data from '../../static/data/data.js';

var { aboutData, advantage, contact, dynamic, milestone, nav } = data.about;

export default {
  name: 'About',
  components:{
  	Top,
  	AboutChild,
  	Milestone,
  	Dynamic,
  	Advantage,
    Contact,
    AsideNav
  },
  props:[],
  data () {
    return {
    	aboutData, advantage, contact, dynamic, milestone, nav
    }
  },
  mounted() {
    document.title = '关于我们';
    if(this.$route.query.dy) {
      var top = document.querySelectorAll("#about_dynamic")[0].offsetTop;
      window.scrollTo(0,top-40);
    }
  },
  activated() {
    
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.page-about {
	background: #eee;
}
@media screen and (max-width: 1200px) {
  .page-about {
    background: #fff;
  }
}
</style>
