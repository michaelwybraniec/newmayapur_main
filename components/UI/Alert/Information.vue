<template>
  <div
    class="mb-12 border-2 flex gap-4 border-base-300 px-5 py-4 rounded-lg max-w-lg mx-4 md:mx-auto"
  >
    <Icon name="ion:information-circle-outline" size="72px" />
    <span>{{ props.text }}</span>
  </div>
</template>

<script setup>
const props = defineProps(["text"]);
</script>
