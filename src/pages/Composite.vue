<template>
  <div class="page-composite">
	<MyNav color="true" active="1"></MyNav>
	<Top></Top>
	<Func1 :data="icons"></Func1>
	<Func2 :data="func2"></Func2>
	<Document :data="document"></Document>
	<MyFooter></MyFooter>
  <!-- 返回顶部 -->
  <ToTop></ToTop>
	<!-- 固定的导航 -->
    <MyNav color="true" fixed="true" active="1"></MyNav>
  </div>
</template>

<script>
import Top from '../components/composite/Top';
import Func1 from '../components/composite/Func1';
import Func2 from '../components/composite/Func2';
import Document from '../components/composite/Document';
import data from '../../static/data/data.js';

var icons = data.career.record.icons,
	{ document,func1,func2 } =data.composite;

export default {
  name: 'Composite',
  props:['data'],
  components:{
    Top,
  	Func1,
  	Func2,
  	Document
  },
  data () {
    return {
    	icons,
    	document,func1,func2,
      
    }
  },
  created() {
    document.title = '综合素质评价';
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>

</style>
