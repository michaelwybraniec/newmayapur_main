<template>
  <div v-html="markdown"></div>
</template>

<script setup>
import { marked } from "marked";

const props = defineProps(["content"]);
const markdown = computed(() => marked.parse(props.content));
</script>
