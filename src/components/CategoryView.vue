<template>
  <section class="hero">
    <div class="hero-body">
      <h1 class="title" @click="showCategory">
        {{ category.name }}
      </h1>
      <div v-if="!hide">
        <h2 class="subtitle">Category {{ category.id }}:</h2>
        <p>{{ category.notes }}</p>
        <SubCategoryView
          v-for="item in category.subcategory"
          :key="item.name"
          :subcategory="item"
        />
      </div>
    </div>
  </section>
</template>
<script>
import SubCategoryView from "@/components/SubCategoryView.vue";

export default {
  components: {
    SubCategoryView,
  },
  props: {
    category: Object,
  },
  data: function() {
    return {
      hide: true,
    };
  },
  methods: {
    showCategory() {
      this.$emit("showCategory");
      this.hide = !this.hide;
    },
  },
};
</script>
<style scoped></style>
