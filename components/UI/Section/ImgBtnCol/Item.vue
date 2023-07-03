<template>
  <div class="order-2 lg:order-1 md:px-24 lg:px-0 mb-24 lg:mb-0">
    <img :src="props.img" class="rounded-xl max-w-sm" alt="" />

    <h2 class="text-xl mt-12 uppercase font-bold">{{ props.title }}</h2>
    <p class="pt-3 text-lg">
      {{ props.description }}
    </p>
    <a :href="props.btnLink">
      <button class="btn btn-outline btn-primary mt-5">
        {{ props.btnText }}
      </button>
    </a>
  </div>
</template>

<script setup>
const props = defineProps([
  "title",
  "description",
  "btnText",
  "btnLink",
  "img",
]);
</script>
