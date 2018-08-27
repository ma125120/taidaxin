<template>
  <div class="" id="career_assistants">
  	<div class="my-width">
  		<MyTitle :title="'生涯教辅系统,ASSISTANTS'"></MyTitle>
		<MySubTitle class='extra'>系统介绍</MySubTitle>
		<div class="my-sub-text">帮助教师顺利开展生涯课程的教辅资源管理工具，提供配套<span class="block"></span>生涯课程课件、教案、教具、案例资源等</div>
  	</div>
	
	<div class="gray-bg padding-b36">
		<MySubTitle class="my-sub">系统功能</MySubTitle>
		<div class="mb-items hidden-lg-and-up">
		  		<div class="mb-item">在线测评</div>
		  		<div class="mb-item b-none">统计分析</div>
		  		<div class="mb-item">智能管理</div>
		  		<div class="mb-item b-none">个性定制</div>
		  	</div>
		<div class="my-width">
			<Func :data="data"></Func>
			<div class="flex around two-img">
				<img :src="'https://taidaxin.oss-cn-qingdao.aliyuncs.com/a1.jpg'" alt="">
				<img :src="'https://taidaxin.oss-cn-qingdao.aliyuncs.com/a2.jpg'" alt="">
			</div>
		</div>
		
	</div>

  </div>
</template>

<script>
import Func from './Func.vue';

export default {
  name: 'HelloWorld',
  props:['data'],
  components:{
  	Func
  },
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
@import '../var.scss';
.my-title {
	padding-bottom: 0;
}
.my-sub-title.extra {
	padding-top: 40px;
}
.my-function {
	padding-top:0;
	padding-bottom: 40px;
	margin-bottom: 0;
}
.card-img {
	margin-bottom: 32px;
}
.my-card-title {
	line-height: 32px;
}
.my-sub-title {
	padding-top: 68px;
}
@media screen and (max-width: 1200px) {
  .my-sub-text {
  	font-size: .22rem;
  	color: rgb(51,51,51);
  	margin-bottom: .24rem;
  }
  .my-sub.my-sub-title {
  	padding: .32rem 0 0rem;
  }
  .extra.my-sub-title {
  	padding-top: .3rem;
  }
  .mb-item {
  	width: 2.38rem;
  	line-height: .8rem;
  	background: $red;
  	font-size: .22rem;
  	color:#fff;
  	margin-right: .32rem;
  	margin-bottom: .32rem;
  	display: inline-block;
  	vertical-align: middle;
  }
  .b-none {
  	margin-right: 0;
  }
  .mb {
  	background: #F0F0F0;
  }

  .two-img {
  	padding-bottom: .24rem;
  }
  .two-img img {
  	width: 3.31rem;
  	height: 1.86rem;
  }
  .padding-b36 {
  	padding-bottom: .24rem;
  }
}
</style>
