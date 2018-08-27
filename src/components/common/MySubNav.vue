<template>
  <div class="common-sub-nav hidden-md-and-down">
     <div :class="[show?'fixed':'bottom-nav']">
     	<ul class="bottom-nav-ul flex my-width between">
     		<li v-for="(n,i) in data" :class="['bottom-nav-li',i==active_i?'active':'']" @click="goAnchor(n.url)">{{n.text}}</li>
     		<!-- <li v-for="n in data"><a :href="n.url" class='bottom-nav-li'>{{n.text}}</a></li> -->
     	</ul>
     </div>
  </div>
</template>

<script>
export default {
  name: 'MySubNav',
  props:['data','route'],
  data () {
    return {
    	show:false,
    	active_i:-1,
    	els:[],
    	pageHeight:0
    }
  },
  methods:{
  	goAnchor(id) {
  		if(this.route) {
  			this.$router.push(""+this.route);
  		} else {
  			var anchor = document.getElementById(id);
  			this.gotoTop(anchor.offsetTop-100);
	        //window.scrollTo(0,anchor.offsetTop-100);
  		}
    },
    gotoTop(to) {
  		var h= this.getScrollTop(),
  			i=0,
  			time = 300,
  			tid
  		if(h>to) {
			tid = setInterval(()=>{
  				let height = h-((h-to)/(time/20))*i;
  				if(height>to) {
  					window.scrollTo(0,height);
  				} else {
  					clearInterval(tid);
  				}
  				i++;
  			},20);
  		} else {
  			tid = setInterval(()=>{
  				let height = h+((to-h)/(time/20))*i;
  				if(height<=to) {
  					window.scrollTo(0,height);
  				} else {
  					clearInterval(tid);
  				}
  				i++;
  			},20);
  		}
  		
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
	getEls() {
		return this.data.map((v)=>{
	  		return document.getElementById(v.url);
	  	});
	},
	checkInPage(el) {  
	    const pageHeight = this.pageHeight;
		try {
			var contentTop = el.getBoundingClientRect().top +50
	    	var contentHeight = el.offsetHeight +50
		} catch(err) {

		}
	    return (contentTop<pageHeight && contentTop>=0) || (contentTop<0 && (contentTop+contentHeight>0));  
	}, 
    checkActive(top) {
    	var els = this.getEls(),
    		t =this;
    	els.map((el,i)=>{
    		if(t.checkInPage(el)) {
    			t.active_i = i;
    		}
    	})
    }
  },
  created() {
	var t=this;
	t.pageHeight = document.documentElement.clientHeight;
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
		var top = t.getScrollTop();
		if(top > 500){
		　　t.show = true;
		} else {
			t.show = false;
		}
		/*判断显示哪个为active*/
		t.checkActive(top)
	};
	window.addEventListener('scroll',throttle(resize),false);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
@import '../var.scss';

.common-sub-nav {
	position: absolute;
	bottom:0;
	left:0;
	width:100%;
	background: rgba(0,0,0,.5);
}

.bottom-nav-ul {
	color:#fff;
}
.bottom-nav-li {
	display: inline-block;
	vertical-align: middle;
	width:100%;
	color:#fff;
	line-height: 60px;
	text-decoration: none;
}
.bottom-nav-li:hover {
	background: $red;
	color:#fff;
	cursor: pointer;
}
.fixed {
	position: fixed;
	top:60px;
	width:100%;
	background: rgba(0,0,0,.8);
	z-index: 200;
}
.bottom-nav-li.active {
	background: $red;
	color:#fff;
	transition: background .1s ease-out;
}
</style>
