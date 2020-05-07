<template>
  <div>
    <h1>Style Categories</h1>
    <CategoryView
      v-for="category in categories"
      :key="category.id"
      :category="category"
    />
  </div>
</template>

<script>
import StyleService from "@/services/StyleService.js";
import CategoryView from "@/components/CategoryView.vue";

export default {
  data() {
    return {
      categories: [],
    };
  },
  components: {
    CategoryView,
  },
  created() {
    StyleService.getCategories()
      .then((response) => {
        this.categories = response.data; // <--- set the events data
      })
      .catch((error) => {
        console.log("There was an error:", error.response);
      });
  },
};
</script>
