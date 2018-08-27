<template>
  <div class="page-career">
	<MyNav color="true" active="1"></MyNav>
	<Top :data="navs"></Top>
	<Breadcrumb :nav="nav"></Breadcrumb>
	<Appraisal :data="appraisal"></Appraisal>
	<Message :data="message"></Message>
	<Assistants :data="assistants"></Assistants>
	<Decision :data="decision"></Decision>
	<Volunteer :data="volunteer"></Volunteer>
	<Stimulate :data="stimulate"></Stimulate>
  	<Record :data="record"></Record>
	<MyFooter></MyFooter>
	<!-- 返回顶部 -->
    <ToTop></ToTop>
	<!-- 固定的导航 -->
    <MyNav color="true" fixed="true" active="1"></MyNav>
  </div>
</template>

<script>
import Top from '../components/career/Top';
import Appraisal from '../components/career/Appraisal';
import Assistants from '../components/career/Assistants';
import Decision from '../components/career/Decision';
import Message from '../components/career/Message';
import Record from '../components/career/Record';
import Stimulate from '../components/career/Stimulate';
import Volunteer from '../components/career/Volunteer';
import data from '../../static/data/data.js';

var { nav,
	appraisal,
	assistants,
	decision,
	message,
	record,
	stimulate,
	volunteer } = data.career;

export default {
  name: 'Career',
  props:['data'],
  components:{
  	Top,
  	Appraisal,
  	Message,
  	Assistants,
  	Decision,
  	Volunteer,
  	Stimulate,
  	Record
  },
  data () {
    return {
    	navs:nav,
		appraisal,
		assistants,
		decision,
		message,
		record,
		stimulate,
		volunteer,
		nav:[{
			text:'首页',
			url:'/home'
		},{
			text:'新高考',
			url:'/examine'
		},{
			text:'职业生涯规划',
			url:'/career'
		}]
    }
  },
  created() {
    document.title = '职业生涯规划';
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.page-career {
	background: #fff;
}
</style>
