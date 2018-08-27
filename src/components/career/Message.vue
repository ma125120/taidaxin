<template>
  <div class="gray-bg" id="career_message">
	<MyTitle :title="'学职信息系统,MESSAGE'"></MyTitle>
	<MySubTitle>系统介绍</MySubTitle>
	<div class="my-sub-text">院校、专业、选科及职业信息库，为学校及学生提供选科决策<span class="block"></span><span class="mb-none">、</span>志愿填报的信息参考和决策辅助</div>
	<div class="flex all-center msg-items hidden-md-and-down">
		<div class="l"><img :src="msgImg" alt=""></div>
		<div class="r text-left">
			<div class="r-item" v-for="msg in data">
				<div class="r-title red-font">{{msg.title}}</div>
				<div class="r-text">{{msg.text}}</div>
			</div>
		</div>
	</div>
	<!-- 移动端 -->
	<div class="hidden-lg-and-up mb relative">
		<MySubTitle class="extra">系统功能</MySubTitle>
		<div class="l absolute"><img :src="msgImg" alt=""></div>
		<div class="mb-items flex wrap">
		  		<div class="mb-item one even">{{data[0].title}}</div>
		  		<div class="mb-item">{{data[1].title}}</div>
		  		<div class="mb-item even">{{data[2].title}}</div>
		  		<div class="mb-item">{{data[3].title}}</div>
		  		<div class="mb-item even">{{data[4].title}}</div>
		</div>
	</div>
  </div>
</template>

<script>
export default {
  name: 'Message',
  props:['data'],
  data () {
    return {
    	msgImg:'https://taidaxin.oss-cn-qingdao.aliyuncs.com/msg.png'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
@import '../var.scss';
.r-item {
	margin-bottom: 42px;
}
.msg-items {
	padding-bottom: 64px;
}
.l {
	margin-right: 188px;
}
.r-title {
	line-height: 36px;
}

@media screen and (max-width: 1200px) {
	.gray-bg {
		background: #fff;
	}
	.mb {
		/*margin-top: -1.2rem;*/
		background: #f0f0f0;

	}
	.extra.my-sub-title {
		padding-top: .32rem;
		padding-bottom: .16rem;
	}
	.my-sub-text {
		font-size: .22rem;
	}
	.l {
		width: 6rem;
		margin: 0 auto;
	}
	.l img {
		width: 3rem;
		position: relative;
	}
	.mb-items {
		@include w;
		margin-top: 1.68rem;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
	.mb-item {
		width: 2.38rem;
		line-height: .8rem;
		background: $red;
		color:#fff;
		font-size: .22rem;
		margin:{
			bottom: .32rem;
			right:.32rem;
		};
	}
	.one {
		margin-left: 2.7rem;
	}
	.even {
		margin-right: 0;
	}
}
</style>
