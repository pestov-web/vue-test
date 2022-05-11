<template>
  <TheHeader :toggleModalMenu="toggleModalMenu" />
  <ProductCurrent
    :productCurrent="productCurrent"
    :toggleModalMsg="toggleModalMsg"
    :setProduct="setProduct"
  />
  <TheFooter :aboutList="aboutUs" :informationList="informationForBuyers" />
  <ModalMenu v-if="showModalMenu" @close="toggleModalMenu" />
  <ModalMessage
    v-if="showModalMsg"
    @close="toggleModalMsg"
    :msgTitle="product.msgTitle"
    :productName="product.name"
    :productQuantity="product.quantity"
    :productPrice="product.price"
  />
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter";
import ProductCurrent from "@/components/ProductCurrent";
import { productCurrent } from "@/data/ProductCurrent";
import { aboutUs } from "@/data/AboutUs";
import { informationForBuyers } from "@/data/Information";
import ModalMenu from "@/components/ModalMenu";
import ModalMessage from "@/components/ModalMessage";

export default {
  name: "App",
  components: {
    ModalMessage,
    ModalMenu,
    ProductCurrent,
    TheFooter,
    TheHeader,
  },
  data() {
    return {
      productCurrent,
      aboutUs,
      informationForBuyers,
      showModalMenu: false,
      showModalMsg: false,
      product: {},
    };
  },
  methods: {
    toggleModalMenu() {
      this.showModalMenu = !this.showModalMenu;
    },
    toggleModalMsg() {
      this.showModalMsg = !this.showModalMsg;
    },
    setProduct(title, name, quantity, price) {
      this.product.msgTitle = title;
      this.product.name = name;
      this.product.quantity = quantity;
      this.product.price = price;
      console.log(this.product);
    },
  },
};
</script>
