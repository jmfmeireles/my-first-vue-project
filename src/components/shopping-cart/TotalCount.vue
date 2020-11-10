<template>
  <div id="total-count-wrapper">
    <div class="row-wrapper">
      <div class="property-name">#</div>
      <div class="property-name">{{ $t("total") }} (USD)</div>
    </div>
    <div class="row-wrapper">
      <div class="property-value">{{ totalInformation.count }}</div>
      <div class="property-value">{{ totalInformation.amountToPay }}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "TotalCount",
  props: ["music"],
  computed: {
    ...mapGetters("shoppingCart", ["totalInformation"])
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/main.scss";
#total-count-wrapper {
  background-color: #dddddd;
  padding-top: 10px;
  border-radius: 10px;
}

.row-wrapper {
  width: 100%;
  display: flex;
  flex-direction: row;
}

.property-name {
  @extend h4;
  color: black;
  font-weight: bold;
  padding: 0px 10px;
  text-align: center;
  width: 40%;
}

.property-value {
  @extend h4;
  width: 40%;
  text-align: center;
  padding: 0px 10px;
  color: black;
}
</style>
