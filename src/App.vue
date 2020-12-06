<template>
  <div id="app-wrapper">
    <app-header />
    <div id="app-body">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
import Header from "./components/common/Header.vue";

export default {
  name: "App",
  components: {
    "app-header": Header
  }
};
</script>

<style lang="scss">
@import "@/styles/main.scss";

#app-wrapper {
  font-family: Avenir, Helvetica, Arial, sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-flow: column;
  background-color: $backgroundColorItems;
  overflow: hidden;
}

#app-body {
  width: 100%;
  display: flex;
  flex-flow: row;
  flex: 1 auto;
  position: absolute;
  top: 8vh;
  min-height: 92vh;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
