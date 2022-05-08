<template>
  <section class="product">
    <div class="product__container">
      <div class="product__images">
        <img
          class="product__images-image"
          :src="productImgList[imageIndex].img"
          :alt="productImgList[imageIndex].name"
        />
        <ul class="product__images-list">
          <li
            class="product__images-list-item"
            v-for="item in productImgList"
            :key="item.id"
            @click="handleImageClick(item.id)"
          >
            <img
              :src="item.thumb"
              :alt="item.name"
              :class="
                imageIndex === item.id
                  ? 'product__images-list-img product__images-list-img_active'
                  : 'product__images-list-img'
              "
            />
          </li>
        </ul>
      </div>
      <div class="product__content">
        <h2 class="product__title">Пижама для девочек</h2>
        <p class="product__subtitle">Арт. 02765/46</p>
        <div class="product__reviews">
          <span class="product__reviews-title">Отзывы</span>
          <div class="product__reviews-stars">*****</div>
          <a href="#" class="product__reviews-link">14 отзывов ></a>
        </div>
      </div>
    </div>
    <ProductGallery />
  </section>
</template>

<script>
import { productCurrentImages } from "@/data/ProductCurrent";
import ProductGallery from "@/components/ProductGallery";
export default {
  name: "ProductCurrent",
  components: { ProductGallery },
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
