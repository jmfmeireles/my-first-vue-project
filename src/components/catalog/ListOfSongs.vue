<template>
  <div>
    <busy-indicator v-if="isLoading" />
    <h4
      v-if="musicsToDisplay && !musicsToDisplay.length && !isLoading"
      class="message"
    >
      {{ $t("messages.noMusics") }}
    </h4>
    <song-item
      v-for="music in musicsToDisplay"
      v-bind:key="music.trackId"
      v-bind:music="music"
    />
  </div>
</template>

<script>
import SongItem from "./SongItem.vue";
import BusyIndicator from "../common/BusyIndicator.vue";
import { mapGetters } from "vuex";

export default {
  name: "ListOfSongs",
  components: {
    "song-item": SongItem,
    "busy-indicator": BusyIndicator
  },
  computed: mapGetters("catalog", ["musicsToDisplay", "isLoading"])
};
</script>
