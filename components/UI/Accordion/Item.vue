<template>
  <div
    tabindex="0"
    class="collapse collapse-plus border mt-4 border-base-300 bg-base-100 rounded-box"
  >
    <input type="checkbox" />
    <div class="collapse-title text-xl font-medium">{{ props.title }}</div>
    <div class="collapse-content" v-html="markdown"></div>
  </div>
</template>

<script setup>
import { marked } from "marked";

const props = defineProps(["title", "text"]);
const markdown = computed(() => marked.parse(props.text));
</script>
