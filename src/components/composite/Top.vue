<template>
  <div class="composite-top composite-bg all-center">
    <!-- PC端 -->
    <div class="my-modal flex column hidden-md-and-down">
      <div class="top-title">综合素质评价</div>
      <ul class="top-ul flex wrap">
        <li v-for="(text,i) in texts" :class="i==2?'three':''">{{text}}</li>
      </ul>
    </div>
    <!-- 移动端 -->
    <div class="mb-modal hidden-lg-and-up">
      <ul class="top-ul flex wrap">
        <li v-for="(text,i) in texts1" :class="['flex top-li',i%2==0?'text-right':'text-left']">
          <div class="white-block" v-if="i%2!=0"></div>
          <div class="mb-text">{{text}}</div>
          <div class="white-block" v-if="i%2==0"></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Top',
  props:['data'],
  data () {
    return {
      texts:['学生成长历史的缩影','学习和活动的博物馆','导师查看与评价','助力家校互动','综合素质评价','一键生成档案','社交平台分享'],
      texts1:['学生成长历史的缩影','学习和活动的博物馆','导师查看与评价','助力家校互动','一键生成档案','社交平台分享'],
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.composite-top {
  height: 320px;
}
.my-modal {
  width: 638px;
  height: 258px;
  box-sizing: border-box;
  padding: 64px 48px;
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
  padding-left: 50px;
}
.top-ul li {
  padding-right: 27px;
}
.three {
  padding-left: 10px;
}
@media screen and (max-width: 1200px) {
  .composite-top {
    height: auto;
  }
  .mb-modal {
    width:100%;
    height: 100%;
    box-sizing: border-box;
    padding: .64rem .48rem;
    background: rgba(0,0,0,.4);
    justify-content: center;
    align-items: center;
  }
  .white-block {
    width:0.08rem;
    height: .08rem;
    background: #fff;
    margin: 0 .16rem;  
  }
  .top-ul {
    width: 6rem;
    margin:0 auto;
    font-size: .22rem;
    padding-left: 0;
  }
  .top-ul .top-li {
    align-items: center;
    padding-right: 0;
    width: 50%;
    line-height: .32rem;
  }
  .top-li.text-right {
    justify-content: flex-end;
  }
}
</style>
