<template>
  <div
    class="py-36 2xl:px-10"
    :class="props.bgColor === 'Gray' ? 'bg-base-200' : ''"
  >
    <div
      class="grid grid-cols-1 px-4 lg:gap-x-10 2xl:px-20 items-start 2xl:gap-x-16 lg:grid-cols-3"
    >
      <UISectionParagraphItem
        :data="props.section0"
        :bg-color="props.bgColor"
      />
      <UISectionParagraphItem
        :data="props.section1"
        :bg-color="props.bgColor"
      />
      <UISectionParagraphItem
        :data="props.section2"
        :bg-color="props.bgColor"
      />
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["section0", "section1", "section2", "bgColor"]);
</script>
