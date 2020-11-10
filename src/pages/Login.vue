<template>
  <b-button variant="link" v-on:click="navigateToStore">
    Login
  </b-button>
</template>

<script>
import { BButton } from "bootstrap-vue";

export default {
  name: "Store",
  components: {
    "b-button": BButton
  },
  methods: {
    navigateToStore: function() {
      this.$router.push({ path: "store" });
    }
  }
};
</script>

<style lang="scss"></style>
