<template>
  <div class="py-16">
    <div class="w-[1280px] mx-auto">
      <h1 class="font-bold text-3xl mb-8">Our Blog</h1>
      <div
        class="w-full rounded-xl flex border-2 border-base-200 p-2 justify-between"
      >
        <div class="flex gap-2">
          <select class="select select-bordered w-full max-w-xs">
            <option disabled selected>Category</option>
            <option>Temple</option>
            <option>Farm</option>
            <option>Community</option>
          </select>
        </div>
        <button class="btn btn-secondary btn-outline">Clear Filters</button>
      </div>
      <div class="grid grid-cols-3 items-start gap-16 mt-12">
        <div class="col-span-2 space-y-4">
          <div v-for="post in posts.data">
            <div class="card lg:card-side bg-base-100 border-2 border-base-200">
              <figure class="w-[1200px]">
                <img
                  :src="
                    config.strapiBase +
                    post.attributes.Thumbnail.data.attributes.formats.small.url
                  "
                  alt="Thumbnail"
                  class="h-[300px]"
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
                    class="btn btn-primary mt-4"
                    >Read More</NuxtLink
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-1 border-2 border-base-200 py-6 pb-8 rounded-xl">
          <img class="h-32 block mx-auto rounded-xl" src="/img/logo.jpg" />
          <p class="uppercase font-bold text-center mt-2 text-red-800">
            New Mayapur
          </p>
          <div class="grid grid-cols-3 gap-3 mt-8 px-4">
            <div
              class="p-2 cursor-pointer rounded-xl bg-base-200 flex items-center justify-center gap-4"
            >
              <Icon name="ion:logo-instagram" size="30px" />
            </div>
            <div
              class="p-2 cursor-pointer rounded-xl bg-base-200 flex items-center justify-center gap-4"
            >
              <Icon name="ion:logo-facebook" size="30px" />
            </div>
            <div
              class="p-2 cursor-pointer rounded-xl bg-base-200 flex items-center justify-center gap-4"
            >
              <Icon name="ion:logo-youtube" size="30px" />
            </div>
          </div>
          <p class="pl-5 pb-1 pt-7 text-sm uppercase font-bold">
            Subscribe to our Newsletter
          </p>
          <div class="form-control px-4">
            <div class="input-group">
              <input
                type="text"
                placeholder="Your Email"
                class="input input-bordered"
              />
              <button class="btn px-6">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="flex items-center justify-center mb-20">
    <div class="btn-group mt-20 mb-10">
      <button
        class="btn"
        v-for="(post, index) in posts.meta.pagination.pageCount"
        @click="options.page = index + 1"
        :class="options.page === index + 1 ? 'btn-active' : ''"
      >
        {{ index + 1 }}
      </button>
    </div>
  </div>
</template>

<script setup>
const { find } = useStrapi();

const options = reactive({
  pageSize: 3,
  page: 1,
});

let posts = ref(
  await find("posts", {
    populate: ["Thumbnail"],
    pagination: options,
  })
);

watch(options, async (newValue, oldValue) => {
  posts.value = await find("posts", {
    populate: ["Thumbnail"],
    pagination: newValue,
  });
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

const config = useRuntimeConfig();
</script>
