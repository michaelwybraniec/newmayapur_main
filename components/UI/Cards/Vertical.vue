<template>
  <div class="bg-base-200 py-28 lg:px-16" id="volunteer">
    <div
      class="2xl:w-[1200px] shadow-lg flex flex-col-reverse xl:flex-row items-center gap-8 lg:gap-20 xl:mx-auto bg-base-100 rounded-2xl p-4 md:p-6 mx-4"
    >
      <div>
        <h2 class="text-xl uppercase font-bold">{{ title }}</h2>
        <p class="pt-3 text-lg">
          {{ description }}
        </p>
        <a :href="link1">
          <button class="btn btn-primary btn-outline mt-6">{{ btn1 }}</button>
        </a>
        <a :href="link2">
          <button class="btn btn-primary btn-outline ml-2 mt-6">
            {{ btn2 }}
          </button>
        </a>
      </div>
      <img class="md:max-w-lg rounded-xl" :src="img" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps([
  "title",
  "description",
  "btn1",
  "btn2",
  "link1",
  "link2",
  "img",
]);
</script>
