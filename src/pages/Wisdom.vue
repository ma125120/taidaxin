<template>
  <div class="wisdom">
	<MyNav color="true" class='white'></MyNav>

	<Top></Top>
	<Breadcrumb :nav="bread"></Breadcrumb>
	<Background :data="background"></Background>
  </div>
</template>

<script>
import Top from '../components/wisdom/Top.vue'
import Background from '../components/wisdom/Background.vue'
import Mange from '../components/wisdom/Mange.vue'
import Evaluate from '../components/wisdom/Evaluate.vue'

import data from '../../static/data/data.js';

var { background, bread, evaluate, mange } = data.wisdom;

export default {
  name: 'Wisdom',
  props:['data'],
  components:{
  	Top, Background, Mange, Evaluate
  },
  data () {
    return {
    	background, bread, evaluate, mange
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>

</style>
