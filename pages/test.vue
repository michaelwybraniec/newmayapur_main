<template>
  <MiscImgTextSection
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
  <MiscSectionWrapperThird
    :section0="content.data.attributes.SectionWrapperThird.Section0"
    :section1="content.data.attributes.SectionWrapperThird.Section1"
    :section2="content.data.attributes.SectionWrapperThird.Section2"
    :bg-color="content.data.attributes.SectionWrapperThird.BgColor"
  />
  <MiscAccordionWrapper
    :title="content.data.attributes.DomainHistory.Title"
    :images="content.data.attributes.DomainHistory.Images.data"
  >
    <MiscAccordionSection
      v-for="item in content.data.attributes.DomainHistory.AccordionItem"
      :title="item.Title"
      :text="item.Description"
    />
  </MiscAccordionWrapper>
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
    DomainHistory: {
      populate: "*",
    },
  },
});

const config = useRuntimeConfig();
</script>
