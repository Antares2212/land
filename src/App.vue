<template>
  <div class="container">
    <ResumePage />
  </div>
</template>

<script>
import ResumePage from './pages/MainPage.vue'

export default {
  name: 'App',
  components: {
    ResumePage
  }
}
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    color: $text-color;
    background-color: $bg-color;
    font-family: 'Roboto', sans-serif;
  }
  
  .container {
    max-width: 1080px;
    margin: 30px auto;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
</style>
