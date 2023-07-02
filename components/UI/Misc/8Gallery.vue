<template>
  <div class="py-32 pb-36 2xl:px-10">
    <div
      class="grid grid-cols-1 lg:grid-cols-4 px-4 2xl:px-20 items-start gap-16"
    >
      <img
        :src="config.public.strapiBase + image.attributes.formats.small.url"
        class="rounded-xl mx-auto"
        v-for="image in props.images"
      />
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["images"]);
const config = useRuntimeConfig();
</script>
