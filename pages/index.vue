<template>
  <UtilitiesTranslateContent :renderComponent="renderComponent">
    <UIMiscHero
      :title="content.data.attributes.Header.Title"
      :description="content.data.attributes.Header.Description"
    />
    <UISectionImgColWrapper>
      <UISliderWrapper width="470px">
        <UISliderItem
          v-for="slide in content.data.attributes.Hero"
          :img="
            config.public.strapiBase +
            slide.Image.data.attributes.formats.medium.url
          "
        />
      </UISliderWrapper>
      <UISectionGridWrapper>
        <UISectionGridItem
          v-for="slide in content.data.attributes.Hero"
          :title="slide.Title"
          :description="slide.Description"
          :link="slide.Link"
          class="md:text-lg"
        />
      </UISectionGridWrapper>
    </UISectionImgColWrapper>
    <UISectionParagraphWrapperThree
      :section0="content.data.attributes.SectionWrapperThird.Section0"
      :section1="content.data.attributes.SectionWrapperThird.Section1"
      :section2="content.data.attributes.SectionWrapperThird.Section2"
      :bg-color="content.data.attributes.SectionWrapperThird.BgColor"
    />
    <div
      class="pb-32 pt-32 lg:px-4 2xl:px-28 grid grid-cols-1 mx-4 lg:mx-0 lg:grid-cols-2 gap-6 2xl:gap-24"
    >
      <UIMiscUpcomingEvents v-if="content.data.attributes.ShowUpcomingEvents" />
      <UIMiscGallery v-if="content.data.attributes.ShowShopGallery" />
    </div>
    <!-- <UISectionFullScreen
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
  /> -->
    <UIMiscBlogPreview
      :title="content.data.attributes.BlogPreview.Title"
      :ionIcon="content.data.attributes.BlogPreview.IonIcon"
      :description="content.data.attributes.BlogPreview.Description"
      :showArticles="content.data.attributes.BlogPreview.ShowArticles"
    />
    <UIMiscNewsletterForm v-if="content.data.attributes.ShowNewsletterForm" />
  </UtilitiesTranslateContent>
</template>

<script setup>
import { useLocaleStore } from "../stores/locale";
import { storeToRefs } from "pinia";

const { find } = useStrapi();
const store = useLocaleStore();
const { locale } = storeToRefs(store);
const renderComponent = ref(true);

let content = await find("Homepage", {
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
    Header: {
      populate: "*",
    },
  },
  locale: locale.value,
});

watch(locale, async (newValue) => {
  renderComponent.value = false;
  content = await find("Homepage", {
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
      Header: {
        populate: "*",
      },
    },
    locale: newValue,
  });
  await sleep(900);
  renderComponent.value = true;
});

const config = useRuntimeConfig();
</script>
