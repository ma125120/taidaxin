<template>
	<div class="lr">
		<div class="l text-left">{{left}}</div>
		<slot class="r text-right"></slot>
	</div>
  
</template>

<script>
export default {
  name: 'LR',
  props:['left','right'],
  data () {
    return {

    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.lr {
	display: flex;
}
.l,.r {
	width: 49%;
}
</style>
