<template>
	<div class="my-footer center">
		<div class="left">
			<img class='img' :src="two" alt="">
			<div class="left-text">关注我们</div>
		</div>
		<div class="right">
			<div class="my-top">
				<span class="copy">Copyright &copy; 2013-2018 山西泰达鑫科技有限公司版权所有</span>
				<span class='left-padding'>ICP证：晋ICP备17011513号-1</span>
			</div>
			<div class="my-bottom">
				<span>联系方式：0351-8332580</span>
			</div>
		</div>  		
	</div>
</template>

<script>
export default {
  name: 'MyFooter',
  data () {
    return {
    	two:'https://taidaxin.oss-cn-qingdao.aliyuncs.com/erweima.jpg',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.my-footer {
	background: #eee;
	padding: 24px 0;
	font-weight: 500;
}
.left .img {
	width:60px;
	margin-bottom: 8px;
}
.right {
	text-align: left; 
	align-self:flex-end;
	padding-left: 80px;
}
.my-top {
	padding-bottom: 28px;
}
.left-padding {
	padding-left: 32px;
}
@media screen and (max-width: 1200px) {
	.my-footer {
		background: #eee;
		padding: .32rem .32rem;
		align-items: center;
		font-size: .18rem
	}
	.right {
		padding-left: .4rem;
	}
	.my-top {
		padding-bottom: 0;
	}
	.left,
	.left-text{
		font-size: .14rem;
		width: .72rem;
		text-align: center;
	}
	.left .img {
		margin-bottom: 0.08rem;
		width: .72rem;
		height: .72rem;
	}
	.left-padding {
		display: block;
		padding-left: 0;
	}
	.right span{
		padding-bottom: .12rem;
		display: inline-block;
		vertical-align: middle;
	}
	.copy {
		padding-bottom: .12rem
	}
}
</style>
