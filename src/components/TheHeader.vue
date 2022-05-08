<template>
  <header class="header">
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
  height: 40px;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  &__container {
    display: flex;
    margin: 0 auto;
    height: 100%;
    max-width: 1440px;
    justify-content: space-between;
    align-items: center;
  }
}
.logo {
  text-decoration: none;
  cursor: pointer;
  color: black;
  font-size: 12px;
  &__title {
    text-transform: uppercase;
  }
}
</style>
