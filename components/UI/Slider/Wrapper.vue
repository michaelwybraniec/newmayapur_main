<template>
  <div class="glide carousel rounded-2xl mx-auto" :style="style">
    <div class="glide__track" data-glide-el="track">
      <ul class="glide__slides">
        <slot></slot>
      </ul>
      <div data-glide-el="controls">
        <button
          class="glide__arrow glide__arrow--left absolute left-0 top-1/2 -translate-y-1/2 mx-4"
          data-glide-dir="<"
        >
          <Icon name="ion:arrow-back" size="40px" class="text-white" />
        </button>
        <button
          class="glide__arrow glide__arrow--right absolute right-0 top-1/2 -translate-y-1/2 mx-4"
          data-glide-dir=">"
        >
          <Icon name="ion:arrow-forward" size="40px" class="text-white" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Glide from "@glidejs/glide";
import { Autoplay } from "@glidejs/glide/dist/glide.modular.esm";

export default {
  mounted() {
    let glide = new Glide(".glide", {
      autoplay: 4000,
    }).mount({ Autoplay });
  },
};
</script>

<script setup>
const props = defineProps(["width"]);
const style = computed(() => "width: " + props.width);
</script>

<style scoped>
@import "@glidejs/glide/dist/css/glide.core.min.css";
</style>
