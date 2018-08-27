<template>
  <div class="hello">
  	<Top :data="nav"></Top>
  	<Examine :data="newData"></Examine>
  	<Num :data="num"></Num>
  	<Product :data="product"></Product>
    <MyFooter></MyFooter> 
    <ToTop></ToTop>
    <!-- 固定的导航 -->
    <MyNav color="true" fixed="true" active="0"></MyNav>
  </div>
</template>

<script>
import Top from '../components/home/Top';
import Examine from '../components/home/Examine.vue';
import Num from '../components/home/Num.vue'
import Product from '../components/home/Product.vue'
import data from '../../static/data/data.js';

var { nav, newData, num, product } = data;
export default {
  name: 'HelloWorld',
  components:{
  		Top,
  		Examine,
  		Num,
  		Product
  },
  data () {
    return {
    	nav:nav,
    	newData:newData,
    	num:num,
    	product
    }
  },
  created() {
    document.title = '首页';
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.hello {
  background: #fff;
}

</style>
