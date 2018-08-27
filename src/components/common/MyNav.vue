<template>
  <div :class="{
		'my-nav':true,
		'color':color||fixed,
		'fixed': fixed,
		'fixed-show' :show
		}">
 	<div :class="['my-width my-nav-wrap wrap',coll?'bor':'']">
		<img v-if="color" :src="'./static/img/logo1.png'" alt="" class="logo" @click="toHome">
 		<img v-else :src="'./static/img/logo.png'" alt="" class="logo" @click="toHome">

		<div class=" nav-img hidden-lg-and-up" @click="collaspe">
			<img :src="'./static/img/nav.png'" alt="">
		</div>

 		<ul :class="['flex nav-ul',coll?'md-flex':'','hidden-md-and-down']">
 			<li class="all-center home-nav-item relative"
					 v-for="(n,i) in nav" 
					 :key="n.text">
				<router-link :to="n.url" tag="div" :class="['nav-item',active==i?'active':'']">{{n.text}}<i class="el-icon-arrow-down el-icon--right" v-if="n.children"></i></router-link>
				<ul class="my-dropdown-menu" v-if="n.children">
					<router-link 
						tag="li" 
						:class="['home-nav-item li',(i==n.children.length-1)?'none':'']" 
						v-for="(c,i) in n.children" :key="c.text"
						:to="c.url">
						{{c.text}}
					</router-link>
				</ul>
			</li>
 		</ul>
 	</div>
 	<ul v-if="coll" class="sm-ul hidden-lg-and-up">
 			<li :class="['sm',i==(nav.length-1)?'sm-none':'']"
					 v-for="(n,i) in nav" 
					 :key="n.text">
				<div  class="sm-nav-item" @click="goto(n.url)">
					<div class="l text-left">{{n.text}}</div>
					<i class="el-icon-arrow-right el-icon--right r text-right"></i>
				</div>
				<ul  v-if="n.children">
					<li
						@click="goto(c.url)"
						class="sm-nav-item"
						v-for="(c,i) in n.children" :key="c.text"
						>
						<div class="l text-left">{{c.text}}</div>
						<i class="el-icon-arrow-right el-icon--right r text-right"></i>
					</li>
				</ul>
			</li>
 	</ul>
  </div>
</template>

<script>
import data from  '../../../static/data/data.js';
var { nav } = data;

export default {
  name: 'MyNav',
  props:['color','fixed','active'],
  data () {
    return {
    	nav,
    	show: false,
    	coll:false
    }
  },
  methods:{
  	collaspe() {
  		this.coll = !this.coll;
  	},
  	toHome() {
  		this.$router.push('/')
  	},
  	goto(url) {
  		this.coll = !this.coll;
  		this.$router.push(url)
  	}
  },
  created() {
  	//滚动条在Y轴上的滚动距离
  	function getScrollTop(){
	　　var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
	　　if(document.body){
	　　　　bodyScrollTop = document.body.scrollTop;
	　　}
	　　if(document.documentElement){
	　　　　documentScrollTop = document.documentElement.scrollTop;
	　　}
	　　scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
	　　return scrollTop;
	}
	 
	var t=this;
	function throttle(fn,time=100) {
		return function() {
			if(fn.tid) {
				clearTimeout(fn.tid);
			}
			fn.tid =setTimeout(()=>{
				fn();
			},time);
		}
		
	}
	var resize = function(){
		if(getScrollTop() > 500){
		　　t.show = true;
		} else {
			t.show = false;
		}
	};
  	if(this.fixed) {
  		window.addEventListener('scroll',throttle(resize),false);
  		//window.onscroll = throttle(resize);
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
@import '../var.scss';
.logo {
	width: 180px;
}
.fixed {
	position: fixed;
	z-index:1000;
	top: -90px;
	width:100%;
}
.fixed-show {
	top: 0;
	transition: top .3s ease-out;
}
.my-nav-wrap {
	display: flex;
	justify-content: space-between;
	align-items: center;
	color:#fff;
}
.color {
	background: #eee;
}
.color .my-nav-wrap {
	color:#333;
}
.flex {
	display: flex;
}
.home-nav-item {
	line-height: 36px;
	font-size: 18px;
}
.nav-item {
	width: 120px;
	padding:15px 0;
	/*margin-right:2px;*/
	position: relative;
	color:#fff;
}

.fixed .nav-item,
.color .nav-item {
	color:#333;
}
.nav-item:hover {
	background: $red;
	color:#fff;
	cursor: pointer;
}
.my-dropdown-menu {
	width:120px;
	position: absolute;
	top: 64px;
	left: 0;
	z-index: 5000;
	background: #fff;
	display: none;
	font-size: 14px;
}
.my-dropdown-menu li {
	font-size: 14px;
}
.home-nav-item.li {
	border-bottom: 1px solid #ddd;
	background: #fff;
	color:#333;
	line-height: 52px;
}
.home-nav-item.li.none {
	border:0;
}
.home-nav-item.li:hover {
	background: $red;
	color:#fff;
}
.home-nav-item:hover .my-dropdown-menu {
	display: block;
	cursor: pointer;
	color:#fff;
}
.home-nav-item:hover .el-icon-arrow-down {
	transform: rotate(180deg);
	transition: transform .3s ease-out;
}
.el-icon-arrow-down {
	transition: transform .3s ease-out;
}
.humber {
	display: none;
}
.nav-item.active,
.fixed .nav-item.active{
	background: $red;
	color:#fff;
}
@media screen and (max-width: 1200px) {
	.logo {
		width: 1.8rem;
	}
	.my-nav-wrap {
		height: .88rem;
		box-sizing: border-box;
		padding:.08rem .32rem;
		justify-content: space-between;
		box-sizing: border-box;
		width:7.5rem;
		/*border-bottom: 1px solid #ccc;*/
	}
	.sm-nav-item {
		color:#333;
		display: flex;
		align-items: center;
		width: 100%;
		line-height: .9rem;
		font-size: .24rem;
		box-sizing: border-box;
		border-bottom: 1px solid #ddd;
	}
	
	.sm-nav-item .l,
	.sm-nav-item .r {
		width: 49%;
	}
	.fixed {
		position: fixed;
	}
	.nav-ul {
		display: none;
	}
  .humber {
		display: block;
	}
	.b {
		border-bottom: 1px solid #ddd;
	}
  .md-flex {
    	display: flex;
    	flex-direction: column;
    	width:100%;
    	animation: my-slide 5s ease-out;
    	& .nav-item {
    		width:100%;
    	}
    }
    .home-nav-item:hover .my-dropdown-menu {
		left:91px;
		top: 91px;
		bottom:0;
	}
	.sm-ul {
		width:92%;
		margin: 0 auto;
	}
	.nav-img img {
		width: 0.42rem;
	}
	.sm-none .sm-nav-item{
		border-bottom: none;
	}
	.bor {
		border-bottom: 1px solid #ddd;
	}
}
</style>
