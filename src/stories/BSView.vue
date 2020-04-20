<template>
  <button @click="onClick">
    <slot>Default Button</slot>
  </button>
</template>

<script>
export default {
  name: "BSView",
  methods: {
    onClick() {
      this.$emit("click");
    },
  },
};
</script>
