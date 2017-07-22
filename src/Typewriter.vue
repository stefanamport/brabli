<template>
  <div id="typewriter">
    {{textoutput}}<span v-if="showcursor" class="cursor"></span>
  </div>
</template>

<script>

export default {
  name: 'typewriter',
  props : ['text', 'showcursor'],
  data () {
    return {
      showchars: 0,
      countchars: 0,
      typespeed: 70
    }
  },
  watch : {
    text: function (){
      this.writeText();
    }
  },
  mounted : function () {
    this.writeText();
  },
  computed : {
    textoutput : function (){
      return this.text.slice(0, this.showchars);
    }
  },
  methods : {
    writeText: function (){
      
      this.countchars = this.text.length;
      this.showchars = 0;

      for (var i=0; i < this.countchars; i++) {
        var that = this;
        setTimeout( function(){
          that.showchars++;
        }, that.typespeed * i);
      }

    }
  }
}
</script>

<style lang="scss">

  @keyframes blink-animation {
    from {
      opacity: .4;
    }
    to {
      opacity: 0;
    }
  }

  .cursor {
    display: inline-block;
    width: 2px;
    height: 1em;
    
    margin-left: 3px;
    transform: translateY(3px);

    background: #fff;

    opacity: .5;

    animation: blink-animation 1s infinite;

  }
</style>
