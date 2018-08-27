<template>
  <div class="schedule-background my-width">
  	<MyTitle :title="'改革背景,BACKGROUND'"></MyTitle>
  	<div  class="my-sub-text">2014年9月4日，<span class="block"></span>国务院《关于深化考试招生制度改革的实施意见》正式发布!</div>
    <!-- PC端 -->
    <div class="schedule-cards flex between hidden-md-and-down">
      <div class="my-card flex column between" v-for="(b,index) in data">
        <div class="card-img">
          <img :src="b.src" alt=""
              :class="[index==1?'middle':'']">
        </div>
        <div class="my-card-title">{{b.title}}</div>
        <div class="my-card-content">{{b.content}}</div>
      </div>
    </div>
    <!-- 移动端 -->
    <div class="card-wrap">
      <div class="schedule-cards flex hidden-lg-and-up">
        <div class="mb-card flex column between" v-for="(b,index) in data">
          <div class="mb-card-content">{{b.content1}}</div>
          <div class="mb-card-title">{{b.title}}</div> 
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'Background',
  props:['data'],
  data () {
    return {

    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
@import '../var.scss';
.schedule-cards {
  margin-bottom: 64px
}
.my-card {
  padding: 36px 32px;
  width:376px;
  height: 390px;
  box-sizing: border-box;
  margin-top: 48px;
}
.my-card-title {
  font-size: 18px;
  color:#333;
}
.my-card-content {
  font-size: 14px;
  color:#666;
  text-align: justify;
  line-height: 28px;
}
.middle {
  margin-top: -86px;
}
@media screen and (max-width: 1200px) {

  .my-sub-text {
    font-size: .24rem;
    color:rgb(102,102,102);
    line-height: .36rem;
    margin-bottom: .32rem;
    text-align: left;
    margin-left: .32rem;
  }
  .mb-card {
    box-shadow: 2px 2px 12px 0 rgba(0,0,0,.05),-2px -2px 12px 0 rgba(0,0,0,.05);
    width: 4rem;
    min-width: 250px;
    margin-right: .48rem;
    border-radius: 4px;
  }
  .mb-card-content {
    padding: .48rem .32rem;
    text-align: justify;
    line-height: .42rem;
    font-size: .24rem;
    color: #666;
  }
  .mb-card-title {
    background: #f0f0f0;
    color:#000;
    font-size: .26rem;
    line-height: .88rem;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }
  .card-wrap {
    width: 6.86rem;
    margin: 0 auto;
    overflow-x: auto;
  }
  .schedule-cards {
    margin-bottom: .28rem;
    padding: .02rem;
    justify-content: space-between;
    width: 8rem;
    min-width: 600px;
  }
}
@media screen and (max-width: 988px) {
  .schedule-cards {
    justify-content: flex-start;
  }

}
</style>
