<template>
  <div id="app">
    <searchfield></searchfield>
    <textlist></textlist>
  </div>
</template>

<script>
import Searchfield from './Searchfield.vue'
import Textlist from './Textlist.vue'

export default {
  name: 'app',
  components : { Searchfield, Textlist },
  data () {
    return {
     
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
</style>
