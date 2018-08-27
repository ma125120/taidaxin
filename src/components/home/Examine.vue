<template>
  <div class="new all-center my-width">
  	<MyTitle :title="'新高考,EXAMINE'" class="extra"></MyTitle>
  	<div class="new-cards-wrap">
  		<div class="new-cards center">
  		<router-link tag="div" v-for="n in data" :key="n.title" :to="n.url" class="new-card">
  			<el-card 
						class="center"
						:body-style="{ padding: '0px' }">
					<div class="img-div all-center">
						<img :src="n.icon" alt="" class='new-img'>
					</div>
					<div class="new-text">{{n.text}}</div>
					<router-link tag="div" :to="n.url" class="new-card-title">{{n.title}}</router-link>
				</el-card> 
  		</router-link>
			
		</div>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'Examine',
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

.new {
	background:#fff;
	flex-direction: column;
}
.new-title {
	padding:82px 0;
	font-size: 28px;
}
.new-cards {
	display: flex;
	margin-bottom: 80px;
	margin-top: 60px;
}
.new-card {
	width:384px;
	margin-right: 32px;
	transition: box-shadow .3s ease-out;
}
.new-card:hover {
	cursor: pointer;
  box-shadow: 6px 6px 18px 0 rgba(0,0,0,.1),-6px -6px 18px 0 rgba(0,0,0,.1);
  transition: box-shadow .3s ease-out;
}
.new-img{
	width:105px;
	height:105px;
	position: relative;
	top: -48px;
	z-index:100;
	margin:0 auto;
}
.el-card, .el-message {
	overflow: visible;
}
.new-text {
	padding:0 82px 64px;
	line-height: 32px;
	font-size: 16px;
	color: #666;
	box-sizing: border-box;
}
.new-card-title {
	background: #EAEAEA;
	font-size: 18px;
	color:#333;
	line-height: 76px;
}
.new-card-title:hover {
	background: $red;
	color:#fff;
	cursor: pointer;
}

@media screen and (max-width: 1200px) {
	.extra.my-title {
		padding: .3rem .32rem .6rem;
	}
  .new-cards-wrap {
  	width:100vw;
  	overflow-x: auto;
  }
  .item-text {
  	font-size: .24rem;
  }
  .new-cards {
  	margin-top: .36rem;
  	padding: 0 .32rem;
  	width: 10.1rem;
  	min-width: 856px;
  	justify-content: flex-start;
  	margin-bottom: .8rem
  }
  .new-card {
		width: 2.94rem;
		min-width: 272px;
		margin-right: .32rem;
  }
  .new-text {
  	font-size: .24rem;
  	padding: .28rem .20rem;
  	margin-top: -.72rem;
  	height: 1.85rem;
  }
  .new-card-title {
  	font-size: .26rem;
  	line-height: .96rem;
  }

  .new-img {
  	width:  1.56rem;
  	height: 1.56rem;
  	top: -0.78rem;
  }
}
</style>
