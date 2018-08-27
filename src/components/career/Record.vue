<template>
  <div class="my-width hidden-md-and-down" id="career_record">
  	<MyTitle :title="'成长档案系统,RECORD'"></MyTitle>
  	<MySubTitle>系统介绍</MySubTitle>
  	<div class="my-sub-text n">全面记录学生学习发展中的过程性信息，有效提高教师工作效率的同时帮助学生认识自我</div>
    <div class="my-sub-text">并为综合素质评价提供依据</div>
	   
     <div class="my-icons flex between">
       <div class="my-icon relative" v-for="re in data.icons">
         <img :src="re.src" alt="" class="my-icon-img">
         <div class="my-icon-text absolute">{{re.text}}</div>
       </div>
     </div>

    <MySubTitle>系统功能</MySubTitle>
    <ImgText :data="data.func" :w="50"></ImgText>
  </div>
</template>

<script>
import ImgText from '../common/ImgText.vue';

export default {
  name: 'Record',
  props:['data'],
  components:{
    ImgText
  },
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.n.my-sub-text {
  margin-bottom:12px;
}
.my-icons {
  margin-bottom: 60px;
}
.my-icon-img {
  height: 182px;
}
.my-icon-text {
  bottom:24px;
  color:#fff;
  left:0;right:0;
  font-size: 18px;
}
#career_record {
  margin-bottom: 56px;
}
</style>
