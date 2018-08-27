<template>
  <div class="schedule-top schedule-bg all-center">
    <!-- PC端 -->
    <div class="my-modal flex column hidden-md-and-down">
      <div class="top-title">走班排课</div>
      <ul class="top-ul flex wrap">
        <li v-for="text in texts">{{text}}</li>
      </ul>
    </div>
    <!-- 移动端 -->
    <MbModal :data="texts1" ul="true" class="hidden-lg-and-up"></MbModal>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props:['data','info'],
  data () {
    return {
      texts:['灵活的选课管理','多类别课表导出','五维度排课设置限定','全面解决分层走班排课、选课难题','轻松完成最优课程方案'],
      texts1:['轻松完成最优课程方案','五维度排课设置限定','多类别课表导出','灵活的选课管理','全面解决分层走班排课、选课难题','全面解决分层走班排课、选课难题']
    }
  },
  methods:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
@import '../var.scss';
.schedule-top {
	height: 363px;
}
.my-modal {
  width:638px;
  height: 258px;
  box-sizing: border-box;
  padding: 64px 64px;
  background: rgba(0,0,0,1);
  justify-content: center;
  align-items: center;
}
.top-title {
  font-size: 32px;
  color:#fff;
  margin-bottom: 36px;
}
.top-ul {
  color:#fff;
  list-style-type: square;
  line-height: 32px;
  padding-left: 52px;
}
.top-ul li {
  padding-right: 28px;
}
@media screen and (max-width: 1200px) {
  .schedule-top {
    height: 2.22rem;
    width: 7.5rem;
  }
}
</style>
