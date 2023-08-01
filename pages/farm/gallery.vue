<template>
  <div class="bg-base-200">
    <div class="max-w-6xl md:mx-auto min-h-screen md:pt-24 pt-20 md:pb-40">
      <div class="flex items-center justify-center">
        <div class="p-6 bg-base-100 inline rounded-xl">
          <Icon :name="'ion:camera-outline'" size="34px" />
        </div>
      </div>
      <h2
        class="text-center mx-auto text-4xl md:text-5xl font-bold pt-12 pb-6 md:pb-8"
      >
        Farm's Gallery
      </h2>
      <p class="text-center text-lg pb-16 md:pb-24 max-md:mx-4">
        A life in nature is worth living. See it for yourself by browsing those
        beautiful pictures!
      </p>
      <lightgallery
        :settings="{ speed: 500, plugins: [lgThumbnail, lgZoom] }"
        class="pb-24 md:pb-40"
      >
        <a :href="image.src" v-for="image in images">
          <img alt="" :src="image.src" />
        </a>
      </lightgallery>
    </div>
  </div>
</template>

<script setup>
import Lightgallery from "lightgallery/vue/LightGalleryVue.umd.js";
import lgThumbnail from "lightgallery/plugins/thumbnail/lg-thumbnail.umd";
import lgZoom from "lightgallery/plugins/zoom/lg-zoom.umd";

const { find } = useStrapi();
const config = useRuntimeConfig();

let content = await find("farm-gallery-page", {
  populate: {
    Gallery: {
      populate: "*",
    },
  },
});

const images = computed(() => {
  let array = [];
  content.data.attributes.Gallery.data.forEach((item) => {
    array.push({
      src: config.public.strapiBase + item.attributes.formats.small.url,
      thumbnail:
        config.public.strapiBase + item.attributes.formats.thumbnail.url,
      w: item.attributes.formats.small.width,
      h: item.attributes.formats.small.height,
    });
  });
  return array;
});
</script>

<style>
@import url("https://cdn.jsdelivr.net/npm/lightgallery@2.0.0-beta.4/css/lightgallery.css");
@import url("https://cdn.jsdelivr.net/npm/lightgallery@2.0.0-beta.4/css/lg-zoom.css");
@import url("https://cdn.jsdelivr.net/npm/lightgallery@2.0.0-beta.4/css/lg-thumbnail.css");

.lightgallery-vue {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
}

.lightgallery-vue a {
  border-radius: 12px;
  overflow: hidden;
}

.lightgallery-vue a {
  width: 200px;
  height: 200px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightgallery-vue a img {
  max-width: 600px;
}

@media (max-width: 500px) {
  .lightgallery-vue a {
    width: 80px;
    height: 80px;
    border-radius: 8px;
  }

  .lightgallery-vue a img {
    max-width: 200px;
  }
}
</style>
