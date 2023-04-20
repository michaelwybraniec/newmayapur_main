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
    <div class="lg:col-span-2 max-lg:order-2 space-y-4">
      <h2 class="font-bold text-xl uppercase pb-2 border-b-2 border-base-300">
        Read More
      </h2>
    </div>
    <div v-if="posts.data.length > 0" v-for="post in [post1, post2]">
      <div class="card sm:card-side bg-base-100 border-2 my-4 border-base-200">
        <figure class="sm:w-[1200px]">
          <img
            :src="
              config.public.strapiBase +
              post.attributes.Thumbnail.data.attributes.formats.small.url
            "
            alt="Thumbnail"
            class="h-[300px] max-md:w-full object-cover"
          />
        </figure>
        <div class="card-body">
          <div class="flex justify-between items-center">
            <h2 class="card-title">{{ post.attributes.Title }}</h2>
            <span
              class="p-1 px-2 rounded-md text-white font-bold -translate-y-4 translate-x-4"
              :class="setTagsBg(post.attributes.Category)"
              >#{{ post.attributes.Category }}</span
            >
          </div>
          <p>{{ post.attributes.Content.substr(0, 200) + "..." }}</p>
          <div class="card-actions justify-end">
            <NuxtLink
              :to="'/posts/' + post.id"
              class="btn btn-primary mt-4 btn-outline"
              >Read More</NuxtLink
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { marked } from "marked";

const route = useRoute();
const { findOne, find } = useStrapi();
function between(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const post = await findOne("posts", route.params.id, {
  populate: ["Thumbnail"],
});

const posts = await find("posts", {
  populate: ["Thumbnail"],
  pagination: {
    pageSize: 10,
    page: 1,
  },
});

const id = between(1, posts.data.length);

const post1 = posts.data[id - 1];
const post2 = posts.data[id];

const markdown = computed(() => marked.parse(post.data.attributes.Content));

const config = useRuntimeConfig();

const setTagsBg = function (value) {
  if (value === "Temple") {
    return "bg-orange-600";
  } else if (value === "Community") {
    return "bg-blue-600";
  } else {
    return "bg-green-600";
  }
};
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

.markdown a {
  @apply underline text-blue-600 hover:text-blue-800 visited:text-purple-600;
}
</style>
