<template>
  <div class="border-b-2 p-2 last:border-b-0 pb-8">
    <a :href="props.link">
      <div class="flex hover:translate-x-4 cursor-pointer transition">
        <h2 class="uppercase font-bold text-xl">
          {{ props.title }}
        </h2>
        <Icon
          name="ion:arrow-forward-circle-outline"
          size="25px"
          class="mt-0.5 ml-2 cursor-pointer"
        ></Icon>
      </div>
    </a>
    <UtilitiesMarkdown :content="props.description" />
  </div>
</template>

<script setup>
const props = defineProps(["title", "description", "link"]);
</script>
