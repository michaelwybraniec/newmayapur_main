<template>
  <div class="py-16">
    <div class="xl:w-[1200px] mx-4 xl:mx-auto">
      <h1 class="font-bold text-3xl mb-8 cursor-pointer" @click="filter = ''">
        Our Blog
      </h1>
      <div class="grid grid-cols-1 lg:grid-cols-3 items-start gap-8 mt-12">
        <div class="lg:col-span-2 max-lg:order-2 space-y-4">
          <h2
            class="font-bold text-xl uppercase pb-2 border-b-2 border-base-300"
          >
            All Articles
          </h2>
          <div v-if="posts.data.length > 0" v-for="post in posts.data">
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
                    class="btn btn-primary mt-4 btn-outline"
                    >Read More</NuxtLink
                  >
                </div>
              </div>
            </div>
          </div>
          <div v-else class="mx-auto pt-44 mb-10">
            <div class="flex items-center flex-col">
              <div class="p-5 pb-5 mx-auto inline bg-base-200 rounded-xl mb-10">
                <Icon name="ion:close-outline" size="28px" />
              </div>
              <h2 class="text-2xl font-bold uppercase mb-3">Oops!</h2>
              <p class="text-lg text-center">
                It looks like what you're searching for does not exist.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div
            class="lg:col-span-1 max-lg:order-1 border-2 border-base-200 py-6 pb-8 rounded-xl"
          >
            <img class="h-32 block mx-auto rounded-xl" src="/img/logo.jpg" />
            <p class="uppercase font-bold text-center mt-2 text-red-800">
              New Mayapur
            </p>
            <div class="grid grid-cols-3 gap-3 mt-8 px-4">
              <a
                href="https://www.instagram.com/lanouvellemayapur/"
                class="p-2 cursor-pointer rounded-xl bg-base-200 flex items-center justify-center gap-4"
              >
                <Icon name="ion:logo-instagram" size="30px" />
              </a>
              <a
                href="https://www.facebook.com/nouvellemayapur"
                class="p-2 cursor-pointer rounded-xl bg-base-200 flex items-center justify-center gap-4"
              >
                <Icon name="ion:logo-facebook" size="30px" />
              </a>
              <a
                href="https://www.youtube.com/c/NewMayapur"
                class="p-2 cursor-pointer rounded-xl bg-base-200 flex items-center justify-center gap-4"
              >
                <Icon name="ion:logo-youtube" size="30px" />
              </a>
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
          <div>
            <p class="mt-6 mb-2 font-bold text-xl uppercase">Categories</p>
            <div class="space-y-1.5">
              <p
                @click="filter = 'Temple'"
                class="p-2 px-4 cursor-pointer font-bold rounded-lg border-2"
              >
                Temple
              </p>
              <p
                @click="filter = 'Community'"
                class="p-2 px-4 cursor-pointer font-bold rounded-lg border-2"
              >
                Community
              </p>
              <p
                @click="filter = 'Farm'"
                class="p-2 px-4 cursor-pointer font-bold rounded-lg border-2"
              >
                Farm
              </p>
            </div>
          </div>
          <div>
            <p class="mt-6 mb-2 font-bold text-xl uppercase">Most Popular</p>
            <div class="space-y-1.5">
              <p
                class="p-2 px-4 cursor-pointer font-bold rounded-lg bg-base-200"
              >
                <a href="https://newmayapur.com/posts/6"
                  >Who is Sri Balarama?</a
                >
              </p>

              <p
                class="p-2 px-4 cursor-pointer font-bold rounded-lg bg-base-200"
              >
                <a href="https://newmayapur.com/posts/5"
                  >Cows, Climate Change and Clever Solutions</a
                >
              </p>
              <p
                class="p-2 px-4 cursor-pointer font-bold rounded-lg bg-base-200"
              >
                <a href="https://newmayapur.com/posts/7"
                  >The Lord Who Protects</a
                >
              </p>
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
    sort: ["publishedAt:desc"],
  })
);

watch(options, async (newValue, oldValue) => {
  if (filter.value === "") {
    posts.value = await find("posts", {
      populate: ["Thumbnail"],
      pagination: newValue,
      sort: ["publishedAt:desc"],
    });
  } else {
    posts.value = await find("posts", {
      populate: ["Thumbnail"],
      pagination: newValue,
      sort: ["publishedAt:desc"],
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
      sort: ["publishedAt:desc"],
    });
  } else {
    options.page = 1;
    posts.value = await find("posts", {
      populate: ["Thumbnail"],
      sort: ["publishedAt:desc"],
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
