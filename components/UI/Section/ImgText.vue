<template>
  <div :class="props.bgColor === 'Gray' ? 'bg-base-200' : ''">
    <div class="mx-auto py-28 2xl:px-16">
      <div
        class="grid grid-rows-1 2xl:grid-cols-2 px-4 lg:px-20 items-center gap-x-4"
      >
        <div
          class="order-2 md:px-24 2xl:px-0"
          :class="props.imagePlace === 'Left' ? '2xl:order-2' : '2xl:order-1'"
        >
          <h2 class="text-xl uppercase font-bold">{{ props.title }}</h2>
          <div class="pt-3 text-lg" v-html="markdown"></div>
        </div>
        <img
          class="order-1 max-w-xs md:max-w-lg mb-12 2xl:mb-0 mx-auto md:mb-24 rounded-lg"
          :src="props.image"
          :class="
            props.imagePlace === 'Left'
              ? '2xl:order-1 2xl:mr-auto 2xl:ml-0'
              : '2xl:order-2 2xl:ml-auto 2xl:mr-0'
          "
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { marked } from "marked";

const props = defineProps([
  "title",
  "description",
  "image",
  "bgColor",
  "imagePlace",
]);

const markdown = computed(() => marked.parse(props.description));
</script>
