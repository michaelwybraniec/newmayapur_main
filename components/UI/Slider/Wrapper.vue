<template>
  <div class="glide">
    <div class="glide__track" data-glide-el="track">
      <ul class="glide__slides">
        <slot></slot>
      </ul>
      <div data-glide-el="controls" class="max-lg:hidden">
        <button
          class="glide__arrow glide__arrow--left absolute left-0 top-1/2 -translate-y-1/2 mx-4"
          data-glide-dir="<"
        >
          <Icon name="ion:arrow-back-circle-outline" size="40px" />
        </button>
        <button
          class="glide__arrow glide__arrow--right absolute right-0 top-1/2 -translate-y-1/2 mx-4"
          data-glide-dir=">"
        >
          <Icon name="ion:arrow-forward-circle-outline" size="40px" />
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
      autoplay: 5000,
    }).mount({ Autoplay });
  },
};
</script>

<style scoped>
@import "@glidejs/glide/dist/css/glide.core.min.css";
</style>
