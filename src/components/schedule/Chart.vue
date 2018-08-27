<template>
  <div class="schedule-chart gray-bg">
	<div class="my-width">
		<MyTitle :title="'教务排课解决方案流程图,SOLUTION FLOW CHART'" class="extra"></MyTitle>
		<img :src="bot" alt="" class="chart-img">
	</div>
  </div>
</template>

<script>
export default {
  name: 'Chart',
  props:['data'],
  data () {
    return {
      bot:'https://taidaxin.oss-cn-qingdao.aliyuncs.com/bottom.jpg'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.schedule-chart {
	padding-bottom: 60px;
}
@media screen and (max-width: 1200px) {
  .schedule-chart {
    padding-bottom: .32rem;
  }
  .chart-img {
    width: 6.86rem;
    margin: 0 auto;
  }
}
</style>
