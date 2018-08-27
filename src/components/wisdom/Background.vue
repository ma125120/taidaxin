<template>
  <div class="wisdom-background my-width">
	<MyTitle :title="'研发背景,BACKGROUND'"></MyTitle>
	<div class="t flex">
		<div class="bg-item center" 
			v-for="(b,index) in data" 
			v-if="index%2==0">
			<div class="num">{{index+1}}</div>
		</div>
		<div class="t-item text" 
			v-else>
			<div v-for="text in b.text">{{text}}</div>
			
		</div>
	</div>
	<div class="m">
		<img :src="'./static/img/wisdom/m.png'" alt="">
	</div>
	<div class="r">
		
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
.my-title {
	padding-top: 40px;
}
.num {
	width:54px;
	line-height: 54px;
	background: $red;
	color:#fff;
	border-radius: 50%;
}
.t {
	padding-left: 86px;
}
.bg-item {
	width:160px;
	text-align: center;
}
</style>
