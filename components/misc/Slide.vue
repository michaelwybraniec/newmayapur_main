<template>
  <div
    class="grid gap-20 max-lg:mx-4 lg:grid-cols-2 lg:px-20 lg:py-20 2xl:py-44 py-12 2xl:px-28"
  >
    <div class="flex justify-center flex-col h-full">
      <h2 class="max-xl:text-4xl text-5xl font-bold">{{ props.title }}</h2>
      <div
        class="max-sm:text-lg text-xl mt-4 leading-9 whitespace-normal"
        v-html="markdown"
      ></div>
      <NuxtLink
        class="btn w-44 max-sm:mt-6 mt-10 border-0 btn-primary"
        :to="props.link"
      >
        Find Out More
      </NuxtLink>
    </div>
    <div class="flex justify-center items-center">
      <img
        :src="props.img"
        class="lg:max-w-sm xl:max-w-lg 2xl:max-w-2xl rounded-2xl shadow-xl mx-auto"
      />
    </div>
  </div>
</template>

<script setup>
import { marked } from "marked";

const props = defineProps(["title", "text", "img", "link"]);
const markdown = computed(() => marked.parse(props.text));
</script>
