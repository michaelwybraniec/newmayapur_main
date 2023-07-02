<template>
  <div class="pb-32 py-28 2xl:px-10">
    <div
      class="grid grid-cols-1 lg:grid-cols-2 px-4 lg:gap-x-10 2xl:px-20 items-start 2xl:gap-x-16"
    >
      <UISectionParagraphItem
        :data="props.section0"
        :bg-color="props.bgColor"
      />
      <UISectionParagraphItem
        :data="props.section1"
        :bg-color="props.bgColor"
      />
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["section0", "section1", "bgColor"]);
</script>
