<template>
  <div id="wrapper">
    <div id="image-wrapper">
      <img v-bind:src="music.artworkUrl100" alt="logo" />
    </div>
    <div id="main-information-wrapper">
      <h3>{{ music.trackName }}</h3>
      <h5>{{ music.collectionName }}</h5>
      <h6>{{ music.artistName }}</h6>
    </div>
    <div id="price-information-wrapper">
      <h5>{{ music.trackPrice }} {{ music.currency }}</h5>
    </div>
    <div id="options-wrapper">
      <b-button
        variant="link"
        v-on:click="addMusic(music)"
        v-show="!isMusicOnShoppingCart(music.trackId)"
      >
        <cart-icon-add variant="primary" font-scale="2"></cart-icon-add>
      </b-button>
      <b-button
        variant="link"
        v-show="isMusicOnShoppingCart(music.trackId)"
        v-on:click="removeMusic(music.trackId)"
      >
        <cart-icon-remove variant="danger" font-scale="2"></cart-icon-remove>
      </b-button>
      <b-button
        variant="link"
        v-show="isMusicOnFavorites(music.trackId)"
        v-on:click="removeFavorite(music.trackId)"
      >
        <heart-fill-icon variant="danger" font-scale="2"></heart-fill-icon>
      </b-button>
      <b-button
        variant="link"
        v-show="!isMusicOnFavorites(music.trackId)"
        v-on:click="addFavorite(music)"
      >
        <heart-icon variant="danger" font-scale="2"></heart-icon>
      </b-button>
    </div>
  </div>
</template>

<script>
import {
  BIconCartPlus,
  BIconCartX,
  BIconHeartFill,
  BIconHeart
} from "bootstrap-vue";
import { mapMutations, mapGetters } from "vuex";

//https://vuejs.org/v2/guide/components-props.html
export default {
  name: "SongItem",
  components: {
    "cart-icon-add": BIconCartPlus,
    "cart-icon-remove": BIconCartX,
    "heart-fill-icon": BIconHeartFill,
    "heart-icon": BIconHeart
  },
  props: ["music"],
  computed: {
    ...mapGetters("shoppingCart", ["isMusicOnShoppingCart"]),
    ...mapGetters("favorites", ["isMusicOnFavorites"])
  },
  methods: {
    ...mapMutations("shoppingCart", ["addMusic", "removeMusic"]),
    ...mapMutations("favorites", ["addFavorite", "removeFavorite"])
  }
};
</script>

<style lang="scss">
@import "@/styles/main.scss";
#wrapper {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px 0px;
  background-color: $backgroundColorItems;
  border-radius: $defaultBorderRadius;
  box-shadow: 2.5px 2.5px 2.5px 0px rgba(0, 0, 0, 0.75);
}
#options-wrapper {
  width: 25%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

#image-wrapper {
  width: 10%;
  margin: 10px;
  justify-content: center;
  align-items: center;
  > img {
    border-radius: 40px;
    height: 80px;
  }
}
#main-information-wrapper {
  width: 60%;
  margin-left: 20px;
  justify-content: start;
}
#price-information-wrapper {
  width: 15%;
  line-height: 200px;
  vertical-align: middle;
  justify-content: center;
  align-items: center;
  > h5 {
    margin-bottom: 0px !important;
  }
}
</style>
