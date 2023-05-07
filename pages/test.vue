<template>
  <Hero v-if="'Hero' in content.data.attributes">
    <li
      class="glide__slide bg-base-200"
      v-for="slide in content.data.attributes.Hero"
    >
      <MiscSlide
        :title="slide.Title"
        :img="
          config.public.strapiBase +
          slide.Image.data.attributes.formats.medium.url
        "
        :link="slide.Link"
        :text="slide.Description"
      />
    </li>
  </Hero>
</template>

<script setup>
const { find } = useStrapi();

const content = await find("Homepage", {
  populate: {
    Hero: {
      populate: "*",
    },
  },
});

const config = useRuntimeConfig();
</script>
