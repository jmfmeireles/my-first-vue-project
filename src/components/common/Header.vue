<template>
  <head>
    <div id="app-information-wrapper">
      <img src="../../assets/logo.png" width="60" height="60" />
      <h2>{{ $t("appTitle") }}</h2>
    </div>
    <div id="actions-wrapper" v-if="isAuthenticated">
      <favorites-popover />
      <b-button variant="link">
        <user-icon variant="secondary" font-scale="2"></user-icon>
      </b-button>
    </div>
  </head>
</template>

<script>
import { BIconPerson, BButton } from "bootstrap-vue";
import FavoritesPopover from "../favorites/FavoritesPopover";
import { mapGetters } from "vuex";

export default {
  name: "Header",
  components: {
    "b-button": BButton,
    "user-icon": BIconPerson,
    "favorites-popover": FavoritesPopover
  },
  computed: mapGetters("user", ["isAuthenticated"]),
  data() {
    return {
      showFavorites: false
    };
  }
};
</script>

<style lang="scss">
head {
  height: 8vh;
  width: 100%;
  background-color: #9eb7bb;
  position: absolute;
  color: #eeeeee;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  padding: 0px 10px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
}

base-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

#app-information-wrapper {
  @extend base-wrapper;
  width: 15%;
}

#actions-wrapper {
  @extend base-wrapper;
  width: 10%;
}
</style>
