<template>
  <UtilitiesTranslateContent :renderComponent="renderComponent">
    <UtilitiesMap v-if="content.data.attributes.ShowMap" />
    <UIAccordionWrapper :title="content.data.attributes.Directions.Title">
      <UIAlertInformation :text="content.data.attributes.Information" />
      <UIAccordionItem
        v-for="item in content.data.attributes.Directions.AccordionItem"
        :title="item.Title"
        :text="item.Description"
      />
    </UIAccordionWrapper>
    <UIMiscBottomMorePage
      v-if="content.data.attributes.ShowContactAndSocials"
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

const content = await find("more-page", {
  populate: {
    ShowMap: {
      populate: "*",
    },
    Directions: {
      populate: "*",
    },
    Information: {
      populate: "*",
    },
    ShowContactAndSocials: {
      populate: "*",
    },
  },
  locale: locale.value,
});

watch(locale, async (newValue) => {
  renderComponent.value = false;
  content = await find("more-page", {
    populate: {
      ShowMap: {
        populate: "*",
      },
      Directions: {
        populate: "*",
      },
      Information: {
        populate: "*",
      },
      ShowContactAndSocials: {
        populate: "*",
      },
    },
    locale: newValue,
  });
  await sleep(900);
  renderComponent.value = true;
});

useHead({
  title: "New Mayapur - More",
});
</script>
