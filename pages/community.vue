<template>
  <UISectionImgText
    :title="content.data.attributes.Header.Title"
    :description="content.data.attributes.Header.Text"
    :image="
      config.public.strapiBase +
      content.data.attributes.Header.Image.data.attributes.formats.medium.url
    "
    :bg-color="content.data.attributes.Header.BgColor"
    :image-place="content.data.attributes.Header.ImagePlace"
  />
  <UISectionParagraphWrapperThree
    :section0="content.data.attributes.Thirds.Section0"
    :section1="content.data.attributes.Thirds.Section1"
    :section2="content.data.attributes.Thirds.Section2"
    :bg-color="content.data.attributes.Thirds.BgColor"
  />
  <UISectionImgText
    :title="content.data.attributes.PlaceEveryone.Title"
    :description="content.data.attributes.PlaceEveryone.Text"
    :image="
      config.public.strapiBase +
      content.data.attributes.PlaceEveryone.Image.data.attributes.formats.small
        .url
    "
    :bg-color="content.data.attributes.PlaceEveryone.BgColor"
    :image-place="content.data.attributes.PlaceEveryone.ImagePlace"
  />
</template>

<script setup>
useHead({
  title: "New Mayapur - Community",
});

const { find } = useStrapi();

const content = await find("community-page", {
  populate: {
    Header: {
      populate: "*",
    },
    Thirds: {
      populate: "*",
    },
    PlaceEveryone: {
      populate: "*",
    },
  },
});

const config = useRuntimeConfig();
</script>
