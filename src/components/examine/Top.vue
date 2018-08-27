<template>
  <div>
    <MyNav color="true" class="hidden-lg-and-up my-nav1"></MyNav>
    <div class="examine-top examine-bg">
      <MyNav active="1" class="hidden-md-and-down"></MyNav>
      <div class="all-center comments column">
        <div class="comment">科学思维、价值思维</div> 
        <div class="comment">应变思维决定着思维方式的完善性</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props:[],
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>

.comment {
	font-size:28px;
	margin-bottom:32px;
	color:#fff;
}
@media screen and (max-width: 1200px) {
  .comment {
    font-size: .28rem;
    margin-bottom: .16rem;
  }
}
</style>
