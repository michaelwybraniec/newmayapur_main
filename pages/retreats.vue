<template>
  <UISectionImgText
    :title="content.data.attributes.Header.Title"
    :description="content.data.attributes.Header.Text"
    :image="
      config.public.strapiBase +
      content.data.attributes.Header.Image.data.attributes.formats.small.url
    "
    :bg-color="content.data.attributes.Header.BgColor"
    :image-place="content.data.attributes.Header.ImagePlace"
  />
  <UIAccordionWrapper
    :title="content.data.attributes.AccordionSection.Title"
    :images="content.data.attributes.AccordionSection.Images.data"
  >
    <UIAccordionItem
      v-for="item in content.data.attributes.AccordionSection.AccordionItem"
      :title="item.Title"
      :text="item.Description"
    />
  </UIAccordionWrapper>
  <UIMiscAccomodation
    locale="en"
    v-if="content.data.attributes.ShowAccomodation"
  />
  <UIMiscEventPreview locale="en" v-if="content.data.attributes.ShowEvents" />
</template>

<script setup>
import { useLocaleStore } from "../stores/locale";
import { storeToRefs } from "pinia";

const { find } = useStrapi();
const store = useLocaleStore();
const { locale } = storeToRefs(store);
const renderComponent = ref(true);

const content = await find("retreats-page", {
  populate: {
    Header: {
      populate: "*",
    },
    AccordionSection: {
      populate: "*",
    },
  },
  locale: locale.value,
});

watch(locale, async (newValue) => {
  renderComponent.value = false;
  content = await find("retreats-page", {
    populate: {
      Header: {
        populate: "*",
      },
      AccordionSection: {
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
  title: "New Mayapur - Retreats",
});
</script>
