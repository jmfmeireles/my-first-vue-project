<template>
  <div id="shopping-cart-item">
    <div class="item-property">{{ music.trackName }}</div>
    <div class="item-property">{{ music.trackPrice }} {{ music.currency }}</div>
    <b-button variant="link" v-on:click="removeMusic(music.trackId)">
      <cart-icon-remove variant="danger" font-scale="2"></cart-icon-remove>
    </b-button>
  </div>
</template>

<script>
import { BIconCartX } from "bootstrap-vue";
import { mapMutations } from "vuex";

export default {
  name: "MusicToOrder",
  components: {
    "cart-icon-remove": BIconCartX
  },
  props: ["music"],
  methods: {
    ...mapMutations("shoppingCart", ["removeMusic"])
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/main.scss";
#shopping-cart-item {
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: auto;
  padding: 0px 10px;
  background-color: transparent;
  text-align: center;
  border-bottom: solid 1px #ffffff;
}

.item-property {
  @extend h4;
  color: black;
  text-align: center;
  background-color: transparent;
  width: 40%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
</style>
