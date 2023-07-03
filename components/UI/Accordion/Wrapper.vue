<template>
  <div class="pb-32 py-28 lg:px-10 lg:w-[1000px] mx-auto">
    <h2 class="text-2xl font-bold text-center mb-12">{{ props.title }}</h2>
    <div
      v-if="props.images"
      class="flex flex-col md:flex-row gap-4 mx-4 md:mx-0 items-center justify-center mb-16"
    >
      <img
        class="md:h-[245px] rounded-xl"
        :src="config.public.strapiBase + image.attributes.formats.small.url"
        v-for="image in props.images"
      />
    </div>
    <slot></slot>
  </div>
</template>

<script setup>
const props = defineProps(["images", "title"]);

const config = useRuntimeConfig();
</script>
