<template>
  <div class="num all-center">
    <div class="my-wrapper all-center my-width">
    	<div class="item-wrap" v-for="n in data">
    		<div class="my-border"></div>
    		<div class="my-content all-center">
    			<div class="item-num">{{n.num}}</div>
    			<div class="item-text">{{n.type}}</div>
    		</div>
    	</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Num',
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
.num {
	background: $red;
	width:100%;
	padding: 64px 0;
}
.my-wrapper {
	flex-wrap: wrap;
	justify-content: space-between;
}
.item-wrap {
	width:380px;
	height:166px;
	position: relative;
	margin-bottom: 32px;
}
.my-content {
	position: absolute;
	top:0;
	left:0;
	width:100%;
	flex-direction: column;
}
.item-num {
	background: #fff;
	color: $red;
	width:272px;
	line-height:94px;
	margin-bottom: 24px;
	font-size:28px;
}
.item-text {
	color:#fff;
	font-size: 20px;
}
.my-border {
	border: 1px solid #fff;
	width:100%;
	height: 116px;
	position: absolute;
	bottom:0;
}
@media screen and (max-width: 1200px) {
  .item-num {
  	font-size: 0.28rem;
  	width:2.37rem;
  	height: 0.68rem;
  	line-height: 0.68rem;
  	margin-top: -0.34rem;
  	margin-bottom: 0.2rem;
  }
  .item-text {
  	font-size: 0.22rem;
  }
  .my-border,
  .item-wrap {
  	width: 3.3rem;height: 0.99rem;
  }
  .item-wrap {
  	margin-bottom: .64rem;
  }
  .my-wrapper {
  	padding: 0 .32rem;
  }
  .num {
  	padding: .96rem 0 0 0;
  }
}
</style>
