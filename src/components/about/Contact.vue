<template>
  <div class="about-contact" id="about_contact">
		<MyTitle :title="'联系我们,CAONTACT US'"></MyTitle>
		<div class="maps center my-width hidden-md-and-dow">
			<div class="l red-bg">
				<div class="tels">
					<div class='item'></div>
					<div class='item'>电话：0351-8332580</div>
					<div class='item'>邮编：030000</div>
					<div class='item'>地址：山西省太原市小店区中心街万立北楼3楼</div>
					<div class='item'></div>
				</div>
				<div class="two">
					<img  class='two-img' :src="two" alt="">
					<div class="text">关注我们</div>
				</div>
			</div>
			<img  class='r' :src="map" alt="">
		</div>

  </div>
</template>

<script>
export default {
  name: 'Contact',
  props:['data'],
  data () {
    return {
    	two:'https://taidaxin.oss-cn-qingdao.aliyuncs.com/erweima.jpg',
    	map:'https://taidaxin.oss-cn-qingdao.aliyuncs.com/map.jpg'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
@import '../var.scss';
.l {
	padding: 36px;
	width:531px;
	height: 445px;
	box-sizing: border-box;
	text-align: left;
}
.tels {
	color:#fff;
}
.tels .item {
	margin-bottom: 18px;
}
.two {
	width: 200px;
	color:#fff;
	text-align: center;
}
.two-img {
	width: 200px;
	height: 200px;
	margin-bottom: 24px;
	margin-top: 16px;
}
.about-contact {
	margin-bottom: 96px;
}
@media screen and (max-width: 1200px) {
  .maps {
  	flex-direction: column;
  }
  .l {
  	display: flex;
  	align-items: center;
  	@include w;
  	font-size: .22rem;
  	height: 2.06rem;
  	padding: 0 .36rem;
  }
  .two-img {
  	width: 1.12rem;
  	height: 1.12rem;
  	margin: .12rem 0;
  }
  .two {
		text-align: right;
	}
  .tels .item {
		margin-bottom: .18rem;
	}
  .tels {
  	font-size: .22rem;
  }
  .text {
  	padding-right: .1rem;
  }
  .r {
  	@include w;
  	height: 4.13rem;
  }
  .about-contact {
		margin-bottom: .24rem;
	}
}
</style>
