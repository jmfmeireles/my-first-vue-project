<template>
  <b-alert
    id="error-alert"
    v-if="messageType !== null"
    :variant="messageType"
    >{{ authMessage }}</b-alert
  >
</template>

<script>
import { mapGetters } from "vuex";
import { BAlert } from "bootstrap-vue";

export default {
  name: "LoginForm",
  components: {
    "b-alert": BAlert
  },
  computed: mapGetters("user", ["messageType", "authMessage"])
};
</script>
<style lang="scss">
@import "@/styles/main.scss";
#error-alert {
  margin-top: 15px;
  font-size: 12px;
  margin-bottom: 5px;
}
</style>
