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
