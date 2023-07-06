<template>
  <UtilitiesTranslateContent :renderComponent="renderComponent">
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
        content.data.attributes.PlaceEveryone.Image.data.attributes.formats
          .small.url
      "
      :bg-color="content.data.attributes.PlaceEveryone.BgColor"
      :image-place="content.data.attributes.PlaceEveryone.ImagePlace"
    />
  </UtilitiesTranslateContent>
</template>

<script setup>
import { useLocaleStore } from "../stores/locale";
import { storeToRefs } from "pinia";

const { find } = useStrapi();
const store = useLocaleStore();
const { locale } = storeToRefs(store);
const renderComponent = ref(true);

let content = await find("community-page", {
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

watch(locale, async (newValue) => {
  renderComponent.value = false;
  content = await find("community-page", {
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
  await sleep(900);
  renderComponent.value = true;
});

const config = useRuntimeConfig();

useHead({
  title: "New Mayapur - Community",
});
</script>
