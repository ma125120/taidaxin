<template>
  <div class="product">
  	<MyNav color="true" class='white'  active="2"></MyNav>
  	<div class="my-width">
  		<CardItem :data="products"></CardItem>
  	</div>
	<MyFooter></MyFooter>
  <!-- 固定的导航 -->
    <MyNav color="true" fixed="true" active="2"></MyNav>
  </div>
</template>

<script>
import CardItem from '../components/product/CardItem.vue'
import data from '../../static/data/data.js';

var { products } = data;

products = products.map((v,i)=>{
	v.show=false;
	return v;
})

export default {
  name: 'Product',
  props:['data'],
  components:{
  	CardItem
  },
  data () {
    return {
    	products
    }
  },
  created() {
    document.title = '产品中心';
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.main {
	background: #FFFFFF;
}
.white.color {
	background: #fff;
}
</style>
