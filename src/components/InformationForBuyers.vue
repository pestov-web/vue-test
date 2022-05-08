<template>
  <div class="information">
    <h3 class="information__title">покупателям</h3>
    <ul class="information__list">
      <li
        class="information__list-item"
        v-for="item in informationList"
        :key="item.id"
      >
        <a :href="item.url" class="information__list-item-link">{{
          item.name
        }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { informationForBuyers } from "@/data/Information";

export default {
  name: "InformationForBuyers",
  data() {
    return {
      informationList: informationForBuyers,
    };
  },
};
</script>
