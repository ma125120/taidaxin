<template>
  <div class="product-card">
	<div class="product-items">
		<div class="product-item relative" 
			v-for="(p,index) in data"
			@mouseenter="changeModal(true,index)"
			@mouseleave="changeModal(false,index)">
			<img :src="p.src" alt="">
			<div :class="{
				'my-modal absolute  flex column':true,
				'all-modal': p.show,
				}"
				@click="clickModal(index)">
				<div class="my-modal-title hover">{{p.title}}</div>
				<div class="my-modal-body" v-if="p.show">{{p.text}}</div>
			</div>
		</div>
	</div>
  </div>
</template>

<script>
export default {
  name: 'CardItem',
  props:['data'],
  data () {
    return {

    }
  },
  methods:{
  	clickModal(index) {
  		var obj = this.data;
  		obj[index].show = !obj[index].show;
  		this.data = obj;
  	},
  	changeModal(flag,index) {
  		var obj = this.data;
  		obj[index].show = flag;
  		this.data = obj;
  		return false;
  	},
  	
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.product-item {
	width:590px;
	height: 380px;
	margin-top: 24px;
}
.product-items {
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	margin-bottom: 60px;
}
.product-item {
	overflow: hidden;
}
.my-modal {
	top: 312px;
	background: rgba(0,0,0,.75);
	line-height: 64px;
	width:100%;
	color:#fff;
	transition: top .3s ease-out;
	height: 380px;
	box-sizing: border-box;
}
.my-modal-title {
	font-size:20px;
}
.all-modal {
	top:0;
	transition: top .3s ease-out;
	padding-bottom: 32px;
	justify-content: center;
}
.my-modal-body {
	font-size: 16px;
	line-height: 28px;
	padding:0 24px;
	text-align: left;
}
@media screen and (max-width: 1200px) {
	.product-item {
		width: 6.86rem;
		height: 4.406677rem;
		margin: .32rem auto;
	}
	.product-item img {
		width: 6.86rem;
		height: 4.406677rem;
	}
	.product-items {
		margin-bottom: .6rem;
		display: block;
	}
	.product-item {
		overflow: hidden;
	}
	.product-item:first-child {
		margin-top: 0;
	}
	.my-modal {
		top: 3.6rem;
		bottom:0;
		line-height: .84rem;
		width: 6.86rem;
		color:#fff;
		transition: top .3s ease-out;
		height: 4.406677rem;
		box-sizing: border-box;
	}
	.my-modal-title {
		font-size: .28rem;
	}
	.all-modal {
		top:0;
		padding-top: .12rem;
		transition: top .3s ease-out;
		padding-bottom: .32rem;
		justify-content: center;
	}
	.my-modal-body {
		font-size: .24rem;
		line-height: .36rem;
		padding:0 .24rem;
		text-align: left;
	}
}
</style>
