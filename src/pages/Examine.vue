<template>
  <div class="hello">
<!--     <MyNav></MyNav> -->
    <Top></Top>
    <Lists :data="examine"></Lists>
    <MyFooter></MyFooter>
    <!-- 固定的导航 -->
    <MyNav color="true" fixed="true" active="1"></MyNav>
  </div>
</template>

<script>
import Top from '../components/examine/Top';
import Lists from '../components/examine/Lists';
import data from '../../static/data/data.js';

var { examine } = data;
export default {
  name: 'HelloWorld',
  components:{
  	Top,
  	Lists
  },
  data () {
    return {
    	examine
    }
  },
  created() {
    document.title = '新高考';
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>

</style>
