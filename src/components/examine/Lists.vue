<template>
  <div class="examine-lists my-width">
    <div :class="['list-item hidden-md-and-down',index==data.length-1?'none':'']" v-for="(l,index) in data">
    	<div :class="['l','order'+index%2,'div']">
    		<h1 class="list-title">{{l.title}}</h1>
    		<div class="list-content" v-html="l.content"></div>
    		<router-link tag="div" :to="l.url" class="my-btn hover">查看详情</router-link>
	    </div>
	    <div :class="['r','order'+(index%2+1)]">
	    	<img :src="l.src" alt="">
	    </div>
    </div>

    <!-- 手机端 -->
    <div class="mb-lists hidden-lg-and-up">
    	<router-link tag="div" :to="l.url" class="mb-item" v-for="(l,index) in data" :key="index">
    		<MyTitle :title="l.title" class="extra"></MyTitle>
    		<div class="mb-body relative">
    			<img class="md-img" :src="l.src1">
				<div class="mb-content absolute" v-html="l.content"></div>
    		</div>
    	</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Lists',
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

.list-item {
	padding: 32px 0;
	border-bottom: 1px dashed #ccc;
	text-align: left;
	display: flex;
}
.order0,
.order2 {
	padding-left:20px;
	padding-right:60px;
	border-right: 1px dashed #ccc;
}
.order1 {
	padding-right:20px;
	padding-left:60px;
}
.list-title {
	font-size:22px;
	margin-bottom: 24px;
}
.list-content {
	line-height: 28px;
	font-size: 16px;
}
.order0 {
	order:1;
}
.order1 {
	order:2;
}
.div {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
.my-btn {
	width: 132px;
	line-height: 42px;
	background: $red;
	color:#fff;
	align-self: flex-end;
	text-align: center;
}
.none {
	border-width: 0
}
@media screen and (max-width: 1200px) {
  .extra.my-title {
    padding: .3rem .32rem;
  }
  .mb-item {
  	text-align: left;
  }
  .mb-lists {
  	padding-bottom: .6rem;
  }
  .mb-body {
  	width: 6.86rem;
  	margin: 0 auto;
  }
  .md-img {
  	width: 6.86rem;
  }
  .mb-content {
  	width:100%;
  	background: rgba(0,0,0,.7);
  	color: rgba(255,255,255,.9);
  	padding: 0 .24rem;
  	line-height: .36rem;
  	box-sizing: border-box;
  	font-size: .18rem;
    text-align: justify;
    display: flex;
    align-items: center;
  	top:0;bottom: 0;
  	left:0;right:0;
  }
}
</style>
