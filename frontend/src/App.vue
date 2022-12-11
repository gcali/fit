<script lang="ts">
import Header from './components/Header.vue';

export default {
  components: {
    Header
  }
}
</script>

<template lang="pug">
#app
  Header
  #main
    #intro
      img.background(src='./assets/back.jpg')
</template>

<style scoped lang="scss">
#intro {
  position: relative;
  .text {
    background-image: url(/public/slider.png);
    height: 20em;
    text-align: center;
    padding-top: 5em;
    background-size:cover;
  }
  .background {
    position: absolute;
    top: 0;
    z-index: -1;
    width: 100%;
  }
}

#main {
  margin-top: 3em;
}

#app {
  min-height: 100vh;
  overflow-y: hidden;
}

</style>
