<template>
  <div class="bg-base-200">
    <div class="mx-auto pt-20 pb-32 lg:px-1.5 xl:px-12 2xl:px-16">
      <div class="md:px-24 mx-4 lg:px-0 lg:flex flex-col lg:items-center mb-20">
        <div class="p-5 pb-6 lg:pb-4 inline rounded-xl bg-white">
          <Icon :name="'ion:' + props.ionIcon" size="28px" />
        </div>
        <h2 class="text-xl uppercase font-bold mt-8">{{ props.title }}</h2>
        <div
          class="pt-3 lg:w-[800px] lg:text-center text-lg mt-2"
          v-html="markdown"
        ></div>
      </div>
      <div
        v-if="props.showArticles"
        class="grid grid-cols-1 lg:grid-cols-3 mx-auto 2xl:w-[1300px] px-4 2xl:px-20 items-center gap-x-4"
      >
        <div
          v-for="post in posts.data"
          class="card mt-6 h-[430px] md:mx-auto max-w-sm bg-base-100 shadow-xl"
        >
          <figure>
            <img
              :src="
                config.public.strapiBase +
                post.attributes.Thumbnail.data.attributes.formats.small.url
              "
              class="h-52 w-full object-cover"
              alt="Shoes"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">
              {{ post.attributes.Title.substr(0, 14) + "..." }}
              <div
                class="badge border-none"
                :class="setTagsBg(post.attributes.Category)"
              >
                #{{ post.attributes.Category }}
              </div>
            </h2>
            <p>{{ post.attributes.Content.substr(0, 65) + "..." }}</p>
            <div class="flex justify-end">
              <NuxtLink
                :to="'/posts/' + post.id"
                class="btn btn-primary btn-outline"
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
const { find } = useStrapi();
import { marked } from "marked";

const markdown = computed(() => marked.parse(props.description));

const posts = await find("posts", {
  pagination: {
    pageSize: 3,
    page: 1,
  },
  populate: "Thumbnail",
  sort: ["publishedAt:desc"],
});

const setTagsBg = function (value) {
  if (value === "Temple") {
    return "bg-orange-600";
  } else if (value === "Community") {
    return "bg-blue-600";
  } else {
    return "bg-green-600";
  }
};

const props = defineProps(["title", "ionIcon", "description", "showArticles"]);

const config = useRuntimeConfig();
</script>
