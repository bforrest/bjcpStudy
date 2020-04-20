<template>
  <div>
    <h5>Stats</h5>
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
</template>

<script>
export default {
  name: "StatsView",
  props: {
    stats: Object,
  },
};
</script>
