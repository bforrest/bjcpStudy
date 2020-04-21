<template>
  <section class="hero">
    <div class="hero-body">
      <h1 class="title">Category {{ category.name }}</h1>
      <h2 class="subtitle">
        {{ category.notes }}
      </h2>
      <SubCategoryView
        v-for="item in category.subcategory"
        :key="item.name"
        :subcategory="item"
      />
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
};
</script>
<style scoped>
.location {
  margin-bottom: 0;
}
.location > .icon {
  margin-left: 10px;
}
.event-header > .title {
  margin: 0;
}
.list-group {
  margin: 0;
  padding: 0;
  list-style: none;
}
.list-group > .list-item {
  padding: 1em 0;
  border-bottom: solid 1px #e5e5e5;
}
</style>
