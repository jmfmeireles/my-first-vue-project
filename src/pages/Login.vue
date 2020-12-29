<template>
  <div id="outer-wrapper">
    <div id="wallpaper-wrapper">
      <wallpaper />
    </div>
    <div id="login-or-signup-wrapper">
      <login-form />
    </div>
  </div>
</template>

<script>
import LoginForm from "../components/login/LoginForm";
import Wallpaper from "../components/login/Wallpaper.vue";
import { mapGetters } from "vuex";

export default {
  name: "Login",
  components: {
    "login-form": LoginForm,
    wallpaper: Wallpaper
  },
  computed: mapGetters("user", ["userInfo"]),
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
#login-or-signup-wrapper {
  width: 35%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-around;
}
</style>
