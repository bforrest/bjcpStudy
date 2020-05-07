<template>
  <div v-if="stats">
    <font-awesome-icon icon="info-circle"></font-awesome-icon>
    <button @click="toggleStats">Stats</button>
    <div v-if="!hideStats">
      <p>
        <b>IBU</b>
        {{ stats.ibu.low }} - {{ stats.ibu.high }}
      </p>
      <p>
        <b>OG</b>
        {{ stats.og.low }} - {{ stats.og.high }}
      </p>
      <p>
        <b>FG</b>
        {{ stats.fg.low }} - {{ stats.fg.high }}
      </p>
      <p>
        <b>SRM</b>
        {{ stats.srm.low }} - {{ stats.srm.high }}
      </p>
      <p>
        <b>ABV</b>
        {{ stats.abv.low }} - {{ stats.abv.high }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    stats: Object,
  },
  data: function() {
    return {
      hideStats: true,
    };
  },
  methods: {
    toggleStats() {
      this.$emit("toggleStats");
      this.hideStats = !this.hideStats;
    },
  },
};
</script>
<style scoped>
h5 {
  font-weight: bold;
}
</style>
