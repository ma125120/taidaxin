<template>
  <div class="wisdom-top wisdom-bg all-center">
	<div class="my-modal all-center">
		<div class="l text-left">
			<div class="l-text" v-for="l in left">{{l}}</div>
		</div>
		<div class="m">解决</div>
		<div class="r text-left">
			<div class="r-text" v-for="r in right">{{r}}？</div>
		</div>
	</div>
  </div>
</template>

<script>
export default {
  name: 'Top',
  props:['data'],
  data () {
    return {
    	left:['教务管理系统','教务评价系统'],
    	right:['分层走班','教学时间安排','选课后如何排课','成绩分析与管理','教学质量评估']
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.wisdom-top {
	height:360px;
}
.my-modal {
	background: rgba(0,0,0,.5);
	color:#fff;
	padding: 76px 66px 76px 92px;
}
.l-text {
	font-size: 16px;
	padding-bottom: 24px;
}
.m {
	font-size: 28px;
	padding:0 108px;
}
.r-text {
	font-size: 15px;
	padding-bottom: 12px;
}
</style>
