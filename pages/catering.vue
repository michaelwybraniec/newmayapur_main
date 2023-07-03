<template>
  <UISliderSimple :images="content.data.attributes.Slider.data" />
  <UISectionParagraphWrapperTwo
    :section0="content.data.attributes.SectionWrapperTwo.Section0"
    :section1="content.data.attributes.SectionWrapperTwo.Section1"
    :bg-color="content.data.attributes.SectionWrapperTwo.BgColor"
  />
  <UIMiscTheMenu
    :data="content.data.attributes.Menu.Tables"
    :title="content.data.attributes.Menu.Title"
  />
  <UIMisc8Gallery :images="content.data.attributes.Pictures.data" />
  <UISectionImgBtnColWrapper>
    <UISectionImgBtnColItem
      v-for="item in content.data.attributes.ImgBtnColWrapper.Item"
      :title="item.Title"
      :description="item.Description"
      :btn-text="item.BtnText"
      :btn-link="item.BtnLink"
      :img="
        config.public.strapiBase +
        item.Picture.data.attributes.formats.medium.url
      "
    />
  </UISectionImgBtnColWrapper>
</template>

<script setup>
const { find } = useStrapi();

const content = await find("catering-page", {
  populate: {
    Slider: {
      populate: "*",
    },
    SectionWrapperTwo: {
      populate: "*",
    },
    Menu: {
      populate: "*",
    },
    Pictures: {
      populate: "*",
    },
    ImgBtnColWrapper: {
      populate: {
        Item: {
          populate: "*",
        },
      },
    },
  },
});

const config = useRuntimeConfig();

useHead({
  title: "New Mayapur - Catering",
});
</script>
