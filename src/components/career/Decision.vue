<template>
  <div class="hello my-width" id="career_decision">
	<MyTitle :title="'生涯教辅系统,DECISION'"></MyTitle>
	<MySubTitle>系统介绍</MySubTitle>
	<div class="my-sub-text">在高考改革的政策背景下，科学有效解决学生3+X学科<span class="block"></span>决策难题的系统工具</div>
	<!-- PC端 -->
	<div class="my-dashed dashed-bg relative hidden-md-and-down">
		<div class="dashed-item absolute" v-for="d in data.dashed"
			:style="'top:'+d.top+'px;left:'+d.left+'px'">
			<div class="dashed-title white-font all-center column" 
				:style="'width:'+d.width+'px;height:'+d.width+'px;background:'+d.color+';padding:'+d.width/3.8+'px;marginBottom:'+d.mb+'px'">
				<div>{{d.title[0]}}</div>
				<div>{{d.title[1]}}</div>
			</div>
			<div class="dashed-text text-left" v-html="d.text"></div>
		</div>
	</div>
	<!-- 移动端 -->
	<div class="my-dashed relative hidden-lg-and-up">
		<div class="mb-color-items flex between ">
			<div :class="['mb-color-item all-center column','c'+i]" v-for="(d,i) in data.dashed" :style="'background:'+d.color+';'">
				<div>{{d.title[0]}}</div>
				<div>{{d.title[1]}}</div>
			</div>
		</div>
	</div>
	<!-- PC端 -->
	<div class="gray-bg hidden-md-and-down">
		<MySubTitle class="w-sub">系统功能</MySubTitle>
		<div class="my-function flex">
			<div class="l text-right">
				<div class="my-item">3+X选科策略指导，帮助学生完成选选科决策</div>
				<div class="my-item">学校可自定义优势科目</div>
			</div>
			<div class="m">功能</div>
			<div class="r text-left">
				<div class="my-item">摸底学校选科情况，为教务排课提供依据</div>
				<div class="my-item">教师可推荐科目组合</div>
			</div>
	  	</div>
	</div>
	<!-- 移动端 -->
	<div class="gray-bg hidden-lg-and-up">
		<MySubTitle class="w-sub">系统功能</MySubTitle>
		<div class="mb-items flex wrap">
			<div class="mb-item text-right">3+X选科策略指导<span class="block"></span>帮助学生完成选选科决策</div>
			<div class="mb-item text-left mb-none">摸底学校选科情况<span class="block"></span>为教务排课提供依据</div>
			<div class="mb-item text-right">学校可自定义优势科目</div>
			<div class="mb-item text-left mb-none">教师可推荐科目组合</div>
	  	</div>
	</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
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
.dashed-item {
	width:256px;
}
.dashed-title {
	border-radius: 50%;
	font-size: 18px;
	box-sizing: border-box;
	line-height: 28px;
	margin:0 auto 68px;
}
.my-dashed {
	min-height: 440px;
}
.dashed-text {
	font-size:16px;
	line-height: 32px;
	text-align: justify;
}
.w-sub {
	padding: 60px 0 40px;
}
.my-function {
	background: #F0F0F0;
	padding: 0 168px 84px;
}
.l,.r {
	line-height: 32px;
}
.my-item {
	margin-bottom: 24px;
}
.m {
	align-self: flex-start;
	font-size:26px;
	width:104px;
	line-height: 104px;
	border-radius: 50%;
	background: #fff;
	margin: 0 68px;
}
@media screen and (max-width: 1200px) {
  .my-sub-text {
  	font-size: .22rem;
  }
  .mb-color-item {
  	border-radius: 50%;
  	font-size: .22rem;
  	color:#fff;
  }
  .my-dashed {
  	@include w;
  }
  .c0 {
  	width: 1rem;
  	height: 1rem;
  }
  .c1 {
  	width: 1.32rem;
  	height: 1.32rem;
  }
  .c2 {
	width: 1.36rem;
	height: 1.36rem;
  }
  .c3 {
	width: 1.5rem;
	height: 1.5rem;
  }
  .mb-color-items {
  	align-items: center;
  	padding-bottom: .64rem;
  }
  .my-dashed {
		min-height: 0;
	}
	.mb-items {
		@include w;
		font-size: .22rem;
	}
	.mb-item {
		background: $red;
		color: #fff;
		width:2.9rem;
		height: .8rem;
		margin-bottom: .32rem;
		margin-right: .32rem;
		line-height: .32rem;
		display: inline-flex;
		flex-direction: column;
		justify-content: center;
		padding: .16rem 0; 
		/*box-sizing: border-box;*/
		&.text-right {
			padding-right: .28rem;
		}
		&.text-left {
			padding-left: .28rem;
		}
	}
	.mb-none {
		margin-right: 0;
	}
	.w-sub.my-sub-title {
		padding: .3rem 0 0rem;
	}
}
</style>
