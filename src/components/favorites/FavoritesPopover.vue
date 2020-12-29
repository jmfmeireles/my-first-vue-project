<template>
  <div>
    <b-button variant="link" id="favorites-icon">
      <heart-fill-icon variant="secondary" font-scale="2"></heart-fill-icon>
    </b-button>
    <b-popover
      id="popover-favorites"
      target="favorites-icon"
      triggers="click"
      placement="bottom"
      boundary="window"
    >
      <template id="popover-title" #title>
        <h2>{{ $t("favorites.title") }}</h2>
      </template>
      <favorite-item
        v-for="music in favorites"
        v-bind:key="music.trackId"
        v-bind:music="music"
      />
      <h4 v-if="!favorites || !favorites.length" class="message">
        {{ $t("favorites.noFavorites") }}
      </h4>
    </b-popover>
  </div>
</template>

<script>
import { BIconHeartFill } from "bootstrap-vue";
import FavoriteItem from "./FavoriteItem.vue";
import { mapGetters } from "vuex";

export default {
  name: "FavoritesPopover",
  components: {
    "heart-fill-icon": BIconHeartFill,
    "favorite-item": FavoriteItem
  },
  computed: mapGetters("favorites", ["favorites"])
};
</script>

<style lang="scss">
@import "@/styles/main.scss";

#popover-favorites {
  min-width: 400px;
  border-radius: $defaultBorderRadius;
  max-height: 70vh;
  overflow-y: auto;
}

.popover-header {
  border-radius: $defaultBorderRadius !important;
  width: 100%;
}
</style>
