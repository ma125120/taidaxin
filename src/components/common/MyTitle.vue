<template>
	<div class='my-title'>
		<span class="span1">{{t1}}</span>
		<span class="xie hidden-md-and-down" v-if="t2">/</span>
		<span v-if="t2" class="hidden-md-and-down">{{t2}}</span>
	</div>
</template>

<script>

export default {
  name: 'MyTitle',
  props:['title'],
  data () {
    return {

    }
  },
  computed: {
  	t1() {
      var arr = this.title.split(",")||[this.title];
  		return arr[0]
  	},
  	t2() {
      var arr = this.title.split(",")||[];
      return arr[1]
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
@import '../var.scss';
.my-title {
	font-size: 24px;
	padding: 60px 0 40px 0;
  color: #333;
}
.xie {
	padding: 0 5px 0 11px ;
}
@media screen and (max-width: 1200px) {
  .my-title {
    padding: .5rem 0.32rem .3rem;
    text-align: left;
    align-self: flex-start;
    font-size: .28rem;
    font-weight: 600;
  }
  .my-title:before {
    content:'';
    background: $red;
    display: inline-flex;
    width: .05rem;
    height: .28rem;
    margin-right: .12rem;
  }
  .span1 {
    vertical-align: .04rem;
  }
}
</style>
