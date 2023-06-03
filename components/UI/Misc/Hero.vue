<template>
  <div class="hero min-h-screen" style="background-image: url(/img/forest.jpg)">
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="hero-content text-center text-neutral-content">
      <div class="max-w-lg">
        <h1 class="mb-5 text-5xl font-bold">{{ props.title }}</h1>
        <div class="mb-5 md:text-lg">
          <UtilitiesMarkdown :content="props.description" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["title", "description"]);
</script>
