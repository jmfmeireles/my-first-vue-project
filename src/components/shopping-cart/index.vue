<template>
  <div>
    <h4 v-if="!addedMusics.length" class="message">
      {{ $t("messages.noSongsOnCart") }}
    </h4>
    <div id="table-wrapper" v-if="addedMusics.length">
      <div id="table-header">
        <div class="table-column">{{ $t("musicName") }}</div>
        <div class="table-column">{{ $t("musicPrice") }}</div>
      </div>
      <div id="table-body">
        <music-to-order
          v-for="music in addedMusics"
          v-bind:key="music.trackId"
          v-bind:music="music"
        >
          {{ music.trackName }}
        </music-to-order>
      </div>
      <total-count />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import MusicToOrder from "./MusicToOrder";
import TotalCount from "./TotalCount";

export default {
  name: "ShoppingCart",
  components: {
    "music-to-order": MusicToOrder,
    "total-count": TotalCount
  },
  computed: mapGetters("shoppingCart", ["addedMusics"])
};
</script>

<style lang="scss" scoped>
@import "@/styles/main.scss";
#table-wrapper {
  background-color: $backgroundColorItems;
  margin-right: 20px;
  border-radius: 10px;
}

#table-body {
  max-height: 60vh;
  overflow-y: auto;
}

#table-header {
  width: 100%;
  padding: 10px;
  text-align: center;
  font-weight: bold;
  display: flex;
  flex-basis: row;
  color: white;
  border-bottom: solid 2px rgba(0, 0, 0, 0.75);
}

.table-column {
  @extend h4;
  color: black;
  width: 40%;
}
</style>
