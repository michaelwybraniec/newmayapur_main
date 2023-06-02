<template>
  <div
    class="mx-auto py-28"
    :class="props.bgColor === 'Gray' ? 'bg-base-200' : ''"
  >
    <h2 class="text-3xl font-bold text-center -mt-2 mb-6">{{ props.title }}</h2>
    <p class="max-w-2xl pt-2 pb-2 mx-4 sm:mx-auto text-center text-lg">
      {{ props.description }}
    </p>
    <div class="mt-12 mx-4 xl:w-1/2 2xl:w-1/3 lg:mx-auto">
      <img class="mb-12 mx-auto rounded-lg shadow-lg" :src="props.image" />
      <NuxtLink
        :to="props.buttonLink"
        class="btn btn-secondary w-44 mx-auto block pt-4"
        >{{ props.buttonText }}</NuxtLink
      >
    </div>
  </div>
</template>

<script setup>
const props = defineProps([
  "title",
  "description",
  "image",
  "buttonLink",
  "buttonText",
  "bgColor",
]);
</script>
