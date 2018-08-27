<template>
  <div class="my-width" id="career_appraisal">
		<MyTitle :title="'生涯测评系统,APPRAISAL'" id="del-margin"></MyTitle>
		<MySubTitle class='extra'>系统介绍</MySubTitle>
		<div class="my-sub-text">基于国际经典量表修订的本土化专业测评工具，帮助学生<span class="block"></span>实现生涯自我探索</div>
		<MySubTitle class="hidden-md-and-down">系统功能</MySubTitle>
		<Func :data="data.func" class="hidden-md-and-down"></Func>
		<!-- 移动端 -->
		<div class="hidden-lg-and-up mb">
		  	<MySubTitle class='extra color'>系统功能</MySubTitle>
		  	<div class="mb-items">
		  		<div class="mb-item">在线测评</div>
		  		<div class="mb-item b-none">统计分析</div>
		  		<div class="mb-item">智能管理</div>
		  		<div class="mb-item b-none">个性定制</div>
		  	</div>
		  	<!-- <div class="flex between two-img">
					<img :src="'./static/img/career/a1.jpg'" alt="">
					<img :src="'./static/img/career/a2.jpg'" alt="">
				</div> -->
		</div>
		
		<div class="card-wrap">
			<div class="flex my-cards">
				<div class="my-real-card" v-for="card in data.cards">
					<img class="card-img" :src="card.src" alt="">
					<div class="my-card-title">{{card.title[0]}}</div>
					<div class="my-card-title">{{card.title[1]}}</div>
				</div>
			</div>
		</div>
	
  </div>
</template>

<script>
import Func from './Func.vue';

export default {
  name: 'Appraisal',
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
#del-margin {
	padding-top: 40px;
}
.my-cards {
	margin-bottom: 60px;
	justify-content: space-between;
}
.card-img {
	margin-bottom: 32px;
}
.my-card-title {
	line-height: 32px;
}
@media screen and (max-width: 1200px) {
	.extra.color {
		padding-top: .3rem;
	}
  .my-sub-text {
  	font-size: .22rem;
  	color: rgb(51,51,51);
  	line-height: .36rem;
  	margin-bottom: .24rem;
  }
  .mb-items {
  	@include w;
  	display: flex;
  	flex-wrap: wrap;
  	justify-content: center;
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
  .card-wrap {
  	@include w;
  	overflow-x: auto;
  }
  .card-img {
  	width: 1.72rem;
  	margin-top: .42rem;
  	margin-bottom: .32rem;
  	padding: 0 .24rem;
  }
  
  .my-card-title {
		line-height: .32rem;
  }
  .two-img {
  	@include w;
  	padding-bottom: .24rem;
  }
  .two-img img {
  	width: 3.31rem;
  	height: 1.86rem;
  }
  .my-cards{
  	margin-bottom: 0;
  	min-width: 8rem;
  	justify-content: flex-start;
  }
  #del-margin {
  	padding-top: .3rem;
  }
  .my-real-card {
  	margin-right: .6rem;
  	width: 2.2rem;
  	min-width: 108px;
  	font-size: .24rem;
  }
}

</style>
