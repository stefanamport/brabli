<template>
  <div id="app">
    <searchfield v-on:userinput="sendNewSubmission"></searchfield>
    
    <div class="loadingindicator" v-if="loadingNewData">
      <div class="spinner">
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>
      </div>
    </div>

    <textlist :latestresponse="latestResponse"></textlist>
  </div>
</template>

<script>
import Searchfield from './Searchfield.vue'
import Textlist from './Textlist.vue'

import Rest from './rest-service/Rest.js'

export default {
  name: 'app',
  components : { Searchfield, Textlist },
  data () {
    return {
      latestResponse : {},
      loadingNewData : false
    }
  },
  created : function (){
    
  },
  methods : {
    sendNewSubmission : function(query){
      this.loadingNewData = true;
      Rest.postText(this.newResponse, query);
    },
    newResponse: function (data){
      this.latestResponse = data.data;
      this.loadingNewData = false;
    }
  }
}
</script>

<style lang="scss">

$global-padding: 40px;

body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  padding: 2px;
  margin: 0px;

  font-size: 100%;

  color: #fff;

  background: #3CA55C;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #B5AC49, #3CA55C);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #B5AC49, #3CA55C); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}
  
.loadingindicator {
  width: 100%;
  text-align: center;
}

.spinner {
  display: inline-block;
  width: 70px;
  text-align: center;
  opacity: .2;
}

.spinner > div {
  width: 18px;
  height: 18px;
  background-color: #333;

  border-radius: 100%;
  display: inline-block;
  -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  animation: sk-bouncedelay 1.4s infinite ease-in-out both;
}

.spinner .bounce1 {
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}

.spinner .bounce2 {
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}

@-webkit-keyframes sk-bouncedelay {
  0%, 80%, 100% { -webkit-transform: scale(0) }
  40% { -webkit-transform: scale(1.0) }
}

@keyframes sk-bouncedelay {
  0%, 80%, 100% { 
    -webkit-transform: scale(0);
    transform: scale(0);
  } 40% { 
    -webkit-transform: scale(1.0);
    transform: scale(1.0);
  }
}

</style>
