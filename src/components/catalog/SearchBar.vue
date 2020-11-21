<template>
  <b-input
    type="search"
    v-on:update="changeStringToSearch"
    :placeholder="$t('placeholders.searchMusics')"
  />
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  name: "SearchBar",
  computed: mapGetters("catalog", ["stringToSearch", "currentPage"]),
  methods: {
    ...mapMutations("catalog", ["changeResultsToShow"]),
    changeStringToSearch: function(stringToSearch) {
      const currentPage = this.currentPage;
      this.changeResultsToShow({
        page: currentPage,
        stringToSearch: stringToSearch
      });
    }
  }
};
</script>
