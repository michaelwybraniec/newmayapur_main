<template>
  <UtilitiesTranslateContent :renderComponent="renderComponent">
    <UISliderSimple
      :images="content.data.attributes.Slider.data"
      class="mb-32 flex justify-center"
    />
    <UISectionImgText
      :title="content.data.attributes.ImgTextSection.Title"
      :description="content.data.attributes.ImgTextSection.Text"
      :image="
        config.public.strapiBase +
        content.data.attributes.ImgTextSection.Image.data.attributes.formats
          .small.url
      "
      :bg-color="content.data.attributes.ImgTextSection.BgColor"
      :image-place="content.data.attributes.ImgTextSection.ImagePlace"
    />
    <UIMiscBottomFFLPage v-if="content.data.attributes.ShowQuoteAndSocials" />
  </UtilitiesTranslateContent>
</template>

<script setup>
import { useLocaleStore } from "../stores/locale";
import { storeToRefs } from "pinia";

const { find } = useStrapi();
const store = useLocaleStore();
const { locale } = storeToRefs(store);
const renderComponent = ref(true);

let content = await find("food-for-life-page", {
  populate: {
    Slider: {
      populate: "*",
    },
    ImgTextSection: {
      populate: "*",
    },
  },
  locale: locale.value,
});

watch(locale, async (newValue) => {
  renderComponent.value = false;
  content = await find("food-for-life-page", {
    populate: {
      Slider: {
        populate: "*",
      },
      ImgTextSection: {
        populate: "*",
      },
    },
    locale: newValue,
  });
  await sleep(900);
  renderComponent.value = true;
});

const config = useRuntimeConfig();

useHead({
  title: "New Mayapur - Food For Life",
});
</script>
