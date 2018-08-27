<template>
  <div class="com-about my-width" id="about_child">
		<MyTitle :title="'关于我们,ABOUT'" class="hidden-md-and-down"></MyTitle>
		<!-- PC端 -->
		<div class="child-top flex hidden-md-and-down">
			<img :src="aImg" alt="">
			<div class="about-content">
				<div v-for="c in data.content" class='content-item'>{{c}}</div>
			</div>
		</div>
		<div class="my-cards flex hidden-md-and-down">
			<div class="new-card" v-for="card in data.card">
				<div class="card-title">{{card.title}}</div>
				<div class="card-content" v-html="card.content"></div>
			</div>
		</div>

		<!-- 移动端 -->
		<div class="mb-head all-center column hidden-lg-and-up">
			<div class="mock1"></div>
			<div class="mock2"></div>
			<div class="mb-card">
				<MyTitle :title="'公司简介,ABOUT'" class="extra"></MyTitle>
				<div class="mb-content text-left">
					<div v-for="c in data.content" class='content-item'>{{c}}</div>
				</div>
			</div>
		</div>
		<div class="mb-wrap">
			<div class="mb-cards flex hidden-lg-and-up">
				<div class="mb-new-card" v-for="card in data.card">
					<div class="mb-title">{{card.title}}</div>
					<div class="mb-card-content" v-html="card.content"></div>
				</div>
			</div>
		</div>
		
  </div>
</template>

<script>
export default {
  name: 'AboutChild',
  props:['data'],
  data () {
    return {
    	data1:'',
    	aImg:'https://taidaxin.oss-cn-qingdao.aliyuncs.com/a.jpg',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
@import '../var.scss';
.about-content {
	padding: 54px 64px;
	font-size: 16px;
	background: #fff;
	box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
	text-align: left;
	position: relative;
	top: 28px;
	left: -90px;
}
.content-item {
	text-indent: 2em;
	line-height: 36px;
}
.child-top {
	margin-bottom: 72px;
}

.my-cards {
	flex-wrap: wrap;
	justify-content: space-between;
}
.new-card {
	text-align: center;
	font-size: 20px;
	width:384px;
	height:216px;
	padding: 50px 34px;
	box-sizing: border-box;
	margin-top: 28px;
	transition: none;
	background: #fff;
	color:#333;
	border-radius: 4px;
}

.card-title {
	color:#BA1116;
	font-size: 18px;
}
.card-content {
	margin-top: 16px;
	font-size: 16px;
	line-height: 48px;
}
@media screen and (max-width: 1200px) {
  .mb-card {
  	background: #fff;
  	padding: .28rem;
  	box-sizing: border-box;
  	font-size: .22rem;
  	@include bs;
  	@include w;
  }
  .extra.my-title {
  	padding:0;
  	padding-bottom: .12rem;
  }
  .mock1 {
  	width: 6.24rem;
  	height: .2rem;
  	background: rgba(255,255,255,.5);
  }
  .mock2 {
  	width: 6.5rem;
  	height: .2rem;
  	background: rgba(255,255,255,.3);
  }
  .mb-head {
  	position: relative;
  	top: -1.2rem;
  }
  .mb-wrap {
  	@include w;
  	overflow-x: auto;
  	margin-top: -.68rem;
  }
  .mb-cards {
		justify-content: flex-start;
		min-width: 2394px;
		padding: 0.16rem 0.06rem;
	}
	.mb-new-card {
		background: #fff;
		width: 238px;
		/*max-height: 216px;*/
		margin-right: 28px;
		padding: 0 .24rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		@include bs;
	}
	.mb-title {
		font-size: .24rem;
		padding: .56rem 0 0rem;
		color: $red;
	}
	.mb-card-content {
		font-size: .2rem;
		line-height: .32rem;
		height: 1.2rem;
		padding-bottom: .24rem;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
	}
	.content-item {
		line-height: .4rem;
	}
}
</style>
