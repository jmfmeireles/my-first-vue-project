<template>
  <div id="outer-wrapper">
    <div id="inner-wrapper">
      <section-title :title="$t('welcome')" />
      <login-form />
    </div>
  </div>
</template>

<script>
import LoginForm from "../components/login/LoginForm";
import SectionTitle from "../components/common/SectionTitle.vue";
export default {
  name: "Login",
  components: {
    "login-form": LoginForm,
    "section-title": SectionTitle
  }
};
</script>
<style lang="scss">
#outer-wrapper {
  width: 100%;
  height: 92vh;
  display: flex;
  align-content: center;
}
#inner-wrapper {
  width: 40%;
  height: 40%;
  margin: auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-around;
}
</style>
