<template>
  <div class="news">
  	<MyNav color="true" active="3"></MyNav>
	<Top :data="nav" route="about"></Top>
	<div class="flex my-width n-main">
		<div class="l article text-left">
			<div class="n-header">
				<div class="n-title bold">{{list.title}}</div>
				<div class="public-time">发布时间：{{list.time}}</div>
			</div>
			<div class="n-body">
				<div class="n-p" v-for="(p,index) in list.body" v-html="p"></div>
			</div>
		</div>
		<div class="r text-left hidden-md-and-down">
			<div class="my-dashed bold r-title">近期动态</div>
			<div class="n-items">
				<div class="n-item my-dashed hover" v-for="n in r_list"
					@click="toNews(n.id)">
					<div class="n-title bold">{{n.title}}</div>
					<div class="n-time">发布时间：{{n.time}}</div>
				</div>
			</div>
		</div>
	</div>
	<div class="my-width">
		<div class="back" @click="goBack"><i class="el-icon-d-arrow-left"></i>返回</div>
	</div>

	<MyFooter></MyFooter>
	<!-- 固定的导航 -->
    <MyNav color="true" fixed="true" active="3"></MyNav>
  </div>
</template>

<script>
import Top from '../components/about/Top';
import data from '../../static/data/data.js';

var lists = data.about.dynamic,
	{ nav } = data.about;

export default {
  name: 'News',
  props:['data'],
  components:{
  	Top
  },
  data () {
    return {
    	lists:lists,
    	list:null,
    	r_list: lists,
    	nav
    }
  },
  created() {
  	var id = this.$route.query.id;
  	this.getListById(id);
  	document.title = "企业动态";
  },
  methods:{
  	toNews(id) {
  		this.getListById(id);
  	},
  	getListById(id) {
  		var list = this.lists.filter(v=>v.id==id)[0];
	  	this.list = list;
  	},
  	goBack() {
  		this.$router.replace('/about?dy=1');
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
@import '../components/var.scss';
.news {
	background: #F6F6F6;
}
.article {
	background: #fff;
	width: 860px;
	padding:16px;
}
.n-title {
	font-size:18px;
}
.n-main {
	margin:36px auto 24px;
}
.my-dashed {
	border-bottom: 1px dashed #ccc;
}
.n-header {
	line-height: 42px;
	border-bottom: 1px dashed #ccc;
}
.public-time {
	color:#999;
}
.n-p {
	line-height: 32px;
}

.r {
	background: #fff;
	margin-left: 32px;
	padding: 16px;
	flex:1;
	& .n-title {
		font-size: 13px;
		line-height: 20px;
		padding:8px 0;
	}

}
.r .n-time {
	padding-bottom: 8px;
	font-size: 12px;
	color: #999;
}
.r-title {
	line-height: 48px;
}
.n-body {
	padding-top: 32px;
	margin-bottom: 32px;
}
.back {
	width:860px;
	text-align: right;
	margin-bottom: 60px;
}
.back:hover {
	color:$red;
	cursor: pointer;
}
@media screen and (max-width: 1200px) {
	.article {
		width:6.86rem;
		margin:0 auto;
	}
	.back {
		width: 7.18rem;
		text-align: right;
		margin-bottom: .32rem;
	}
}
</style>
