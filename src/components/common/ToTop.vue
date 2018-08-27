<template>
	<transition name="opacity">
		<div 
			class="to-top hidden-sm-and-down" 
			@click="gotoTop" 
			v-if="show"
			@mouseenter="changeFlag(true)"
			@mouseleave="changeFlag(false)">
			<transition name="opacity">
				<img :src="'./static/img/top.png'" alt=""
				v-if="!flag">
				<img :src="'./static/img/top1.png'" alt=""
					v-else>
			</transition>
		</div>
	</transition>
  
</template>

<script>
export default {
  name: 'HelloWorld',
  props:['data'],
  data () {
    return {
    	show:false,
    	flag:false
    }
  },
  methods:{
  	gotoTop() {
	  		var h= this.getScrollTop(),
	  			i=0,
	  			time = 300,
	  			to=0;
	  		var tid = setInterval(()=>{
	  				let height = h-(h/(time/20))*i;
	  				if(height>=to) {
	  					window.scrollTo(0,height);
	  				} else {
	  					clearInterval(tid);
	  				}
	  				i++;
	  			},20);
	  	},
	  getScrollTop(){
		　　var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
		　　if(document.body){
		　　　　bodyScrollTop = document.body.scrollTop;
		　　}
		　　if(document.documentElement){
		　　　　documentScrollTop = document.documentElement.scrollTop;
		　　}
		　　scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
		　　return scrollTop;
		},
		changeFlag(flag) {
			this.flag = flag;
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
  		//window.onscroll = throttle(resize);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.to-top {
	position: fixed;
	bottom:60px;
	right:36px;
}
.to-top:hover {
	cursor: pointer;
}
img {
	width: 80px;
	height: 80px;
}
</style>
