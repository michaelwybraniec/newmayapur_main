<template>
  <div class="py-16">
    <div class="xl:w-[1280px] mx-4 xl:mx-auto">
      <h1 class="font-bold text-3xl mb-8">Our Blog</h1>
      <div
        class="w-full rounded-xl flex border-2 border-base-200 p-2 justify-between"
      >
        <div class="flex gap-2">
          <select
            v-model="filter"
            class="select select-bordered w-full max-w-xs"
          >
            <option value="" disabled selected>Category</option>
            <option value="Temple">Temple</option>
            <option value="Farm">Farm</option>
            <option value="Community">Community</option>
          </select>
        </div>
        <button
          class="btn btn-secondary btn-outline"
          @click="() => (filter = '')"
        >
          Clear Filters
        </button>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-3 items-start gap-16 mt-12">
        <div class="lg:col-span-2 max-lg:order-2 space-y-4">
          <div v-for="post in posts.data">
            <div class="card sm:card-side bg-base-100 border-2 border-base-200">
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
                    class="btn btn-primary mt-4"
                    >Read More</NuxtLink
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="lg:col-span-1 max-lg:order-1 border-2 border-base-200 py-6 pb-8 rounded-xl"
        >
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
            <form @submit.prevent="subscribe" class="">
              <input
                v-model="mail.value"
                type="text"
                placeholder="Your Email"
                class="input input-bordered w-full"
                @change="v$.value.$touch"
                :class="{
                  'border-red-500': v$.value.$error,
                }"
              />
              <button type="submit" class="btn px-6 py-2 mt-2 w-full">
                Submit
              </button>
            </form>
            <p
              class="text-sm mt-2 text-center"
              :class="
                res.includes('registered') ? 'text-green-600' : 'text-red-600'
              "
            >
              {{ res }}
            </p>
            <p
              v-if="v$.value.$error"
              class="text-sm mt-2 text-center text-red-600"
            >
              Please enter a valid email.
            </p>
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
import { required, email, helpers } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";

const rules = computed(() => {
  return {
    value: {
      required: helpers.withMessage("The email field is required", required),
      email: helpers.withMessage("Invalid email format", email),
    },
  };
});

const { find } = useStrapi();

const mail = reactive({ value: "" });
const res = ref("");

const v$ = useVuelidate(rules, mail);

const subscribe = async () => {
  const isCorrect = await v$.value.$validate();
  if (!isCorrect) return;
  const { data, pending, error, refresh } = await useFetch("/api/mailchimp", {
    method: "POST",
    body: { email: mail.value },
  });

  res.value = error.value
    ? "Oops! Something went wrong. Please try again later."
    : "Your subscription has been registered.";

  mail.value = "";
  v$.value.$reset();
};

const filter = ref("");

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
  if (filter.value === "") {
    posts.value = await find("posts", {
      populate: ["Thumbnail"],
      pagination: newValue,
    });
  } else {
    posts.value = await find("posts", {
      populate: ["Thumbnail"],
      pagination: newValue,
      filters: {
        Category: {
          $eq: filter.value,
        },
      },
    });
  }
});

watch(filter, async (newValue, oldValue) => {
  if (newValue === "") {
    options.page = 1;
    posts.value = await find("posts", {
      populate: ["Thumbnail"],
      pagination: options,
    });
  } else {
    options.page = 1;
    posts.value = await find("posts", {
      populate: ["Thumbnail"],
      pagination: options,
      filters: {
        Category: {
          $eq: newValue,
        },
      },
    });
  }
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

<style lang="postcss"></style>
