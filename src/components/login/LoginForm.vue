<template>
  <div>
    <div>
      <b-alert
        id="error-alert"
        :show="errorMessage !== null"
        dismissible
        variant="danger"
        >{{ errorMessage }}</b-alert
      >
      <b-form submit>
        <b-form-group id="credentials-form">
          <b-form-input
            v-model="form.email"
            type="email"
            required
            placeholder="Email"
          ></b-form-input>
          <b-form-input
            type="password"
            v-model="form.password"
            placeholder="Password"
            required
          ></b-form-input>
        </b-form-group>
        <b-button
          type="button"
          variant="success"
          v-on:click="onSubmit"
          id="submit-button"
          >{{ $t("login.login") }}</b-button
        >
      </b-form>
    </div>
    <div id="login-social-network">
      <h5>Login with</h5>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "LoginForm",
  components: {
  },
  computed: mapGetters("user", ["userInfo", "errorMessage"]),
  watch: {
    userInfo(value) {
      if (value !== null && value !== undefined) {
        this.$router.replace("/store");
      }
    }
  },
  methods: {
    ...mapActions("user", ["signUserIn"]),
    onSubmit() {
      this.signUserIn(this.form);
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
  font-size: 12px;
  & .close {
    bottom: 0;
  }
  margin-bottom: 5px;
}
#credentials-form {
  * {
    margin: 5px 0px;
  }
  margin-bottom: 2px;
}

#submit-button {
  width: 60%;
}
</style>
