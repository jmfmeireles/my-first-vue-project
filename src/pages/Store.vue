<template>
  <div id="store-wrapper" v-if="isAuthenticated">
    <div id="catalog-wrapper">
      <section-title :title="$t('catalog')" />
      <seach-bar />
      <list-of-songs />
      <pagination />
    </div>
    <div id="cart-wrapper">
      <section-title :title="$t('shoppingCart')" />
      <cart />
    </div>
  </div>
</template>

<script>
import ListOfSongs from "../components/catalog/ListOfSongs.vue";
import SearchBar from "../components/catalog/SearchBar.vue";
import Pagination from "../components/catalog/Pagination.vue";
import SectionTitle from "../components/common/SectionTitle.vue";
import ShoppingCart from "../components/shopping-cart";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Store",
  components: {
    "list-of-songs": ListOfSongs,
    "section-title": SectionTitle,
    "seach-bar": SearchBar,
    pagination: Pagination,
    cart: ShoppingCart
  },
  computed: mapGetters("user", ["isAuthenticated", "userInfo"]),
  methods: {
    ...mapActions("catalog", ["getMusics"])
  },
  beforeMount() {
    if (!this.isAuthenticated) {
      this.$router.replace("/");
    }
  },
  mounted() {
    window.onpopstate = () => {
      this.$router.replace("/store");
    };
  },
  watch: {
    userInfo(value) {
      if (value === null || value === undefined) {
        this.$router.replace("/");
      }
    }
  },
  created() {
    this.getMusics({});
  }
};
</script>

<style lang="scss">
@import "@/styles/main.scss";

#store-wrapper {
  width: 100%;
  height: 100%;
  margin: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

#catalog-wrapper {
  width: 70%;
  margin-right: 10px;
}

#cart-wrapper {
  width: 30%;
  margin-left: 10px;
  margin-top: 40px;
}
</style>
