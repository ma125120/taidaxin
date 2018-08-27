<template>
	<div>
		<MyNav color="true" class="hidden-lg-and-up"></MyNav>
		<div class="home-top home-bg">
			<img :src="'./static/img/home/logo.png'" alt="" class="logo hidden-sm-and-down">
			<div class="logo-text all-center home-top">
				<p>EVERYTHING FOR THE CURIOUS</p>
				<p class='margin-top'>一切为了求知者</p>
			</div>

			<div class="home-navs all-center  hidden-sm-and-down">
				<ul  class="all-center my-menu relative"
							 v-for="(n,i) in data" :key="n.text">
					<router-link tag="li" :to="n.url" :class="[i==0?'active':'','home-nav-item']">{{n.text}}<i class="el-icon-arrow-down el-icon--right" v-if="n.children"></i></router-link>
					<ul class="my-dropdown-menu" v-if="n.children">
						<router-link tag="li" class="home-nav-item li" v-for="c in n.children" :key="c.text"
								:to="c.url">
								{{c.text}}
						</router-link>
					</ul>
				</ul>
			</div>
		  </div>
	</div>
  
</template>

<script>
export default {
  name: 'Top',
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

.logo {
	position: absolute;
	top:16px;
	left:363px;
}
.logo-text {
	flex-direction: column;
	color:#fff;
	font-size: 42px;
}
.home-nav-item.active {
	background: $red;
	color:#fff;
}
.home-navs {
	width: 100%;
	position: absolute;
	bottom: 50px;
}
.home-nav-item {
	width: 180px;
	height: 50px;
	background: rgba(255,255,255,.3);
	color: #fff;
	margin-right: 2px;
	font-size: 18px;
	line-height: 50px;
	position: relative;
}
.home-nav-item.li {
	background: rgba(255,255,255,.2);
	margin-bottom: 2px;
}
.home-nav-item:hover {
	cursor: pointer;
	background: #C40001;
}
.my-menu:hover .el-icon-arrow-down {
	transform: rotate(180deg);
	transition: transform .3s ease-out;
}
.el-icon-arrow-down {
	transition: transform .3s ease-out;
}
.my-dropdown-menu {
	position: absolute;
	display: none;
	left:0;
	bottom: 50px;
}
.my-menu:hover .my-dropdown-menu {
	display: block;
}
@media screen and (max-width: 1200px) {
	.logo-text {
		font-size: .28rem;
	}
	.margin-top{
		margin-top: .16rem;
	}
}
</style>
