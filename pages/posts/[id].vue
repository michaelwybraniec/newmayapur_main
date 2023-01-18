<template>
  <div class="py-32 w-[900px] mx-auto">
    <NuxtLink to="/posts" class="w-32 block">
      <div
        class="-ml-2 flex items-center gap-2 cursor-pointer hover:-translate-x-2 transition"
      >
        <Icon name="ion:arrow-back-circle-outline" size="40px" />
        <p class="text-xl font-bold">Go Back</p>
      </div></NuxtLink
    >
    <img
      class="max-w-s md:max-w-lg mb-12 mt-10 rounded-lg"
      :src="
        config.strapiBase +
        post.data.attributes.Thumbnail.data.attributes.formats.small.url
      "
    />
    <h1 class="text-3xl mt-16 font-bold">
      {{ post.data.attributes.Title }}
    </h1>
    <div v-html="markdown" class="mt-6 mb-24 markdown"></div>
  </div>
</template>

<script setup>
import { marked } from "marked";

const route = useRoute();
const { findOne } = useStrapi();

const post = await findOne("posts", route.params.id, {
  populate: ["Thumbnail"],
});

const markdown = computed(() => marked.parse(post.data.attributes.Content));

const config = useRuntimeConfig();
</script>

<style lang="postcss">
.markdown h2 {
  @apply font-bold text-xl mt-6 -mb-2;
}

.markdown p {
  @apply mt-4;
}

.markdown ul {
  @apply list-disc mt-4 ml-3;
}
</style>
