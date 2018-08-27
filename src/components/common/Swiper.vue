<template>
	<div class="my-swiper-wrap all-center hidden-lg-and-up">
		<img class="left-arrow arrow" :src="'./static/img/schedule/left.png'" @click="left">
		<transition name="trans" tag="ul">
		    <div :class="['my-swiper-item',trans]">
				<img :src="data[i].src" alt="" class="item-img">
				<div class="item-text">{{data[i].text}}</div>
			</div>
		</transition>
		
		<img class="right-arrow arrow" :src="'./static/img/schedule/right.png'" @click="right">
	</div>
</template>

<script>
export default {
  name: 'Swiper',
  props:['data'],
  data () {
    return {
    	i:0,
    	trans:'left'
    }
  },
  methods:{
  	left() {
  		var i = this.i,
  			len = this.data.length;
  		if(i>0) {
  			i = i-1;
  			this.trans = '';
  			setTimeout(()=>{
  				this.i=i;
				this.trans = 'left';
  			},10);
  			
  		}
  	},
  	right() {
  		var i = this.i,
  			len = this.data.length;
  		if(i<len-1) {
  			i = i+1;
  			this.trans = '';
  			setTimeout(()=>{
  				this.i=i;
				this.trans = 'right';
  			},10);
  		}
  	}
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.my-swiper-wrap {
	padding-bottom: .32rem
}
.arrow {
	width: .32rem;
	margin:0 .72rem;
}
.item-img {
	width: 3.68rem;
	margin-bottom: .18rem;
}
.item-text {
	width: 3.68rem;
	font-size: .22rem;
	text-align: justify;
	line-height: .32rem;
}
.left {
  animation: left .3s;
}

.right {
  animation: right .3s;
}
/*.left-leave-active {
  animation: left .3s reverse;
}*/
@keyframes left {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0)
  }
}
@keyframes right {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0)
  }
}
</style>
