<template>
  <b-pagination
    id="pagination-handler"
    align="right"
    :value="currentPage"
    :per-page="numberOfElementsPerPage"
    :total-rows="numberOfResultsToShow"
    pills="true"
    v-on:change="changePage"
    v-if="numberOfResultsToShow"
  />
</template>

<script>
import { BPagination } from "bootstrap-vue";
import { mapMutations, mapGetters } from "vuex";

export default {
  name: "SearchBar",
  components: {
    "b-pagination": BPagination
  },
  computed: mapGetters("catalog", [
    "currentPage",
    "numberOfResultsToShow",
    "numberOfElementsPerPage",
    "stringToSearch"
  ]),
  methods: {
    ...mapMutations("catalog", ["changeResultsToShow"]),
    changePage: function(pageNumber) {
      const currentStringToSearch = this.stringToSearch;
      this.changeResultsToShow({
        page: pageNumber,
        stringToSearch: currentStringToSearch
      });
    }
  }
};
</script>

<style lang="scss">
@import "@/styles/main.scss";
#pagination-handler {
  .page-item {
    border-color: $backgroundColorItems;
  }
  .page-item.active .page-link {
    background-color: $backgroundColorItems;
    border-color: $backgroundColorItems;
  }
  .page-link {
    color: black !important;
  }
  .disabled {
    opacity: 0.6 !important;
  }
}
</style>
