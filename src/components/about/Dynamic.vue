<template>
  <div class="hello my-width" id="about_dynamic">
  	<!-- PC端 -->
  	<div class="hidden-md-and-down">
  		<MyTitle :title="'企业动态,DYNAMIC'"></MyTitle>
			<div class="flex">
				<div class="l"><img :src="rowImg" alt=""></div>
				<div class="r">
					<div class="d-item flex" v-for="dy in data">
						<div class="d-left">
							<div class="d-title">{{dy.title}}</div>
							<div class="d-content">{{dy.content}}...</div>
						</div>
						<div class="d-right">
							<div class="d-time">{{dy.time}}</div>
							<div class="my-btn hover" @click="toNews(dy.id)">查看详情</div>
						</div>
					</div>
					<div class="more hover" @click="toDetail">MORE&nbsp;&nbsp;<i class="el-icon-d-arrow-right"></i></div>
				</div>
			</div>
  	</div>
		<!-- 移动端 -->
		<div class="hidden-lg-and-up ">
			<MyTitle :title="'企业动态,DYNAMIC'"></MyTitle>
			<div class="dy-items mb">
				<div class="dy-item flex" v-for="(dy,i) in data"  @click="toNews(dy.id)">
					<div class="left">
						<img :src="imgs[i]" alt="">
					</div>
					<div class="right">
						<div class="top">
							<div class="t">{{dy.title}}</div>
							<div class="m">{{slice20(dy.content)}}...</div>
						</div>
						<div class="b">
							<div class="lr-l"></div>
							<div class="lr-r">{{dy.time}}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
  </div>
</template>

<script>

export default {
  name: 'Dynamic',
  props:['data'],
  data () {
    return {
    	rowImg:'https://taidaxin.oss-cn-qingdao.aliyuncs.com/d.jpg',
    	imgs:['https://taidaxin.oss-cn-qingdao.aliyuncs.com/dy0.png',
    			'https://taidaxin.oss-cn-qingdao.aliyuncs.com/dy1.png',
    			'https://taidaxin.oss-cn-qingdao.aliyuncs.com/dy2.png',
    			'https://taidaxin.oss-cn-qingdao.aliyuncs.com/dy3.png',
    			'https://taidaxin.oss-cn-qingdao.aliyuncs.com/dy4.png']
    }
  },
  methods:{
  	toNews(id) {
  		this.$router.push(`/News?id=${id}`);
  	},
  	toDetail() {
  		this.$router.push(`/News?id=1`);
  	},
  	slice20(str) {
  		return str.slice(0,28);
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
@import '../var.scss';

.r {
	flex:1;
	padding-left: 24px;
	background: #fff;
}
.d-item {
	text-align: left;
	padding: 16px 24px;
	border-bottom: 1px solid #eee;
	justify-content: space-around;
}
.d-left {
	width:554px;
}
.d-right {
	width: 160px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: flex-end;
}
.d-title {
	line-height: 36px;
	font-weight: 500;
	font-size: 16px;
}
.d-content {
	color: #888;
	line-height: 28px;
	font-size: 14px;
}
.my-btn {
	width:82px;
	line-height: 32px;
	color:#fff;
	background: $red;
	text-align: center;
	font-size: 14px;
}
.more {
	font-size: 18px;
	margin-top:42px;
	text-align: right;
	padding-right: 64px;
}
.more:hover {
	color: $red;
}
@media screen and (max-width: 1200px) {
	.mb {
		@include w;
	}
	.dy-item {
		margin-bottom: .36rem;
	}
	.left {
		width: 1.82rem;
  	height: 1.82rem;
	}
  .left img {
  	width: 1.82rem;
  	height: 1.82rem;
  }
  .right {
  	text-align: left;
  	padding: 0 .24rem;
  	display: flex;
  	flex:1;
  	flex-direction: column;
  	justify-content: space-between;
  }
  .t {
  	font-size: .24rem;
  	color: rgb(51,51,51);
  	padding-bottom: .16rem;
  }
  .m {
  	font-size: .22rem;
  	color: rgb(153,153,153);
  	/*padding: .16rem 0 .28rem;*/
  	text-align: justify;
  	line-height: .32rem;
  }
  .b {
  	display: flex;
  	font-size: .22rem;
  }
  .lr-l {
  	text-align: left;
  	width: 50%;
  	color: rgb(204,204,204);
  }
  .lr-r {
  	text-align: right;
  	width: 50%;
  	color: rgb(204,204,204);
  }
}
</style>
