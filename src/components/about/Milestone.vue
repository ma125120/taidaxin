<template>
  <div class="mile">
  	<div class="my-card extra my-width">
      <MyTitle :title="'里程碑,MILESTONE'" class="extra"></MyTitle>
      <div class="all-center mile-mb  hidden-md-and-down">
        <div class="mile-item center column" v-for="(mile,index) in data">
          <div class="t column  time" v-if="index%2==0">
            {{mile.time}}
          </div>
          <div class="t all-center column" v-else>
            <div class="mile-text" v-html="mile.text"></div>
            <div class="t-border"></div>
          </div>
          
          <div class="m all-center">
            <div class="gray-line"></div>
            <div class="red-circle all-center">
              <div class="red-circle-inset"></div>
            </div>
            <div class="gray-line"></div>
          </div>
          <div class="b all-center column" v-if="index%2==0">
            <div class="b-border"></div>
            <div class="mile-text" v-html="mile.text"></div>
            
          </div>
          <div class="b time" v-else>
            {{mile.time}}
          </div>
        </div>
      </div>
      <div class="hidden-lg-and-up">
          <img :src="mbMile" alt="" class="mile-img">
      </div>
    </div>

    
  </div>
</template>

<script>
export default {
  name: 'Milestone',
  props:['data'],
  data () {
    return {
      mbMile:'https://taidaxin.oss-cn-qingdao.aliyuncs.com/mile.png'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
@import '../var.scss';
.my-card {
  padding: 60px 0 72px;
  font-weight: 800;
  margin-top:60px;
  box-shadow: none;
}
.my-title.extra {
  padding-top:0;
}
.my-card:hover {
  cursor: default;
  box-shadow: none;
}
.gray-line {
  width:96px;
  height:1px;
  border-bottom: 1px solid #C3C3C3;
}
.t,
.b {
  height: 128px;
}
.t {
  display: flex;
  justify-content: flex-end;
}
.red-circle {
  width:24px;
  height: 24px;
  background: #DD5955;
  border-radius: 50%;
  margin: 12px;
}
.red-circle-inset {
  width: 16px;
  height: 16px;
  background: #BE1B1E;
  border-radius: 50%;
}
.t-border {
  background: #BD4245;
  height: 50px;
  width: 1px;
  margin-top: 12px;
}
.mile-text {
  font-size:18px;
  line-height: 28px;
  color:#BA0025;
}
.b-border {
  background: #ddd;
  height: 50px;
  width: 1px;
}
.time {
  color: #8F8F8F;
  font-size: 26px;
  font-family: "Comic Sans MS",sans-serif;
}
@media screen and (max-width: 1200px) {
  .mile-mb {
    @include w;
    padding-top: .36rem;
  }
  .my-card {
    padding: 0rem 0 .1rem;
    font-weight: 800;
    margin-top: .6rem;
    box-shadow: none;
  }
  .my-title.extra {
    padding-top:0;
  }
  .my-card:hover {
    cursor: default;
    box-shadow: none;
  }
  .gray-line {
    width: .48rem;
    height:1px;
    border-bottom: 1px solid #C3C3C3;
  }
  .t,
  .b {
    height: 1.28rem;
  }
  .t {
    display: flex;
    justify-content: flex-end;
  }
  .red-circle {
    width: .16rem;
    height: .16rem;
    background: #DD5955;
    border-radius: 50%;
    margin: .12rem;
  }
  .red-circle-inset {
    width: .16rem;
    height: .16rem;
    background: #BE1B1E;
    border-radius: 50%;
  }
  .t-border {
    background: #BD4245;
    height: .5rem;
    width: 0.01rem;
    margin-top: .12rem;
  }
  .mile-text {
    font-size: .08rem;
    line-height: .28rem;
    color:#BA0025;
  }
  .b-border {
    background: #ddd;
    height: .5rem;
    width: .01rem;
  }
  .time {
    color: #8F8F8F;
    font-size: .2rem;
    font-family: "Comic Sans MS",sans-serif;
  }
  .mile-img {
    width:6.86rem;
    margin-top: .3rem;
  }
}
</style>
