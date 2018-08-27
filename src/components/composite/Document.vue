<template>
  <div class="composite-document my-width">
	<MyTitle :title="'政策文件,DOCUMENT'"></MyTitle>
	<div class="lr flex">
		<img :src="imgSrc" alt="" class="hidden-md-and-down">
		<div class="lr-r gray-bg">
			<div class="card-wrap">
				<div class="r-item" v-for="d in data">{{d.text}}</div>
			</div>
		</div>
	</div>	
  </div>
</template>

<script>
export default {
  name: 'Document',
  props:['data'],
  data () {
    return {
    	imgSrc:'https://taidaxin.oss-cn-qingdao.aliyuncs.com/left.jpg'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.composite-document {
	padding-bottom: 88px;
}
.lr-r {
	padding: 52px 28px;
	font-size: 14px;
	color:#333;
	line-height: 28px;
}
.r-item {
	text-indent: 2em;
	text-align: justify;
}
@media screen and (max-width: 1200px) {
	.lr-r {
		background: #fff;
		font-size: .2rem;
		width:6.92rem;
		margin:0 auto;
		padding:0;
		padding-bottom: .42rem;
		line-height: .36rem
	}
	.card-wrap {
		padding:.32rem .28rem;
		box-shadow: 2px 2px 6px 0 rgba(0,0,0,.05),-2px -2px 6px 0 rgba(0,0,0,.05);
	}
	.composite-document {
		padding-bottom: 0;
	}
}
</style>
