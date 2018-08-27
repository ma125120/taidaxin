<template>
	<div class='my-sub-title'>
		<slot></slot>
    <div class="my-underline"></div>
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
  		return this.title.split(",")[0]
  	},
  	t2() {
  		return this.title.split(",")[1]
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
@import '../var.scss';
.my-sub-title {
  font-size: 22px;
}
.my-underline {
  width: 45px;
  height: 3px;
  background: $red;
  margin: 8px auto 32px;
}
@media screen and (max-width: 1200px) {
  .my-sub-title {
    font-size: .26rem;
  }
  .my-underline {
    width: .45rem;
    height: .03rem;
    background: $red;
    margin: .08rem auto .3rem;
  }

}
</style>
