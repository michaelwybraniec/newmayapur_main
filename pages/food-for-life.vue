<template>
  <UISliderSimple :images="content.data.attributes.Slider.data" class="mb-32" />
  <UISectionImgText
    :title="content.data.attributes.ImgTextSection.Title"
    :description="content.data.attributes.ImgTextSection.Text"
    :image="
      config.public.strapiBase +
      content.data.attributes.ImgTextSection.Image.data.attributes.formats.small
        .url
    "
    :bg-color="content.data.attributes.ImgTextSection.BgColor"
    :image-place="content.data.attributes.ImgTextSection.ImagePlace"
  />
  <UIMiscBottomFFLPage v-if="content.data.attributes.ShowQuoteAndSocials" />
</template>

<script setup>
const { find } = useStrapi();

const content = await find("food-for-life-page", {
  populate: {
    Slider: {
      populate: "*",
    },
    ImgTextSection: {
      populate: "*",
    },
  },
});

const config = useRuntimeConfig();

useHead({
  title: "New Mayapur - Food For Life",
});
</script>
