<template>
  <div
    class="grid gap-20 max-lg:mx-4 lg:grid-cols-2 lg:px-20 lg:py-20 2xl:py-44 py-12 2xl:px-28"
  >
    <div class="flex justify-center flex-col h-full">
      <div class="mb-8 bg-white w-[4.9rem] p-4 rounded-lg">
        <Icon :name="props.icon" size="46px" />
      </div>
      <h2 class="max-xl:text-4xl text-5xl font-bold">{{ props.title }}</h2>
      <p class="text-xl mt-4 leading-9" v-html="props.text"></p>
      <button
        class="btn w-44 mt-10 border-0"
        :class="props.btnBg + ' hover:' + props.btnBgHover"
      >
        Find Out More
      </button>
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
const props = defineProps([
  "title",
  "text",
  "btn-bg",
  "btn-bg-hover",
  "img",
  "icon",
]);
</script>
