<template>
  <ul class="nav-buttons">
    <li v-for="item in NavButtons" :key="item.id">
      <button class="nav-buttons__button" :aria-label="item.name">
        <i
          class="nav-buttons__ico"
          :style="{ background: `no-repeat center url(${item.icon})` }"
        ></i>
      </button>
    </li>
  </ul>
</template>

<script>
import { NavButtons } from "@/data/NavButtons";
export default {
  name: "NavigationButtons",
  data() {
    return {
      NavButtons: NavButtons,
    };
  },
};
</script>

<style scoped lang="scss">
.nav-buttons {
  display: flex;
  gap: 10px;
  justify-content: center;

  &__button {
    border: none;
    height: 30px;
    width: 30px;

    border-radius: 50%;
    cursor: pointer;
    transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    &:hover {
      background-color: rgba(0, 0, 0, 0.3);
    }
  }
  &__ico {
    display: block;
    margin: 0;
    height: 20px;
    width: 20px;
  }
}
</style>
