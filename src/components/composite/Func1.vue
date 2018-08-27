<template>
  <div class="composite-func1 my-width">
  	<MyTitle :title="'系统介绍,FUNCTION'"></MyTitle>
    <div class="hidden-md-and-down">
      <div class="my-sub-text none ">全面记录学生学习发展中的过程性信息，有效提高教师工作效率的同时帮助学生认识自我</div>
      <div class="my-sub-text">并为综合素质评价提供依据</div>
    </div>
    <div class="hidden-lg-and-up">
      <div class="my-sub-text none ">全面记录学生学习发展中的过程性信息，有效提高教师工作效率的同时帮助学生认识自我并为综合素质评价提供依据。</div>
    </div>
  	<!-- PC端 -->
    <div class="my-icon-wrap hidden-md-and-down">
      <div class="my-icons flex">
         <div 
           class="my-icon relative" 
           v-for="(re,i) in data"
           >
           <img :src="re.src" alt="" class="icon-img">
           <div class="my-icon-text absolute">{{re.text}}</div>
         </div>
      </div>
    </div>
  	<!-- 移动端 -->
    <div class="my-icon-wrap hidden-lg-and-up">
      <div class="my-icons flex">
         <div 
           class="my-icon relative" 
           v-for="(re,i) in data"
           :style="'left:'+(i*0.28)+'rem'"
           >
           <img :src="re.src" alt="" class="icon-img">
           <div class="my-icon-text absolute">{{re.text}}</div>
         </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Func1',
  props:['data'],
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.my-icons {
  margin-bottom: 60px;
}
.my-icon-text {
  bottom:24px;
  color:#fff;
  left:0;right:0;
  font-size: 18px;
}
.my-sub-text.none {
	margin-bottom: 18px;
}
.icon-img {
  width: 160px;
}
.my-icons {
    justify-content: space-between;
}
@media screen and (max-width: 1200px) {
  .my-sub-text {
    text-align: left;
    padding: 0 .32rem;
    font-size: .2rem;
    line-height: .32rem;
    margin-bottom: .12rem;
  }
  .my-sub-text.none {
    margin-bottom: 0;
  }
  .icon-img {
    width: 1.6rem;
  }
  .my-icon-text {
    bottom: .24rem;
    font-size: .24rem;
  }
  .my-icons {
    width: 9.6rem;
    justify-content: flex-start;
  }
  .my-icon {
    
  }
  .my-icon-wrap {
    width:6.92rem;
    margin: 0 auto;
    overflow-x: auto;
    overflow-y: hidden;
  }
  .my-icons {
    /*overflow-y: auto;*/
    margin-bottom: .28rem;
  }
  .img-real-title {
    font-size: .22rem;
  }
}
</style>
