<template>
  <div id="textlist">
    <div class="texts">
    	<div class="texts__text" v-for="(response, i) in responsesRev">
        <template v-if="i==0">
    		  <typewriter :text="response" :showcursor="i==0"></typewriter>
        </template>
        <tempalte v-else>
          {{response}}
        </tempalte>
    	</div>
    </div>
    
  </div>
</template>

<script>
import Typewriter from './Typewriter.vue'

export default {
  name: 'textlist',
  props : [ 'latestresponse' ],
  components : { Typewriter },
  data () {
    return {
      responses: []
    }
  },
  created : function() {
  	
  },
  computed : {
    responsesRev : function() {
      return this.responses.reverse();
    }
  },
  watch : {
  	latestresponse : function(){
  		this.speak();
  	}
  },
  methods : {
  	speak : function(){
  		if (this.latestresponse.result){
  			let speech = this.latestresponse.result.fulfillment.speech;
  			this.responses.push(speech);
  		}
  	}
  }
}
</script>

<style lang="scss">
	.texts {
		display: flex;
		justify-content: center;
		flex-flow: row wrap;

		padding: 0 20px;

		> * {
			width: 100%;
		}
	}
	
	.texts__text {
		padding: 10px 0;
		text-align: center;

		font-size: 1.2em;
		font-weight: bold;
	}

</style>
