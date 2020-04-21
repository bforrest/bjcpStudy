<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          {{ subcategory.name }}
        </h1>
        <h2 class="subtitle">
          Characteristics:
        </h2>
        <dl>
          <dt>Aroma</dt>
          <dd>{{ subcategory.aroma }}</dd>
          <dt>Appearance:</dt>
          <dd>{{ subcategory.appearance }}</dd>
          <dt>Flavor</dt>
          <dd>{{ subcategory.flavor }}</dd>
          <dt>Mouthfeel</dt>
          <dd>{{ subcategory.mouthfeel }}</dd>
          <dt>Impression</dt>
          <dd>{{ subcategory.impression }}</dd>
          <dt>Comments</dt>
          <dd>{{ subcategory.comments }}</dd>
          <dt>Ingredients</dt>
          <dd>{{ subcategory.ingredients }}</dd>
        </dl>

        <StatsView v-bind:stats="subcategory.stats" />
        <span v-for="item in tagList" :key="item" class="tag is-round is-small">
          {{ item }}
        </span>
      </div>
    </div>
  </section>
</template>

<script>
import StatsView from "./StatsView";

export default {
  props: {
    subcategory: {
      type: Object,
      default: () => ({}),
    },
  },
  components: {
    StatsView,
  },
  computed: {
    tagList: function() {
      return this.subcategory.tags.split(",");
      // var stuff = this.tags.split(",");
      // console.log("stuff");
      // console.log(stuff);
      // return stuff;
    },
  },
};
</script>
<style scoped>
div {
  text-align: left;
}
h4 {
  background-color: bisque;
}

dt {
  font-weight: bolder;
}
.tag {
  border: 1px solid black;
}
</style>
