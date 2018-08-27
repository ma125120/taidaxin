<template>
	<div>
		<div class="my-function flex hidden-md-and-down">
			<div class="l text-right">
				<div :class="['my-item',w?'new-item':'']" v-for="left in data.left">
					<div class="func-title bold">{{left.title}}</div>
					<div class="func-text">{{left.text}}</div>
				</div>
			</div>
			<div class="m">功能</div>
			<div class="r text-left">
				<div :class="['my-item',w?'new-item':'']" v-for="right in data.right">
					<div class="func-title bold">{{right.title}}</div>
					<div class="func-text">{{right.text}}</div>
				</div>
			</div>
	  </div>
	</div>
  
</template>

<script>
export default {
  name: 'Func',
  props:['data','w'],
  data () {
    return {
    	items:['在线测评','统计分析','智能管理','个性定制']
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.my-function {
	background: #F0F0F0;
	padding: 64px 168px;
	margin-bottom: 60px;
}
.l,.r {
	line-height: 32px;
	align-self: center;
	padding-top: 22px;
	width: 330px;
}
.my-item {
	margin-bottom: 24px;
}
.m {
	align-self: center;
	font-size:26px;
	width:104px;
	line-height: 104px;
	border-radius: 50%;
	background: #fff;
	margin: 0 68px;
}
@media screen and (max-width: 1200px) {
  
}
</style>
