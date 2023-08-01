<template>
  <div class="bg-base-200">
    <div
      class="max-w-6xl md:mx-auto min-h-screen md:pt-24 pt-20 pb-32 md:pb-40"
    >
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
      <vue-picture-swipe :items="images"></vue-picture-swipe>
    </div>
  </div>
</template>

<script setup>
import VuePictureSwipe from "vue3-picture-swipe";
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
.my-gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.gallery-thumbnail {
  border-radius: 12px;
  overflow: hidden;
}

@media (max-width: 500px) {
  .my-gallery figure {
    width: 80px;
    height: 80px;
  }

  figure img {
    max-width: 200px;
  }

  .gallery-thumbnail {
    border-radius: 8px;
    overflow: hidden;
  }
}
</style>
