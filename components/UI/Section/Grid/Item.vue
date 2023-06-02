<template>
  <div class="border-b-2 p-2 last:border-b-0 pb-8">
    <div class="flex hover:translate-x-4 cursor-pointer transition-all">
      <h2 class="uppercase mb-1.5 font-bold text-xl">
        {{ props.title }}
      </h2>
      <Icon
        name="ion:arrow-forward-circle-outline"
        size="25px"
        class="mt-0.5 ml-2 cursor-pointer"
      ></Icon>
    </div>
    <div v-html="markdown" class="md:text-lg markdown"></div>
  </div>
</template>

<script setup>
import { marked } from "marked";

const props = defineProps(["title", "description"]);
const markdown = computed(() => marked.parse(props.description));
</script>

<style lang="postcss">
.markdown a {
  @apply underline text-blue-600 hover:text-blue-800 visited:text-purple-600;
}
</style>
