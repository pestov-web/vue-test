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
