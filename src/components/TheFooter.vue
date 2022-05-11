<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__links-container">
        <FooterLinksList :itemList="informationList" title="покупателям" />
        <FooterLinksList :itemList="aboutList" title="о нас" />
      </div>
      <div class="footer__form"><SubscribeNewsletter /></div>
    </div>
  </footer>
</template>

<script>
import SubscribeNewsletter from "@/components/SubscribeNewsletter";
import FooterLinksList from "@/components/FooterLinksList";
export default {
  name: "TheFooter",
  components: { FooterLinksList, SubscribeNewsletter },
  props: ["aboutList", "informationList"],
};
</script>
