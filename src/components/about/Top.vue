<template>
  <div class="about-bg">
     <MySubNav :data="data" :route="route"></MySubNav>
  </div>
</template>

<script>

export default {
  name: 'Top',
  props:['data','route'],
  data () {
    return {
    	show:false
    }
  },
  methods:{
  	goAnchor(id) {
        var anchor = document.getElementById(id);
        document.body.scrollTop = anchor.offsetTop
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
	function throttle(fn,time=150) {
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
	window.addEventListener('scroll',throttle(resize),false);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
@import '../var.scss';

.about-bg {
	height:500px;
	position: relative;
}
.bottom-nav {
	position: absolute;
	bottom:0;
	width:100%;
	background: rgba(0,0,0,.5);
}
.bottom-nav-ul {
	width: 640px;
	margin:0 auto;
	display: flex;
	justify-content: space-around;
	color:#fff;
	line-height: 60px;
}
.bottom-nav-li {
	display: inline-block;
	vertical-align: middle;
	width:144px;
	color:#fff;
	text-decoration: none;
}
.bottom-nav-li:hover {
	background: $red;
	color:#fff;
	cursor: pointer;
}
.fixed {
	position: fixed;
	top:90px;
	width:100%;
	background: rgba(0,0,0,.8);
	z-index: 200;
}
@media screen and (max-width: 1200px) {
  .about-bg {
  	height: 2.66rem;
  	width: 7.5rem;
  }
}
</style>
