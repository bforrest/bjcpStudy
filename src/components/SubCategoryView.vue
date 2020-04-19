<template>
  <div>
    <h4>{{ subcategory.name }}</h4>
    <p>
      <b>Aroma:</b>
      {{ subcategory.aroma }}
    </p>
    <p>
      <b>Appearance:</b>
      {{ subcategory.appearance }}
    </p>
    <p>{{ subcategory.flavor }}</p>
    <p>{{ subcategory.mouthfeel }}</p>
    <p>{{ subcategory.impression }}</p>
    <StatsView v-bind:stats="subcategory.stats" />
  </div>
</template>

<script>
import StatsView from "@/components/StatsView.vue";

export default {
  props: {
    subcategory: Object
  },
  components: {
    StatsView
  }
};
</script>
<style scoped>
div {
  text-align: left;
}
</style>
