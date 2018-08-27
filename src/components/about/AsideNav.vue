<template>
  <ul class="aside-nav">
	<li v-for="n in data"><a :href="n.url" class='nav-item'>{{n.text}}</a></li>
  </ul>
</template>

<script>
export default {
  name: 'AsideNav',
  props:['data'],
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
@import '../var.scss';
.aside-nav {
	position: absolute;
	top:800px;
	right:0;
	z-index:100;
	width:94px;
	line-height: 86px;
	background: #fff;
}
.nav-item {
	display: inline-block;
	vertical-align: middle;
	text-decoration: none;
	width:100%;
	color:#333;
}
.nav-item:hover {
	background: $red;
	color: #fff;
}
</style>
