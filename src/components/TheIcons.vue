<template>
  <i
    :style="{
      backgroundImage: `url(${icons[ico]})`,
      height: `${size}px`,
      width: `${size}px`,
    }"
    class="icons"
  ></i>
</template>

<script>
import PERSON from "@/assets/icons/person.svg";
import FAVORITE from "@/assets/icons/favorite.svg";
import BAG from "@/assets/icons/bag.svg";
import BURGER from "@/assets/icons/burger.svg";
import CHEVRON_RIGHT from "@/assets/icons/chevronRight.svg";
import CHEVRON_DOWN from "@/assets/icons/chevronDown.svg";
import CLOSES from "@/assets/icons/Closes.svg";
import CLOCK from "@/assets/icons/clock.svg";
import PAY from "@/assets/icons/pay.svg";
import LIKE from "@/assets/icons/like.svg";
import CLOSE from "@/assets/icons/close.svg";
import RESET from "@/assets/icons/reset.svg";

export default {
  name: "TheIcons",
  data() {
    return {
      icons: {
        person: PERSON,
        favorite: FAVORITE,
        bag: BAG,
        burger: BURGER,
        chevronRight: CHEVRON_RIGHT,
        chevronDown: CHEVRON_DOWN,
        closes: CLOSES,
        clock: CLOCK,
        pay: PAY,
        like: LIKE,
        close: CLOSE,
        reset: RESET,
      },
    };
  },
  props: {
    ico: String,
    size: Number,
  },
};
</script>
