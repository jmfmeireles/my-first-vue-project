<template>
  <div>
    <b-button variant="link" id="user-icon">
      <user-icon variant="secondary" font-scale="2"></user-icon>
    </b-button>
    <b-popover
      id="popover-user"
      target="user-icon"
      triggers="click"
      placement="bottom"
      boundary="window"
    >
      <div id="user-info" v-if="userInfo !== null">
        <div id="user-logo">
          <img
            id="user-thumbnail"
            v-bind:src="userInfo.photoURL"
            alt="user"
            v-if="userInfo.photoURL"
          />
          <user-icon
            variant="secondary"
            font-scale="5"
            v-if="!userInfo.photoURL"
          />
        </div>
        <div id="user-name-and-email">
          <h3>{{ userInfo.displayName }}</h3>
          <h5>{{ userInfo.email }}</h5>
        </div>
      </div>
      <b-button id="logout-button" v-on:click="logout">
        <power-icon font-scale="2" />
        {{ $t("logout") }}
      </b-button>
    </b-popover>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { BIconPerson, BIconPower } from "bootstrap-vue";

export default {
  name: "UserPopover",
  components: {
    "user-icon": BIconPerson,
    "power-icon": BIconPower
  },
  computed: mapGetters("user", ["userInfo"]),
  methods: {
    ...mapActions("user", ["logout"])
  }
};
</script>

<style lang="scss">
@import "@/styles/main.scss";

#popover-user {
  min-width: 300px;
  border-radius: $defaultBorderRadius;
}

#user-info {
  display: flex;
  flex-direction: row;
}

#user-logo {
  width: 30%;
}
#user-name-and-email {
  width: 70%;
  margin: auto;
}

#user-thumbnail {
  border-radius: 30px;
  height: 60px;
}

#logout-button {
  margin-top: 10px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>
