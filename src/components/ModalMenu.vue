<template>
  <transition name="modal-menu">
    <div class="modal-menu__overlay" @click.self="$emit('close')">
      <div class="modal-menu__container">
        <button class="modal-menu__button" @click="$emit('close')">
          <TheIcons :ico="'close'" :size="25" />
        </button>
        <ul class="modal-menu__list">
          <li
            v-for="(item, index) in modalMenu"
            :key="index"
            class="modal-menu__list-item"
          >
            <TheLink :name="item.name" :href="item.url" :font="12" />
          </li>
        </ul>
      </div>
    </div>
  </transition>
</template>

<script>
import TheIcons from "@/components/TheIcons";
import { modalMenu } from "@/data/ModalMenu";
import TheLink from "@/components/TheLink";
export default {
  name: "ModalMenu",
  components: { TheLink, TheIcons },
  data() {
    return {
      modalMenu,
    };
  },
};
</script>
