<template>
  <div class="my-width" id="career_volunteer">
  	<MyTitle :title="'志愿填报系统,VOLUNTEER'"></MyTitle>
    <MySubTitle>系统介绍</MySubTitle>
    <!-- PC -->
    <div class="hidden-md-and-down">
      <div class="my-sub-text n">通过学生模拟志愿填报的数据，结合大数据和志愿梯度，智能分析志愿的合理度和完整度，为学生的高考</div>
      <div class="my-sub-text">志愿决策提供有效的建议参考</div>
      
      <ImgText :data="data" :w="581"></ImgText>
    </div>
    <!-- mobile -->
  	<div class="hidden-lg-and-up">
      <div class="my-sub-text">
        <p>通过学生模拟志愿填报的数据，结合大数据和志愿梯度，智能分</p>
        <p>析志愿的合理度和完整度，为学生的高考志愿决策提供</p>
        <p>有效的建议参考</p>
      </div>
      <div class="icons flex">
        <div class="icon-item" v-for="icon in data">
          <img :src="icon.src" alt="" class="icon-img">
          <div class="icon-title">{{icon.title}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ImgText from '../common/ImgText.vue';

export default {
  name: 'HelloWorld',
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
@import '../var.scss';
.n.my-sub-text {
	margin-bottom:12px;
}
.v-items {
  justify-content: space-between;
}
@media screen and (max-width: 1200px) {
  .my-sub-text {
    font-size: .22rem;
  }
  .icons {
    @include w;
    justify-content: space-between;
    font-size: .16rem;
    padding-top: .12rem;
  }
  .icon-img {
    border-radius: 50%;
    width: 1.12rem;
    box-shadow: 2px 2px 6px rgba(0,0,0,.05),-2px -2px 6px rgba(0,0,0,.05);
    margin-bottom: .12rem;
  }
}
</style>
