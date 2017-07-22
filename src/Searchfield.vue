<template>
  <div id="searchfield">
    
    <div class="searchfield">
      <div class="searchfield__wrap">
          <form v-on:submit.prevent="sendUserInput">
            <input v-model="userinput" class="searchfield__field">
          </form>
          <div class="searchfield__bg"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'searchfield',
  data () {
    return {
      userinput: ''
    }
  },
  created : function (){
    
  },
  methods : {
    sendUserInput : function (){
      if (this.userinput.length > 1) {
        this.$emit('userinput', this.userinput);
      }
    }
  }
}
</script>

<style lang="scss">

  .searchfield {
    width: 100%;

    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;

    padding: 40px 20px;
  }

  .searchfield__wrap {
    position: relative;

    width: 100%;
    max-width: 600px;
  }

  .searchfield__field {
    position: relative;
    z-index: 5;

    background: none;
    font-size: 3em;
    font-weight: bold;

    padding: 15px 30px;
  
    border: 0px;
    
    color: lighten(#3CA55C, 60);
    
    width: calc(100% - 60px);
    margin: 0px;
    display: block;

    &:focus {
      outline: none;
    }

  }

  .searchfield__bg {
      position: absolute;
      z-index: 1;

      background: rgba(0,0,0,.5);

      width: 100%;
      height: 100%;
      top: 0px;
      left: 0xp;
  }
</style>
