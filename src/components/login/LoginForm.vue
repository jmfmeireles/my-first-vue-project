<template>
  <div>
    <section-title :title="$t('login.signin')" />
    <div>
      <b-form @submit="onSubmit">
        <b-form-group id="credentials-form">
          <b-form-input
            v-model="form.email"
            type="email"
            required
            :placeholder="$t('login.email')"
          ></b-form-input>
          <b-form-input
            type="password"
            v-model="form.password"
            :placeholder="$t('login.password')"
            required
          ></b-form-input>
        </b-form-group>
        <div id="account-actions">
          <b-button type="submit" id="submit-button">{{
            $t("login.signin")
          }}</b-button>
          <b-button
            id="forgot-password-button"
            variant="link"
            type="button"
            :disabled="errorMessage === null"
            v-on:click="resetPassword"
            >{{ $t("login.forgotPassword") }}</b-button
          >
        </div>
        <b-alert
          id="error-alert"
          v-if="messageType !== null"
          :variant="messageType"
          >{{ authMessage }}</b-alert
        >
      </b-form>
    </div>
    <div id="login-social-network">
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
import SectionTitle from "../common/SectionTitle";
import { FacebookIcon, GitHubIcon, GoogleIcon } from "vue-simple-icons";

export default {
  name: "LoginForm",
  components: {
    "section-title": SectionTitle,
    "facebook-icon": FacebookIcon,
    "google-icon": GoogleIcon,
    "github-icon": GitHubIcon
  },
  computed: mapGetters("user", ["messageType", "authMessage"]),
  methods: {
    ...mapActions("user", [
      "signUserIn",
      "signUserInGoogle",
      "signUserInFacebook",
      "signUserInGithub",
      "resetPasswordWithEmail"
    ]),
    onSubmit(event) {
      event.preventDefault();
      this.signUserIn(this.form);
    },
    resetPassword() {
      this.resetPasswordWithEmail(this.form);
    }
  },
  data() {
    return {
      form: {
        email: "",
        password: ""
      }
    };
  }
};
</script>
<style lang="scss">
#error-alert {
  margin-top: 15px;
  font-size: 12px;
  margin-bottom: 5px;
}
#credentials-form {
  * {
    margin: 5px 0px;
  }
  margin-bottom: 2px;
}

#account-actions {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

#submit-button {
  min-width: 50%;
  background-color: #8bcbcd;
  border-color: #8bcbcd;
}

#forgot-password-button {
  color: #8bcbcd;
}

#login-social-network {
  display: flex;
  width: 60%;
  flex-direction: row;
  margin: 30px auto 0px auto;
  color: #495057;
  align-items: center;
  justify-content: space-between;
  * {
    margin-bottom: 0px !important;
  }
}
</style>
