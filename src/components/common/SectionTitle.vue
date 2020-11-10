<template>
  <h1>{{ title }}</h1>
</template>

<script>
export default {
  name: "SectionTitle",
  props: ["title"]
};
</script>

<style lang="scss" scoped>
h1 {
  width: 100%;
  margin: 10px 0px;
  justify-content: start;
}
</style>
