<template>
  <div class="my-width" id="career_stimulate">
  	<MyTitle :title="'成长激励系统,STIMULATE'"></MyTitle>
		<MySubTitle>系统介绍</MySubTitle>
		<div class="my-sub-text n">以个人目标、学生特质、学业成绩为依据，针对学生发展<span class="block"></span>的过程关注与激励的系统</div>
		<div class="s-items flex between">
			<div class="s-item gray-bg all-center" v-for="s in data">
				<img :src="s.src" alt="">
				<div class="s-text text-left hidden-md-and-down">
					<div v-for="text in s.text">{{text}}</div>
				</div>
				<!-- mobile -->
				<div class="s-text text-left hidden-lg-and-up">
					<span v-for="text in s.text">{{text}}</span>
				</div>
			</div>
		</div>
  </div>
</template>

<script>
export default {
  name: 'Stimulate',
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
.my-title {
	padding-top:28px;
}
.s-item {
	padding:48px 56px 48px 42px;
}
.s-text {
	line-height: 32px;
	padding-left:24px;
}
@media screen and (max-width: 1200px) {
	.my-sub-text {
		font-size: .22rem;
	}
	.s-items{
		display: block;
		font-size: .22rem;
		padding-bottom: .48rem;
		@include w;
		img {
			height: .4rem;
		}
	}

	.s-item {
		margin-bottom: 4px;
		padding:.48rem .56rem .48rem .42rem;
		justify-content: flex-start;
	}
}
</style>
