<template>
  <div class="hello gray-bg">
	<div class="my-width">
		<MyTitle :title="'解决方案,SOLUTION'" class="extra"></MyTitle>
		<!-- PC端 -->
		<div class="gray-sub hidden-md-and-down">教务管理系统（选排课）</div>
		<div class="s-items flex between hidden-md-and-down">
			<div 
				class="s-item"
				v-for="s in data">
				<img :src="s.src" alt="">
				<div class="s-text">{{s.text}}</div>
			</div>
		</div>
		<!-- 移动端 -->
		<Swiper :data="data"></Swiper>
	</div>
  </div>
</template>

<script>
export default {
  name: 'Solution',
  props:['data'],
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.my-title.extra {
	padding-bottom: 12px;
}
.gray-sub {
	font-size: 16px;
	color:#999;
}
.s-items {
	margin-top: 40px;
}
.s-item {
	width: 255px;
}
.s-text {
	margin-top: 36px;
	margin-bottom: 60px;
	text-align: justify;
	line-height: 26px;
	font-size:14px;
}
@media screen and (max-width: 1200px) {
  	.my-title.extra {
		padding-bottom: .41rem;
	}
}
</style>
