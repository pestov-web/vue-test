<template>
  <header ref="header" class="header" :class="{ header_hidden: !showHeader }">
    <div class="header__container">
      <a href="#" class="logo">
        <h1 class="logo__title">logo</h1>
      </a>
      <NavigationButtons :toggleModalMenu="toggleModalMenu" />
    </div>
  </header>
</template>

<script>
import NavigationButtons from "@/components/NavigationButtons";
export default {
  name: "TheHeader",
  components: { NavigationButtons },
  data: () => ({
    showHeader: true,
    lastScrollPosition: 0,
    scrollOffset: 40,
  }),
  props: {
    toggleModalMenu: Function,
  },
  mounted() {
    this.lastScrollPosition = window.scrollY;
    window.addEventListener("scroll", this.onScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      if (window.scrollY < 0) {
        return;
      }
      if (
        Math.abs(window.scrollY - this.lastScrollPosition) < this.scrollOffset
      ) {
        return;
      }
      this.showHeader = window.scrollY < this.lastScrollPosition;
      this.lastScrollPosition = window.scrollY;
    },
  },
};
</script>
