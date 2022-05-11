<template>
  <section class="product">
    <div class="product__container">
      <ProductLeftContent />
      <ProductRightContent
        :name="productCurrent.name"
        :article="productCurrent.article"
        :reviews="productCurrent.reviews"
        :stars="productCurrent.stars"
        :price="productCurrent.price"
        :discount="productCurrent.discount"
        :sizes="productCurrent.sizes"
        :toggleModalMsg="toggleModalMsg"
        :setProduct="setProduct"
      />
    </div>
    <TheLink :name="'Посмотреть все стили'" :href="'#'" underlined />
    <ProductGallery />
  </section>
</template>

<script>
import ProductGallery from "@/components/ProductGallery";
import ProductLeftContent from "@/components/ProductLeftContent";
import ProductRightContent from "@/components/ProductRightContent";
import TheLink from "@/components/TheLink";
export default {
  name: "ProductCurrent",
  components: {
    TheLink,
    ProductRightContent,
    ProductLeftContent,
    ProductGallery,
  },
  props: ["productCurrent", "toggleModalMsg", "setProduct"],
};
</script>
