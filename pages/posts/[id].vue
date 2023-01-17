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
    <h1 class="text-2xl mt-16 font-bold">
      {{ post.data.attributes.Title }}
    </h1>
    <p class="whitespace-pre-line mt-3 mb-24">
      {{ post.data.attributes.Content }}
    </p>
  </div>
</template>

<script setup>
const route = useRoute();
const { findOne } = useStrapi();

const post = await findOne("posts", route.params.id, {
  populate: ["Thumbnail"],
});

const config = useRuntimeConfig();
</script>
