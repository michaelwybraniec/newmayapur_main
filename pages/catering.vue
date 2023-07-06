<template>
  <UtilitiesTranslateContent :renderComponent="renderComponent">
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
  </UtilitiesTranslateContent>
</template>

<script setup>
import { useLocaleStore } from "../stores/locale";
import { storeToRefs } from "pinia";

const { find } = useStrapi();
const store = useLocaleStore();
const { locale } = storeToRefs(store);
const renderComponent = ref(true);

let content = await find("catering-page", {
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

watch(locale, async (newValue) => {
  renderComponent.value = false;
  content = await find("catering-page", {
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
  await sleep(900);
  renderComponent.value = true;
});

const config = useRuntimeConfig();

useHead({
  title: "New Mayapur - Catering",
});
</script>
