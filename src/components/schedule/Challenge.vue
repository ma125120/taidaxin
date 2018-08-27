<template>
	<div>
		<MyTitle :title="'改革挑战,CHALLENGE'" class="extra hidden-lg-and-up"></MyTitle>
		<div class="schedule-challenge center relative">
			<!-- 移动端红色背景 -->
			<div class="red-bg absolute hidden-lg-and-up"></div>
			<!-- 内容部分 -->
			<div class="challenge-wrap">
				<MyTitle :title="'改革挑战,CHALLENGE'" class="extra hidden-md-and-down"></MyTitle>
				<ul class="challenge-ul text-left">
					<li v-for="c in data" class="challenge-li flex">
						<div class="red-circle all-center">
							<div class="red-circle-inset"></div>
						</div>
						<div class="c-text">{{c.text}}</div>
					</li>
				</ul>
			</div>
	  </div>
	</div>
  
</template>

<script>
export default {
  name: 'Challenge',
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
.schedule-challenge {
	background: #3A0000;
	padding: 42px 0;
}
.extra.my-title {
	padding-bottom: 0;
}
.challenge-wrap {
	background: #fff;
}
.challenge-ul {
	padding: 0 72px 60px 72px;
}
.challenge-li {
	padding-top: 42px;
	align-items: center;
}
.red-circle {
  width: 10px;
  height: 10px;
  /*background: #DD5955;*/
  border-radius: 50%;
  margin-right: 32px;
  border:1px solid #DD5955;
}
.red-circle-inset {
  width: 6px;
  height: 6px;
  background: #BE1B1E;
  border-radius: 50%;
}
@media screen and (max-width: 1200px) {
	.schedule-challenge {
		background: #fff;
		padding: .2rem 0 0;
	}
  .extra.my-title {
  	padding-bottom: .32rem;
  }
/*	.red-bg {
		top:0;bottom:0;
		left:50%;right:0;
		background: $red;
		z-index: 0;
	}*/
	.challenge-wrap {
		position: relative;
		z-index: 10;
		width: 6.86rem;
		margin: 0 auto;
	/*	background: #000;*/
		color: #000;
		font-size: .22rem;
	}
	.red-circle {
	  margin-right: .32rem;
	}
	.c-text {
		text-align: justify;
		line-height: .4rem;
		flex:1;
		padding: .28rem;
		border-radius: 4px;
		box-shadow: 2px 2px 6px rgba(128,128,128,.05),-2px -2px 6px rgba(128,128,128,.05);
	}
	.challenge-ul {
		padding: 0 .24rem .24rem .24rem;
	}
	.challenge-li {
		padding-top: .12rem;
		padding: .24rem 0;
	}
	.challenge-li:nth-child(1) {
		padding-top: 0;
	}
	.challenge-li:nth-last-child(1) {
		padding-bottom: 0;
	}
}
</style>
