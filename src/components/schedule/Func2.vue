<template>
  <div class="my-width">
	<MyTitle :title="'系统优势,FUNCTION'" class="extra"></MyTitle>
	<!-- PC端 -->
	<div :class="['v-items flex wrap new-items hidden-md-and-down']">
		<div class="v-item flex gray-bg" 
				v-for="(v,index) in data"
				v-if="index%2==0">
			<div class="v-content text-right">
				<div class="v-title bold">{{v.title}}</div>
				<div class="v-texts">
					<div class="v-text" v-for="text in v.text">{{text}}</div>
				</div>
			</div>
			<div class="v-img">
				<img :src="v.src" alt="">
			</div>
		</div>
		<div class="v-item v-r flex gray-bg" 
				v-else>
			<div class="v-img">
				<img :src="v.src" alt="" >
			</div>
			<div class="v-content text-left">
				<div class="v-title bold">{{v.title}}</div>
				<div class="v-texts">
					<div class="v-text" v-for="text in v.text">{{text}}</div>
				</div>
			</div>
		</div>
  	</div>
  	<!-- 移动端 -->
  	<div class="mb-items hidden-lg-and-up flex">
  		<div class="item" v-for="f in data">
  			<img :src="f.src" alt="" class="item-img">
  			<div class="item-title">{{f.title}}</div>
  		</div>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'Func2',
  props:['data'],
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.v-items {
	justify-content: space-between;
	font-size: 14px;
	margin-bottom: 28px;
}
.v-item {
	width:400px;
	padding: 36px 42px 36px 36px;
	margin-bottom: 32px;
	align-items: center;
	justify-content: flex-end;
}
.v-content {
	line-height: 28px;
}
.v-img {
	padding-left: 64px;
}
.v-r {
	justify-content: flex-start;
}
.v-r .v-img {
	padding-right: 64px;
	padding-left: 0;
}
.new-items .v-item {
	width:583px;
	box-sizing: border-box;
}
@media screen and (max-width: 1200px) {
	.item-img {
		border-radius: 50%;
		width: .9rem;
		box-shadow: 2px 2px 6px rgba(0,0,0,0.05),-2px -2px 6px rgba(0,0,0,0.05);
		margin-bottom: .24rem;
	}
	.mb-items {
		justify-content: space-between;
		width: 6.86rem;
		margin: 0 auto;
		font-size: .24rem;
		margin-bottom: .48rem; 
	}
	.extra.my-title {
		padding-bottom: .5rem;
	}
}
</style>
