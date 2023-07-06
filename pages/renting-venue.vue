<template>
  <UtilitiesTranslateContent :renderComponent="renderComponent">
    <h1 class="text-center mx-auto text-4xl md:text-5xl font-bold my-24">
      Rent Our Space
    </h1>
    <div class="max-md:mx-4">
      <img
        src="/img/castle.jpg"
        class="md:max-w-[750px] mt-20 mb-4 sm:mx-auto rounded-xl"
      />
    </div>
    <UISectionParagraphWrapperTwo
      :section0="content.data.attributes.SectionWrapperTwo.Section0"
      :section1="content.data.attributes.SectionWrapperTwo.Section1"
      :bg-color="content.data.attributes.SectionWrapperTwo.BgColor"
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

let content = await find("renting-page", {
  populate: {
    SectionWrapperTwo: {
      populate: "*",
    },
  },
  locale: locale.value,
});

watch(locale, async (newValue) => {
  renderComponent.value = false;
  content = await find("renting-page", {
    populate: {
      SectionWrapperTwo: {
        populate: "*",
      },
    },
    locale: newValue,
  });
  await sleep(900);
  renderComponent.value = true;
});

useHead({
  title: "New Mayapur - Renting Venue",
});
</script>
