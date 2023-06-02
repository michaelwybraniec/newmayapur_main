<template>
  <UISliderWrapper v-if="'Hero' in content.data.attributes">
    <li
      class="glide__slide bg-base-200"
      v-for="slide in content.data.attributes.Hero"
    >
      <UISliderItem
        :title="slide.Title"
        :img="
          config.public.strapiBase +
          slide.Image.data.attributes.formats.medium.url
        "
        :link="slide.Link"
        :text="slide.Description"
      />
    </li>
  </UISliderWrapper>
  <UISectionParagraphWrapperThree
    :section0="content.data.attributes.SectionWrapperThird.Section0"
    :section1="content.data.attributes.SectionWrapperThird.Section1"
    :section2="content.data.attributes.SectionWrapperThird.Section2"
    :bg-color="content.data.attributes.SectionWrapperThird.BgColor"
  />
  <div
    class="pb-32 lg:pt-4 lg:px-4 2xl:px-28 grid grid-cols-1 mx-4 lg:mx-0 lg:grid-cols-2 gap-6 2xl:gap-24"
  >
    <UIMiscUpcomingEvents v-if="content.data.attributes.ShowUpcomingEvents" />
    <UIMiscGallery v-if="content.data.attributes.ShowShopGallery" />
  </div>
  <UISectionFullScreen
    v-if="'FullScreenSection' in content.data.attributes"
    :title="content.data.attributes.FullScreenSection.Title"
    :description="content.data.attributes.FullScreenSection.Description"
    :image="
      config.public.strapiBase +
      content.data.attributes.FullScreenSection.Image.data.attributes.formats
        .medium.url
    "
    :buttonText="content.data.attributes.FullScreenSection.ButtonText"
    :buttonLink="content.data.attributes.FullScreenSection.ButtonLink"
    :bgColor="content.data.attributes.FullScreenSection.BgColor"
  />
  <UIMiscBlogPreview
    :title="content.data.attributes.BlogPreview.Title"
    :ionIcon="content.data.attributes.BlogPreview.IonIcon"
    :description="content.data.attributes.BlogPreview.Description"
    :showArticles="content.data.attributes.BlogPreview.ShowArticles"
  />
  <UIMiscNewsletterForm v-if="content.data.attributes.ShowNewsletterForm" />
</template>

<script setup>
const { find } = useStrapi();

const content = await find("Homepage", {
  populate: {
    Hero: {
      populate: "*",
    },
    SectionWrapperThird: {
      populate: "*",
    },
    FullScreenSection: {
      populate: "*",
    },
    BlogPreview: {
      populate: "*",
    },
  },
});

const config = useRuntimeConfig();
</script>
