<template>
  <UtilitiesMap v-if="content.data.attributes.ShowMap" />
  <UIAccordionWrapper :title="content.data.attributes.Directions.Title">
    <UIAlertInformation :text="content.data.attributes.Information" />
    <UIAccordionItem
      v-for="item in content.data.attributes.Directions.AccordionItem"
      :title="item.Title"
      :text="item.Description"
    />
  </UIAccordionWrapper>
  <UIMiscBottomMorePage v-if="content.data.attributes.ShowContactAndSocials" />
</template>

<script setup>
const { find } = useStrapi();

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
});

useHead({
  title: "New Mayapur - More",
});
</script>
