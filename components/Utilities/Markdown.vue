<template>
  <div v-html="markdown" class="markdown"></div>
</template>

<script setup>
import { marked } from "marked";

const props = defineProps(["content"]);
const markdown = computed(() => marked.parse(props.content));
</script>

<style lang="postcss">
.markdown h2 {
  @apply font-bold text-xl mt-6 -mb-2;
}

.markdown p {
  @apply mt-4;
}

.markdown {
  @apply text-lg;
}

.markdown ul {
  @apply list-disc mt-4 ml-3;
}

.markdown a {
  @apply underline text-blue-600 hover:text-blue-800 visited:text-purple-600;
}

.markdown blockquote {
  @apply bg-base-200 px-4 md:px-8 pb-6 rounded-lg mt-4 pt-2;
}

.markdown img {
  @apply sm:max-w-xl rounded-xl;
}
</style>
