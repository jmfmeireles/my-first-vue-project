<template>
  <div id="login-wrapper">
    <div id="login-form">
      <section-title :title="getProperTermOfFormAction(mode)" />
      <alert-message />
      <b-form @submit="onSubmit">
        <b-form-group id="form-group">
          <b-form-input
            v-model="form.email"
            type="email"
            required
            :placeholder="$t('login.email')"
          ></b-form-input>
          <b-form-input
            type="password"
            v-model="form.password"
            v-if="isPasswordFieldRequired(mode)"
            :state="passwordWithRequiredLength"
            :placeholder="$t('login.password')"
            :required="isPasswordFieldRequired(mode)"
            trim
          ></b-form-input>
          <b-form-input
            type="password"
            v-if="isConfirmPasswordFieldRequired(mode)"
            v-model="confirmPassword"
            :state="isPasswordMatching"
            :placeholder="$t('login.confirmPassword')"
            :required="isConfirmPasswordFieldRequired(mode)"
            trim
          ></b-form-input>
          <b-form-invalid-feedback>
            {{ getMessageToShowIfInvalidState }}
          </b-form-invalid-feedback>
        </b-form-group>
        <div id="account-actions">
          <b-button type="submit" class="submit-button">{{
            getProperTermOfFormAction(mode)
          }}</b-button>
          <b-button
            id="forgot-password-button"
            variant="link"
            type="button"
            v-if="isRecoverOptionRequired(mode)"
            v-on:click="setPasswordRecovery"
            >{{ $t("login.forgotPassword") }}</b-button
          >
        </div>
      </b-form>
    </div>
    <social-network-signin />
    <toogle-mode />
  </div>
</template>

<script>
import { mapActions, mapMutations, mapGetters } from "vuex";
import SectionTitle from "../common/SectionTitle";
import SocialNetworkSignIn from "./SocialNetworkSignIn.vue";
import AlertMessage from "./AlertMessage.vue";
import * as Constants from "../../resources/constants";
import ToogleMode from "./ToogleMode.vue";

export default {
  name: "LoginForm",
  components: {
    "section-title": SectionTitle,
    "alert-message": AlertMessage,
    "social-network-signin": SocialNetworkSignIn,
    "toogle-mode": ToogleMode
  },
  computed: {
    ...mapGetters("user", ["mode"]),
    isPasswordMatching() {
      return this.form.password === "" ||
        this.confirmPassword === "" ||
        this.confirmPassword === this.form.password
        ? null
        : false;
    },
    passwordWithRequiredLength() {
      return this.mode !== Constants.SIGN_UP ||
        this.form.password === "" ||
        this.form.password.length > 6
        ? null
        : false;
    },
    getMessageToShowIfInvalidState() {
      if (this.isPasswordMatching == false) {
        return this.$i18n.t("login.passwordMismatch");
      } else if (this.passwordWithRequiredLength == false) {
        return this.$i18n.t("login.passwordWithInvalidLength");
      } else {
        return "";
      }
    }
  },
  methods: {
    ...mapActions("user", [
      "signUserIn",
      "resetPasswordWithEmail",
      "signUserUp"
    ]),
    ...mapMutations("user", ["setSignUp", "setPasswordRecovery"]),
    onSubmit(event) {
      event.preventDefault();
      switch (this.mode) {
        case Constants.SIGN_IN:
          this.signUserIn(this.form);
          break;
        case Constants.SIGN_UP:
          this.confirmPassword === this.form.password &&
            this.form.password.length > 6 &&
            this.signUserUp(this.form);
          break;
        case Constants.RECOVER_PASSWORD:
          this.resetPasswordWithEmail(this.form);
          break;
        default:
          break;
      }
    },
    getProperTermOfFormAction(mode) {
      switch (mode) {
        case Constants.SIGN_IN:
          return this.$i18n.t("login.signin");
        case Constants.SIGN_UP:
          return this.$i18n.t("login.signup");
        case Constants.RECOVER_PASSWORD:
          return this.$i18n.t("login.passwordRecovery");
        default:
          return "";
      }
    },
    isPasswordFieldRequired(mode) {
      return mode !== Constants.RECOVER_PASSWORD;
    },
    isConfirmPasswordFieldRequired(mode) {
      return mode === Constants.SIGN_UP;
    },
    isRecoverOptionRequired(mode) {
      return mode === Constants.SIGN_IN;
    }
  },
  data() {
    return {
      form: {
        email: "",
        password: ""
      },
      confirmPassword: ""
    };
  }
};
</script>
<style lang="scss">
@import "@/styles/main.scss";
#login-wrapper {
  height: 100%;
}

#login-form {
  padding-top: 40%;
  height: 75%;
}
#form-group {
  * {
    margin: 5px 0px;
  }
  margin-bottom: 2px;
}

#account-actions {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

#forgot-password-button {
  color: $mainColor;
  width: 50%;
  text-align: end;
}
</style>
