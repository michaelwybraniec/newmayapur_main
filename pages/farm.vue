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
    <UICardsVertical
      :title="content.data.attributes.Volunteering.Title"
      :description="content.data.attributes.Volunteering.Description"
      :btn1="content.data.attributes.Volunteering.btn1"
      :btn2="content.data.attributes.Volunteering.btn2"
      :link1="content.data.attributes.Volunteering.link1"
      :link2="content.data.attributes.Volunteering.link2"
      :img="
        config.public.strapiBase +
        content.data.attributes.Volunteering.img.data.attributes.formats.medium
          .url
      "
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

let content = await find("farm-page", {
  populate: {
    Header: {
      populate: "*",
    },
    Thirds: {
      populate: "*",
    },
    AccordionSection: {
      populate: "*",
    },
    Volunteering: {
      populate: "*",
    },
  },
});

watch(locale, async (newValue) => {
  renderComponent.value = false;
  content = await find("farm-page", {
    populate: {
      Header: {
        populate: "*",
      },
      Thirds: {
        populate: "*",
      },
      AccordionSection: {
        populate: "*",
      },
      Volunteering: {
        populate: "*",
      },
    },
  });
  await sleep(900);
  renderComponent.value = true;
});

const config = useRuntimeConfig();

useHead({
  title: "New Mayapur - Farm",
});
</script>
