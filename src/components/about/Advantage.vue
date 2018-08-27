
<template>
  <div class="advantage" id="about_advantage">
	<MyTitle :title="'服务客户,SERVECLIENTS'"></MyTitle>
	<div class='my-wrap'>
		<div class="icons flex between my-width">
			<div class="icon-item" v-for="(a,i) in data">
				<div class="my-img">
					<img :src="a.src" alt="" :class="['mb-img',i==7?'extra':'']">
				</div>
				<div class="icon-text">{{a.text}}</div>
			</div>
		</div>
	</div>
	<!-- 移动端 -->
	<!-- <div class='mb hidden-lg-ad-up'>
		<img :src="'./static/img/about/schools.png'" alt="" class="mb-img">
	</div> -->
  </div>
</template>

<script>
export default {
  name: 'Serveclients',
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
.my-wrap {
	background: #fff;
}
.icons {
	flex-wrap: wrap;
	padding:60px 0 96px 0;
	
}
.icon-item {
	margin-right: 72px;
	padding-top: 36px;
}
.icon-text {
	padding-top: 36px;
}
.my-img {
	height: 164px;
	display: flex;
	align-items: center;
}
@media screen and (max-width: 1200px) {
  .mb-img {
  	height: .8rem;
  	&.extra {
  		height: .7rem;
  	}
  }
  .icons {
		flex-wrap: wrap;
		padding: 0 0 0.36rem 0 ;
		@include w;
	}
	.icon-item {
		padding-right: .12rem;
		margin-right: 0;
		padding-top: .12rem;
		text-align: center;
		width:20%;
		box-sizing: border-box;
		font-size: .14rem;
	}
	.icon-text {
		padding-top: .12rem;
	}
	.my-img {
		height: 1rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	/*.mb-img {
		@include w;
		height:auto;
	}*/
}
</style>
