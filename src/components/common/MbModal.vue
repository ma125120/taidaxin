<template>
	<!-- 移动端 -->
    <div class="mb-modal all-center hidden-lg-and-up">
      <ul :class="['top-ul flex wrap',ul?'extra':'']">
        <li v-for="(text,i) in data" :class="['flex top-li',i%2==0?'text-right':'text-left']">
          <div class="white-block" v-if="i%2!=0"></div>
          <div class="mb-text">{{text}}</div>
          <div class="white-block" v-if="i%2==0"></div>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'MbModal',
  props:['data','ul'],
  data () {
    return {

    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>

@media screen and (max-width: 1200px) {
  .mb-modal {
    width:100%;
    height: 100%;
    box-sizing: border-box;
    box-sizing: border-box;
    padding: .64rem .32rem;
    background: rgba(0,0,0,.4);
    justify-content: center;
    align-items: center;
    color: rgba(255,255,255,.9);
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
  .top-ul.extra {
    width: 6.86rem;
    font-size: .2rem;
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
