<template>
  <div id="outer-wrapper">
    <div id="wallpaper-wrapper">
      <wallpaper />
    </div>
    <div id="login-or-signup-wrapper" v-if="!isAuthLoading">
      <login-form v-if="!isSignUp" />
    </div>
    <div id="busy-indicator-wrapper" v-if="isAuthLoading">
      <busy-indicator />
    </div>
  </div>
</template>

<script>
import Form from "../components/login/Form";
import Wallpaper from "../components/login/Wallpaper.vue";
import BusyIndicator from "../components/common/BusyIndicator";
import { mapGetters } from "vuex";

export default {
  name: "Login",
  components: {
    "login-form": Form,
    wallpaper: Wallpaper,
    "busy-indicator": BusyIndicator
  },
  computed: mapGetters("user", ["userInfo", "isAuthLoading", "isSignUp"]),
  watch: {
    userInfo(value) {
      if (value !== null && value !== undefined) {
        this.$router.push("/store");
      }
    }
  }
};
</script>
<style lang="scss">
#outer-wrapper {
  width: 100%;
  height: 92vh;
  display: flex;
  flex-direction: row;
}
#wallpaper-wrapper {
  width: 65%;
}
#login-or-signup-wrapper,
#busy-indicator-wrapper {
  width: 35%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: center;
}
</style>
