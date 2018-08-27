<template>
	<div>
		<div class="career-top career-bg center relative white-font hidden-md-and-down">
			<div class="center-box all-center">
				<div class="l">
					<p class="p" v-for="l in data">{{l.text}}?</p>
				</div>
				<div class="m">解决</div>
				<div class="r">
					<p class="p" v-for="r in right">{{r}}?</p>
				</div>
			</div>

			<MySubNav :data="data"></MySubNav>
	  </div>
	  <!-- 移动端 -->
	  <div class="career-bg1 hidden-lg-and-up all-center">
			<div class="mb-box all-center">
				<div class="left">
					<p class="p" v-for="l in data">{{l.text}}?</p>
				</div>
				<div class="middle">解决</div>
				<div class="right">
					<p class="p" v-for="r in right">{{r}}?</p>
				</div>
			</div>
	  </div>
	</div>
  
</template>

<script>
export default {
  name: 'Top',
  props:['data','left'],
  data () {
    return {
    	right:['兴趣特长','如何选科','如何填报志愿','综合素质评价','学业专业职业衔接','自主招生']
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.career-top {
	width:100%;
	min-height: 364px;
	padding:24px 0;
}
.center-box {
	width:430px;
	height:194px;
	text-align: left;
	background: rgba(0,0,0,.2);
	margin-top: 36px;
	padding:40px 58px  40px 96px;
}
.m {
	font-size:26px;
	padding: 82px 78px;
}
.r,.l {
	font-size: 14px;
	line-height: 26px;
}
.p {
	margin:0;
	padding: 0;
}
@media screen and (max-width: 1200px) {
	.career-bg1 {
			height: 2.65rem;
	}
	.mb-box {
		font-size: .2rem;
		color: rgba(255,255,255,.76);
		line-height: .32rem;
		text-align: left;
		background: rgba(0,0,0,.5);
		width:7.5rem;
		height: 2.65rem;
	}
	.middle {
		font-size: .24rem;
		padding: 0 .68rem;
	}

}
</style>
