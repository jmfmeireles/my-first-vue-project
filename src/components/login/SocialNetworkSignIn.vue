<template>
  <div id="login-social-network-wrapper">
    <div id="login-social-network" v-if="isSocialNetworkSignInVisible(mode)">
      <h5>{{ $t("login.socialNetworkLogin") }}</h5>
      <b-button variant="link" v-on:click="signUserInGoogle">
        <google-icon size="25" />
      </b-button>
      <b-button variant="link" v-on:click="signUserInFacebook">
        <facebook-icon size="25" />
      </b-button>
      <b-button variant="link" v-on:click="signUserInGithub">
        <github-icon size="25" />
      </b-button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { FacebookIcon, GitHubIcon, GoogleIcon } from "vue-simple-icons";
import * as Constants from "../../resources/constants";

export default {
  name: "SocialNetworkSignIn",
  components: {
    "facebook-icon": FacebookIcon,
    "google-icon": GoogleIcon,
    "github-icon": GitHubIcon
  },
  computed: mapGetters("user", ["mode"]),
  methods: {
    ...mapActions("user", [
      "signUserInGoogle",
      "signUserInFacebook",
      "signUserInGithub"
    ]),
    isSocialNetworkSignInVisible(mode) {
      return mode === Constants.SIGN_IN;
    }
  }
};
</script>
<style lang="scss">
@import "@/styles/main.scss";
#login-social-network-wrapper {
  width: 60%;
  height: 15%;
  margin: auto;
}
#login-social-network {
  display: flex;
  flex-direction: row;
  color: #495057;
  align-items: center;
  justify-content: space-between;
  * {
    margin-bottom: 0px !important;
  }
}
</style>
