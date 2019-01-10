<template>
  <div id="app">
    <p>{{dataA}}</p>
    <router-view class="route-view"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
#app
  height 100%
  width 100%
  position absolute
</style>
