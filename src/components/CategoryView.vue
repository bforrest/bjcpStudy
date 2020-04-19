<template>
  <div>
    <h2>Category {{ category.name }}</h2>
    <p>{{ category.notes }}</p>
    <SubCategoryView v-for="item in category.subcategory" :key="item.name" :subcategory="item" />
  </div>
</template>
<script>
import SubCategoryView from "@/components/SubCategoryView.vue";

export default {
  components: {
    SubCategoryView
  },
  props: {
    category: Object
  }
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