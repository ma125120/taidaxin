<template>
  <div class="home-product center column">
  	<MyTitle :title="'产品中心,PRODUCT'"></MyTitle>
    <div class="product-items center">
    	<div class="l">
				<div class="product-item text-right"
					v-for="(p,index) in data"
					 @click="goto">
					<div class='item' v-if="index%2==0">{{p.title}}</div>
					<div class="product-img" v-else>
						<img class='item' :src="p.src" alt="" >
					</div>
					
				</div>
			</div>
			<div class="m"  @click="goto">
				<img :src="'./static/img/home/m.png'" alt="">
			</div>
			<div class="r">
				<div class="product-item"
					v-for="(p,index) in data"
					 @click="goto">
					<div class='item text-left' v-if="index%2!=0">{{p.title}}</div>
					<div class="product-img" v-else>
						<img class='item' :src="p.src" alt="" >
					</div>
				</div>
			</div>
    </div>
	
  </div>
</template>

<script>
export default {
  name: 'Product',
  props:['data'],
  data () {
    return {

    }
  },
  methods:{
  	goto() {
  		this.$router.push('/product')
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>

.product-title {
	padding:82px 0;
	font-size: 32px;
}
.l {
	padding-top: 112px;
	margin-right: 32px;
}
.r {
	margin-left: 32px;
}
.product-items {
	font-size: 18px;
	color: #333;
}
.product-item {
	margin-bottom: 54px;
}
.r .product-item{
	margin-bottom: 53px;
}
.product-item img {
	background: #eee;
	padding: 24px;
	height: 194px;
}
.product-img {
	position: relative;
}
.product-img:after {
	content:'';
	display: inline-block;
	vertical-align: middle;
	border-left: 20px solid #eee;
	border-top: 20px solid transparent;
	border-bottom: 20px solid transparent;
	position: absolute;
	top:50%;
	margin-top: -24px;
}
.r .product-img:after {
	left:-20px;
	transform: rotate(-180deg);
}
.item:hover {
	cursor: pointer;
}
@media screen and (max-width: 1200px) {
	.product-item {
		font-size: .22rem;
	}
	.m img {
		height: 7.1rem;
	}
	.product-title {
		padding: .82rem 0;
		font-size: .32rem;
	}
	.l {
		padding-top: .76rem;
		margin-right: .32rem;
	}
	.r {
		margin-left: .32rem;
	}
	.product-items {
		font-size: .18rem;
		color: #333;
	}
	.product-item {
		margin-bottom: .26rem;
	}
	.r .product-item{
		margin-bottom: .22rem;
	}
	.product-item img {
		background: #eee;
		padding: .24rem;
		width: 2.59rem;
		height:auto;
	}
	.product-img {
		position: relative;
	}
	.product-img:after {
		content:'';
		display: inline-block;
		vertical-align: middle;
		border-left: .2rem solid #eee;
		border-top: .2rem solid transparent;
		border-bottom: .2rem solid transparent;
		position: absolute;
		top:50%;
		margin-top: -.24rem;
	}
	/*.r .product-img {
		margin-left: -0.04rem;
	}*/
	.r .product-img:after {
		left: -.18rem;
		transform: rotate(-180deg);
	}
}
</style>
