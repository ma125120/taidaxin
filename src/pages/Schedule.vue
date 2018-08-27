<template>
  <div class="schedule-page white">
  	<MyNav color="true" class='white' active="1"></MyNav>
  	<Top></Top>
    <Background :data="background"></Background>
    <Challenge :data="challenge"></Challenge>
    <Comparative :data="comparative"></Comparative>
    <Solution :data="solution"></Solution>
    <Func1 :data="func1"></Func1>
    <Func2 :data="func2"></Func2>
    <Chart></Chart>
	  <MyFooter></MyFooter>
    <ToTop></ToTop>
    <!-- 固定的导航 -->
    <MyNav color="true" fixed="true" active="1"></MyNav>
  </div>
</template>

<script>
import Top from '../components/schedule/Top.vue'
import Background from '../components/schedule/Background.vue'
import Challenge from '../components/schedule/Challenge.vue'
import Comparative from '../components/schedule/Comparative.vue'
import Solution from '../components/schedule/Solution.vue'
import Func1 from '../components/schedule/Func1.vue'
import Func2 from '../components/schedule/Func2.vue'
import Chart from '../components/schedule/Chart.vue'
import data from '../../static/data/data.js';

var { info } = data,
    {
      background,
      chart,
      comparative,
      func1,
      func2,
      solution,
      challenge
    } =data.schedule;

export default {
  name: 'Schedule',
  props:['data'],
  components:{
    Top,
    Background,
    Challenge,
    Comparative,
    Solution,
    Func1,
    Func2,
    Chart
  },
  data () {
    return {
    	info,
      background,
      chart,
      comparative,
      func1,
      func2,
      solution,
      challenge
    }
  },
  created() {
    document.title = '走班排课';
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.main,
.white {
	background: #FFFFFF;
}
.white.color {
	background: #fff;
}

</style>
