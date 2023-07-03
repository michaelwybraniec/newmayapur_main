<template>
  <h1 class="text-center mx-auto text-4xl md:text-5xl font-bold my-24">
    Rent Our Space
  </h1>
  <div class="max-md:mx-4">
    <img
      src="/img/castle.jpg"
      class="md:max-w-[750px] mt-20 mb-4 sm:mx-auto rounded-xl"
    />
  </div>
  <UISectionParagraphWrapperTwo
    :section0="content.data.attributes.SectionWrapperTwo.Section0"
    :section1="content.data.attributes.SectionWrapperTwo.Section1"
    :bg-color="content.data.attributes.SectionWrapperTwo.BgColor"
  />
</template>

<script setup>
const { find } = useStrapi();

const content = await find("renting-page", {
  populate: {
    SectionWrapperTwo: {
      populate: "*",
    },
  },
});

useHead({
  title: "New Mayapur - Renting Venue",
});
</script>
