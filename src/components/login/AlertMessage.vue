<template>
  <b-alert
    id="error-alert"
    dismissible
    :show="messageType !== null"
    :variant="messageType"
    >{{ authMessage }}</b-alert
  >
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "LoginForm",
  computed: mapGetters("user", ["messageType", "authMessage"])
};
</script>
<style lang="scss">
@import "@/styles/main.scss";
#error-alert {
  margin-top: 5px;
  font-size: 12px;
  margin-bottom: 5px;
}
</style>
