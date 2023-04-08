<template>
  <div class="py-32 xl:w-[900px] mx-4 xl:mx-auto">
    <NuxtLink to="/posts" class="w-32 block">
      <div class="-ml-2 flex items-center gap-2 cursor-pointer">
        <Icon name="ion:arrow-back-circle-outline" size="40px" />
        <p class="text-xl font-bold">Go Back</p>
      </div></NuxtLink
    >
    <img
      class="max-w-s md:max-w-lg mb-12 mt-10 rounded-lg"
      :src="
        config.public.strapiBase +
        post.data.attributes.Thumbnail.data.attributes.formats.small.url
      "
    />
    <h1 class="text-3xl mt-16 font-bold">
      {{ post.data.attributes.Title }}
    </h1>
    <div v-html="markdown" class="mt-6 mb-16 markdown"></div>
    <div class="mb-24">
      <h2 class="text-xl font-bold mb-6 uppercase pb-2 border-b-2">
        Read More
      </h2>
      <div class="space-y-4">
        <div class="card sm:card-side bg-base-100 border-2 border-base-200">
          <figure class="sm:w-[1200px]">
            <img
              src="/img/castle.jpg"
              alt="Thumbnail"
              class="h-[300px] max-md:w-full object-cover"
            />
          </figure>
          <div class="card-body">
            <div class="flex justify-between items-center">
              <h2 class="card-title">Some Title</h2>
              <span
                class="p-1 px-2 rounded-md text-white font-bold bg-orange-600 -translate-y-4 translate-x-4"
                >#Temple</span
              >
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed sint
              incidunt rem nisi ea repellat minima. Amet labore pariatur
              molestias...
            </p>
            <div class="card-actions justify-end">
              <NuxtLink
                :to="'/posts/' + 1"
                class="btn btn-primary mt-4 btn-outline"
                >Read More</NuxtLink
              >
            </div>
          </div>
        </div>
        <div class="card sm:card-side bg-base-100 border-2 border-base-200">
          <figure class="sm:w-[1200px]">
            <img
              src="/img/food.jpg"
              alt="Thumbnail"
              class="h-[300px] max-md:w-full object-cover"
            />
          </figure>
          <div class="card-body">
            <div class="flex justify-between items-center">
              <h2 class="card-title">Some Title</h2>
              <span
                class="p-1 px-2 rounded-md text-white font-bold bg-orange-600 -translate-y-4 translate-x-4"
                >#Temple</span
              >
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed sint
              incidunt rem nisi ea repellat minima. Amet labore pariatur
              molestias...
            </p>
            <div class="card-actions justify-end">
              <NuxtLink
                :to="'/posts/' + 1"
                class="btn btn-primary mt-4 btn-outline"
                >Read More</NuxtLink
              >
            </div>
          </div>
        </div>
      </div>
    </div>
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

.markdown {
  @apply text-lg;
}

.markdown ul {
  @apply list-disc mt-4 ml-3;
}
</style>
