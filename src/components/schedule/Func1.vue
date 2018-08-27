<template>
  <div class="my-width">
	<MyTitle :title="'系统功能,FUNCTION'" class="extra"></MyTitle>
	<div class="flex between items">
		<div class="f-item" v-for="f in data">
			<img :src="f.src" alt="" class='f-img'>
			<div class="f-title">{{f.title}}</div>
		</div>
	</div>
  </div>
</template>

<script>
export default {
  name: 'Func1',
  props:['data'],
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.f-title {
	font-size:18px;
	margin-top: 45px;
}
@media screen and (max-width: 1200px) {
	.f-img {
		width:.92rem;
	}
  	.f-title {
		font-size: .24rem;
		margin-top: .24rem;
	}
	.items {
		width: 6.86rem;
		margin:0 auto;
	}
	.extra.my-title {
		padding-bottom: .5rem;
	}
}
</style>
