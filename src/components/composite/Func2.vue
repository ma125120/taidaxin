<template>
  <div class="composite-func2 my-width">
	   <MyTitle :title="'系统功能,FUNCTION'" class="extra"></MyTitle>
     <!-- PC端 -->
     <ImgText :data="data" :w="581" class="hidden-md-and-down"></ImgText>
     <!-- 移动端 -->
     <div class="img-titles hidden-lg-and-up">
       <div class="img-title" v-for="f in data">
         <img :src="f.src" alt="" class="real-img">
         <div class="img-real-title" v-html="f.title"></div>
       </div>
     </div>
  </div>
</template>

<script>
export default {
  name: 'Func2',
  props:['data'],
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.extra.my-title {
  padding-top: 0;
}
.real-img {
  width: 108px;
}
@media screen and (max-width: 1200px) {
  .composite-func2 {
    font-size: .22rem;
  }
  .real-img {
    width: 1.48rem;
    border-radius: 50%;
    margin-bottom: .16rem;
  }
  .img-titles {
    display: flex;
    justify-content: space-between;
    padding: 0 .32rem;
  }
  .img-real-title {
    margin-bottom: .18rem;
    font-size: .24rem;
  }
}
</style>
