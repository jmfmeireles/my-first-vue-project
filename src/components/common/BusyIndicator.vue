<template>
  <div id="busy-loader" />
</template>

<script>
export default {
  name: "BusyIndicator"
};
</script>

<style lang="scss">
#busy-loader {
  border: 16px solid #f3f3f3;
  border-top: 16px solid #dddddd;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
  margin: auto;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
