<template>
  <div :class="['v-items flex wrap',w?'new-items':'']">
		<div class="v-item v-l flex gray-bg" 
				v-for="(v,index) in data"
				v-if="index%2==0">
			<div class="v-content text-right">
				<div class="v-title bold">{{v.title}}</div>
				<div class="v-text" v-if="!v.text.map">{{v.text}}</div>
				<div class="v-texts" v-else>
					<div class="v-text" v-for="text in v.text">{{text}}</div>
				</div>
			</div>
			<div class="v-img">
				<img :src="v.src" alt="" class="v-img">
			</div>
		</div>
		<div class="v-item v-r flex gray-bg" 
				v-else>
			<div class="v-img">
				<img :src="v.src" alt="" class="v-img">
			</div>
			<div class="v-content text-left">
				<div class="v-title bold">{{v.title}}</div>
				<div class="v-text" v-if="!v.text.map">{{v.text}}</div>
				<div class="v-texts" v-else>
					<div class="v-text" v-for="text in v.text">{{text}}</div>
				</div>
			</div>
			
		</div>
  </div>	
</template>

<script>
export default {
  name: 'ImgText',
  props:['data','w'],
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.v-items {
	justify-content: space-between;
}
.v-item {
	width:400px;
	padding:48px;
	margin-bottom: 32px;
}
.v-content {
	line-height: 32px;
}
.v-img {
	padding-left: 16px;
	width: 108px;
}
.v-l {
	justify-content: flex-end;
}
.v-r .v-img {
	padding-right: 16px;
	padding-left: 0;
}
.new-items .v-item {
	width:583px;
	box-sizing: border-box;
}
</style>
