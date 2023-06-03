<template>
  <div class="carousel-item relative w-full">
    <img class="w-full object-cover" :src="props.img" />
  </div>
</template>

<script setup>
const props = defineProps(["img"]);
</script>
