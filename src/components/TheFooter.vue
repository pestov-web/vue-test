<template>
  <footer class="footer">
    <div class="footer__container">
      <InformationForBuyers />
      <AboutUs />
      <SubscribeNewsletter />
    </div>
  </footer>
</template>

<script>
import InformationForBuyers from "@/components/InformationForBuyers";
import AboutUs from "@/components/AboutUs";
import SubscribeNewsletter from "@/components/SubscribeNewsletter";
export default {
  name: "TheFooter",
  components: { SubscribeNewsletter, AboutUs, InformationForBuyers },
};
</script>
