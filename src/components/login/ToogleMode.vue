<template>
  <div id="toogle-wrapper">
    <h5>{{ getProperTitle(mode) }}</h5>
    <b-button class="submit-button" v-on:click="changeMode">{{
      getProperButtonNameForAction(mode)
    }}</b-button>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
import * as Constants from "../../resources/constants";

export default {
  name: "ToogleMode",
  computed: mapGetters("user", ["mode"]),
  methods: {
    ...mapMutations("user", ["setSignUp", "setSignIn"]),
    getProperTitle(mode) {
      switch (mode) {
        case Constants.SIGN_UP:
          return this.$i18n.t("login.havingAccountAlready");
        case Constants.RECOVER_PASSWORD:
          return this.$i18n.t("login.knowingPassword");
        case Constants.SIGN_IN:
          return this.$i18n.t("login.haveAccountQuestion");
        default:
          return "";
      }
    },
    getProperButtonNameForAction(mode) {
      switch (mode) {
        case Constants.SIGN_UP:
        case Constants.RECOVER_PASSWORD:
          return this.$i18n.t("login.signin");
        case Constants.SIGN_IN:
          return this.$i18n.t("login.signup");
        default:
          return "";
      }
    },
    changeMode() {
      switch (this.mode) {
        case Constants.SIGN_UP:
        case Constants.RECOVER_PASSWORD:
          this.setSignIn();
          break;
        case Constants.SIGN_IN:
          this.setSignUp();
          break;
        default:
          break;
      }
    }
  }
};
</script>
<style lang="scss">
@import "@/styles/main.scss";

#toogle-wrapper {
  height: 10%;
}
</style>
