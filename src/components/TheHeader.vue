<template>
  <header ref="header" class="header">
    <div class="header__container">
      <a href="#" class="logo">
        <h1 class="logo__title">logo</h1>
      </a>
      <NavigationButtons />
    </div>
  </header>
</template>

<script>
import NavigationButtons from "@/components/NavigationButtons";
export default {
  name: "TheHeader",
  components: { NavigationButtons },
  props: {
    msg: String,
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {},
  },
  unmounted() {
    window.removeEventListener("scroll", this.onScroll);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
