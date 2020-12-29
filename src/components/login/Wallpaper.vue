<template>
  <div id="wallpaper">
    <a href="https://www.freepik.com/vectors/background">{{
      $t("login.wallpaperTerms")
    }}</a>
  </div>
</template>

<script>
export default {
  name: "Wallpaper"
};
</script>
<style lang="scss">
#wallpaper {
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url("../../assets/wallpaper.jpg");
  background-size: 100%;
}
a {
  font-size: 8px;
  align-items: flex-end;
  position: absolute;
  bottom: 0;
  right: 0;
}
#welcome-message {
  width: 100%;
  position: absolute;
  top: 45%;
  font-size: 30px !important;
  color: #8bcbcd;
}
</style>
