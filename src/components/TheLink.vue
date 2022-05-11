<template>
  <a
    :href="href"
    class="link"
    :class="underlined && ' link_type_underlined'"
    :style="{ fontSize: `${font}px` }"
    >{{ name }}</a
  >
</template>

<script>
export default {
  name: "TheLink",
  props: {
    name: String,
    href: String,
    underlined: Boolean,
    font: Number,
  },
};
</script>

<style scoped></style>
