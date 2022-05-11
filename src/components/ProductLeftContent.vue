<template>
  <div class="left-content">
    <img
      class="left-content__image"
      :src="productImgList[imageIndex].img"
      :alt="productImgList[imageIndex].name"
    />
    <ul class="left-content__list">
      <li
        class="left-content__list-item"
        v-for="item in productImgList"
        :key="item.id"
        @click="handleImageClick(item.id)"
      >
        <img
          :src="item.thumb"
          :alt="item.name"
          class="left-content__list-img"
          :class="imageIndex === item.id && ' left-content__list-img_active'"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import { productCurrentImages } from "@/data/ProductCurrent";

export default {
  name: "ProductLeftContent",
  data() {
    return {
      productImgList: productCurrentImages,
      imageIndex: 0,
    };
  },
  methods: {
    handleImageClick(id) {
      this.imageIndex = id;
    },
  },
};
</script>

<style scoped></style>
