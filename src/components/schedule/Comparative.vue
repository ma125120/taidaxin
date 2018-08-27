<template>
  <div class="schedule-compare">
	<div class="my-width">
		<MyTitle :title="'对比分析,COMPARATIVE'" class="extra"></MyTitle>
		<div class="compare-items flex between a-center">
			<div class="l">
				<div class="l-title item-title">传统型</div>
				<div 
					:class="['item-box all-center','margin'+i%2]" 
					v-for="(l,i) in data.left">
					<div class="box-item text-left">{{l}}</div>
				</div>
			</div>
			<div class="m">
				<img :src="'./static/img/schedule/vs.png'" alt="" class="m-img">
			</div>
			<div class="r">
				<div class="r-title item-title">分层走班</div>
				<div 
					:class="['item-box all-center','margin'+i%2]" 
					v-for="(r,i) in data.right">
					<div class="box-item text-left">{{r}}</div>
				</div>
			</div>
		</div>
	</div>
  </div>
</template>

<script>
export default {
  name: 'Comparative',
  props:['data'],
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
$green:#69d0ef;
$orange:#f7a972;
.item-title {
	color:$green;
	font-size:24px;
	margin-bottom: 40px;
}
.item-box {
	height: 75px;
	width: 280px;
	color:#fff;
	border-radius: 24px;
	margin-bottom: 24px;
	font-size:18px;
	padding: 8px 24px;
	line-height: 24px;
	box-sizing: border-box;
}
.l .item-box {
	background: $green;
}
.r-title {
	color:$orange;
}
.r .item-box {
	background: $orange;
}
.margin0 {
	margin-right: 68px;
}
.margin1 {
	margin-left: 68px;
}
.compare-items {
	margin-bottom: 36px;
}
@media screen and (max-width: 1200px) {
  .compare-items {
  	width:6.86rem;
  	margin: 0 auto;
  }
  .extra.my-title {
  	padding-bottom: .5rem;
  }
  .item-title {
		color:$green;
		font-size: .24rem;
		margin-bottom: .32rem;
	}
	.item-box {

		min-height: .75rem;
		width: 2.2rem;
		color:#fff;
		border-radius: .25rem;
		margin-bottom: .24rem;
		font-size: .14rem;
		padding: .08rem .21rem;
		line-height: .32rem;
		box-sizing: border-box;
	}
	.margin0 {
		margin-right: .51rem;
	}
	.margin1 {
		margin-left: .51rem;
	}
	.m-img {
		width:1.15rem;
	}
	.r-title {
		color:$orange;
	}
	.schedule-compare {
		padding-bottom: .18rem;
	}
}
</style>
