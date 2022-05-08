<template>
  <TheHeader msg="Welcome to Your Vue.js App" />
  <ProductCurrent />
  <TheFooter />
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter";
import ProductCurrent from "@/components/ProductCurrent";

export default {
  name: "App",
  components: {
    ProductCurrent,
    TheFooter,
    TheHeader,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0;
}
</style>
