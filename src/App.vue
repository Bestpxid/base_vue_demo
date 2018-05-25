<template>
  <div id="app">
      <keep-alive>
        <transition name="bounce">
          <router-view></router-view>
        </transition>
      </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
}
</style>
