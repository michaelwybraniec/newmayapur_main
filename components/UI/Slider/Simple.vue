<template>
  <div class="mx-4">
    <div class="carousel max-w-[800px] mx-auto rounded-xl mt-20">
      <div
        :id="'slide' + index"
        class="carousel-item relative w-full"
        v-for="(image, index) in props.images"
      >
        <img
          :src="config.public.strapiBase + image.attributes.formats.medium.url"
          class="w-full"
        />
        <div
          class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
        >
          <a
            :href="'#slide' + (index - 1)"
            class="btn btn-circle"
            v-if="index !== 0"
            >❮</a
          >
          <a
            :href="'#slide' + (props.images.length - 1)"
            class="btn btn-circle"
            v-else
            >❮</a
          >
          <a
            :href="'#slide' + (index + 1)"
            class="btn btn-circle"
            v-if="index !== props.images.length - 1"
            >❯</a
          >
          <a :href="'#slide0'" class="btn btn-circle" v-else>❯</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["images"]);

const config = useRuntimeConfig();
</script>
