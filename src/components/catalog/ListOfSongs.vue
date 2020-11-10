<template>
  <div>
    <h4 v-if="isLoading" class="message">{{ $t("messages.loading") }}...</h4>
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
import { mapGetters } from "vuex";

export default {
  name: "ListOfSongs",
  components: {
    "song-item": SongItem
  },
  computed: mapGetters("catalog", ["musicsToDisplay", "isLoading"])
};
</script>
