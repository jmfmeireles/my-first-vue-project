<template>
  <div id="favorite-wrapper">
    <div id="thumbnail-wrapper">
      <img v-bind:src="music.artworkUrl100" alt="logo" />
    </div>
    <div id="main-information-wrapper">
      <h4>{{ music.trackName }}</h4>
      <h6>{{ music.artistName }}</h6>
    </div>
    <div id="remove-favorite-wrapper">
      <b-button variant="link" v-on:click="removeFavorite(music.trackId)">
        <heart-fill-icon variant="danger" font-scale="2"></heart-fill-icon>
      </b-button>
    </div>
  </div>
</template>

<script>
import { BIconHeartFill } from "bootstrap-vue";
import { mapMutations, mapGetters } from "vuex";

export default {
  name: "FavoriteItem",
  components: {
    "heart-fill-icon": BIconHeartFill
  },
  props: ["music"],
  computed: mapGetters("shoppingCart", ["isMusicOnShoppingCart"]),
  methods: {
    ...mapMutations("favorites", ["removeFavorite"])
  }
};
</script>

<style lang="scss">
@import "@/styles/main.scss";
#favorite-wrapper {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px 0px;
  background-color: $backgroundColorItems;
  border-radius: $defaultBorderRadius;
  box-shadow: 2.5px 2.5px 2.5px 0px rgba(0, 0, 0, 0.75);
}
#remove-favorite-wrapper {
  width: 10%;
  justify-content: center;
  align-items: center;
}

#thumbnail-wrapper {
  width: 10%;
  margin: 10px;
  justify-content: center;
  align-items: center;
  > img {
    border-radius: 20px;
    height: 40px;
  }
}
#main-information-wrapper {
  width: 80%;
  margin-left: 10px;
  justify-content: start;
}
</style>
