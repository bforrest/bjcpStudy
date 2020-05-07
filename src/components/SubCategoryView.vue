<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container" @click="toggleSubCategory">
        <h1 class="title">
          {{ subcategory.name }}
        </h1>
        <h2 class="subtitle">
          Characteristics:
        </h2>
        <div v-if="!showSubCategory">
          <dl v-for="item in terms" :key="item">
            <dt>{{ item }}</dt>
            <dd>{{ val(item) }}</dd>
          </dl>
        </div>
      </div>
      <StatsView v-bind:stats="subcategory.stats" />
      <span v-for="item in tagList" :key="item" class="tag is-round is-small">
        {{ item }}
      </span>
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
    },
    //displayTerms: function() {},
  },
  data: function() {
    return {
      showSubCategory: true,
      terms: [
        "aroma",
        "appearance",
        "flavor",
        "Mouthfeel",
        "impression",
        "comments",
        "history",
        "ingredients",
        "comparison",
        "examples",
      ],
    };
  },
  methods: {
    toggleSubCategory() {
      this.$emit("click");
      this.showSubCategory = !this.showSubCategory;
    },
    val(item) {
      var query = "this.subcategory['" + item + "']";
      var answer = eval(query);
      console.log("answer:" + answer);
      return answer;
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
  margin: 1%;
  text-transform: capitalize;
}
dd {
  margin: 1%;
}
.tag {
  border: 1px solid black;
}
</style>
