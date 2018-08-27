<template>
	<div class='my-breadcrumb my-width hidden-md-and-down'>
		<span>当前位置：</span>
    <router-link v-for="(n,index) in nav" :to="n.url" :key="n.text" tag="span">
      <span :class="[index!=nav.length-1?'gray hover':'']">{{n.text}}</span>
      <span v-if="index!=nav.length-1"><i class="el-icon-arrow-right my-gray"></i></span>
    </router-link>
	</div>
</template>

<script>

export default {
  name: 'MyTitle',
  props:['nav'],
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.my-breadcrumb {
  color:#333;
  font-size:12px;
  text-align: left;
  padding-top: 18px;
}
.gray {
  color:#999;
}
</style>
