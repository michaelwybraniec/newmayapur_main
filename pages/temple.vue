<template>
  <UISectionImgText
    :title="content.data.attributes.ImgTextSection.Title"
    :description="content.data.attributes.ImgTextSection.Text"
    :image="
      config.public.strapiBase +
      content.data.attributes.ImgTextSection.Image.data.attributes.formats
        .medium.url
    "
    :bg-color="content.data.attributes.ImgTextSection.BgColor"
    :image-place="content.data.attributes.ImgTextSection.ImagePlace"
  />
  <UISectionParagraphWrapperThree
    :section0="content.data.attributes.SectionWrapperThird.Section0"
    :section1="content.data.attributes.SectionWrapperThird.Section1"
    :section2="content.data.attributes.SectionWrapperThird.Section2"
    :bg-color="content.data.attributes.SectionWrapperThird.BgColor"
  />
  <UIAccordionWrapper
    :title="content.data.attributes.DomainHistory.Title"
    :images="content.data.attributes.DomainHistory.Images.data"
  >
    <UIAccordionItem
      v-for="item in content.data.attributes.DomainHistory.AccordionItem"
      :title="item.Title"
      :text="item.Description"
    />
  </UIAccordionWrapper>
  <UISectionImgText
    :title="content.data.attributes.SpiritualLife.Title"
    :description="content.data.attributes.SpiritualLife.Text"
    :image="
      config.public.strapiBase +
      content.data.attributes.SpiritualLife.Image.data.attributes.formats.medium
        .url
    "
    :bg-color="content.data.attributes.SpiritualLife.BgColor"
    :image-place="content.data.attributes.SpiritualLife.ImagePlace"
  />
  <UIAccordionWrapper
    :title="content.data.attributes.SrilaPrabhupada.Title"
    :images="content.data.attributes.SrilaPrabhupada.Images.data"
  >
    <UIAccordionItem
      v-for="item in content.data.attributes.SrilaPrabhupada.AccordionItem"
      :title="item.Title"
      :text="item.Description"
    />
  </UIAccordionWrapper>
  <UISectionImgText
    :title="content.data.attributes.HarinamSankirtan.Title"
    :description="content.data.attributes.HarinamSankirtan.Text"
    :image="
      config.public.strapiBase +
      content.data.attributes.HarinamSankirtan.Image.data.attributes.formats
        .medium.url
    "
    :bg-color="content.data.attributes.HarinamSankirtan.BgColor"
    :image-place="content.data.attributes.HarinamSankirtan.ImagePlace"
  />
  <UIMiscBottomTemplePage
    v-if="content.data.attributes.ShowScheduleAndSocials"
  />
</template>

<script setup>
const { find } = useStrapi();

const content = await find("temple-page", {
  populate: {
    SectionWrapperThird: {
      populate: "*",
    },
    ImgTextSection: {
      populate: "*",
    },
    SpiritualLife: {
      populate: "*",
    },
    SrilaPrabhupada: {
      populate: "*",
    },
    DomainHistory: {
      populate: "*",
    },
    HarinamSankirtan: {
      populate: "*",
    },
  },
});

const config = useRuntimeConfig();

useHead({
  title: "New Mayapur - Temple",
});
</script>
