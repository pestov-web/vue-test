<template>
  <ul class="gallery">
    <li class="gallery__item" v-for="item in imagesList" :key="item.id">
      <img :src="item.img" :alt="item.name" class="gallery__item-image" />
    </li>
  </ul>
</template>

<script>
import { productGallery } from "@/data/ProductGallery";

export default {
  name: "ProductGallery",

  data() {
    return {
      imagesList: productGallery,
    };
  },
};
</script>
