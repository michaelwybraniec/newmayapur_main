<template>
  <div>
    <div class="glide">
      <div class="glide__track" data-glide-el="track">
        <ul class="glide__slides">
          <li class="glide__slide bg-base-200">
            <Slide
              title="Harinam Sankirtan"
              icon="ion:musical-notes-outline"
              btn-bg="bg-red-700"
              btn-bg-hover="bg-red-900"
              img="/img/harinam.jpg"
              text="In this age of Kali, there is no other way
                    than chanting the Holy Name of God to attain <b>spiritual realization</b>. 
                    We are going out regularly to spread Lord Caitanya's mercy, all over <b>France</b>."
            />
          </li>
          <li class="glide__slide bg-base-200">
            <Slide
              title="Food For Life"
              text="There are <b>5 to 7 million</b> people who at least partially
                    rely on food banks for their subsistance in present-day
                    France. We are here to make a difference, by providing meals
                    <b>free of charge</b>."
              icon="ion:pizza-outline"
              btn-bg="bg-orange-700"
              btn-bg-hover="bg-orange-900"
              img="/img/food.jpg"
            />
          </li>
          <li class="glide__slide bg-base-200">
            <Slide
              title="Volunteering"
              text="Volunteering is a great way to meet new people and create
                  beautiful <b>relationships</b>. We provide plenty of
                  opportunities for you to learn, be it in our <b>gardens</b>,
                  our <b>dairy farm</b>, or our <b>forests</b>."
              icon="ion:leaf-outline"
              btn-bg="bg-green-700"
              btn-bg-hover="bg-green-900"
              img="/img/gardening.jpg"
            />
          </li>
        </ul>
        <div data-glide-el="controls" class="max-lg:hidden">
          <button
            class="glide__arrow glide__arrow--left absolute left-0 top-1/2 -translate-y-1/2 mx-4"
            data-glide-dir="<"
          >
            <Icon name="ion:arrow-back-circle-outline" size="40px" />
          </button>
          <button
            class="glide__arrow glide__arrow--right absolute right-0 top-1/2 -translate-y-1/2 mx-4"
            data-glide-dir=">"
          >
            <Icon name="ion:arrow-forward-circle-outline" size="40px" />
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="pb-24 pt-36 2xl:px-10">
    <div
      class="grid grid-cols-1 lg:grid-cols-3 px-4 lg:gap-x-10 2xl:px-20 items-start 2xl:gap-x-16"
    >
      <div class="order-2 lg:order-1 md:px-24 lg:px-0 mb-24 lg:mb-0">
        <div class="p-5 pb-6 mx-auto inline bg-base-200 rounded-xl mb-16">
          <Icon name="ion:map-outline" size="28px" />
        </div>
        <h2 class="text-xl mt-12 uppercase font-bold">How to Come</h2>
        <p class="pt-3 text-lg">
          New Mayapur is situated in a haven of peace, amongst the forests and
          fields of Indre, in the center of France. As such, it can be sometimes
          a little hard to reach, especially when coming from abroad. Find out
          how to come right here.
        </p>
        <NuxtLink to="/more#map">
          <button class="btn btn-primary btn-outline mt-6 w-44">
            Get Directions
          </button>
        </NuxtLink>
      </div>
      <div class="order-2 lg:order-1 md:px-24 lg:px-0 mb-24 lg:mb-0">
        <div class="p-5 pb-6 mx-auto inline bg-base-200 rounded-xl mb-16">
          <Icon name="ion:bed-outline" size="28px" />
        </div>
        <h2 class="text-xl mt-12 uppercase font-bold">Stay Over</h2>
        <p class="pt-3 text-lg">
          Experience New Mayapur first-hand by booking a room in our fully
          furnished, comfortable <b>guest-house</b>. We have rooms for singles,
          families, travellers and everything in between. All our rooms are
          available all year round.
        </p>
        <button class="btn btn-primary btn-outline mt-6 w-44">Book Now</button>
      </div>
      <div class="order-2 lg:order-1 md:px-24 lg:px-0 mb-24 lg:mb-0">
        <div class="p-5 pb-6 mx-auto inline bg-base-200 rounded-xl mb-16">
          <Icon name="ion:mail-outline" size="28px" />
        </div>
        <h2 class="text-xl mt-12 uppercase font-bold">Keep in Touch</h2>
        <p class="pt-3 text-lg">
          You have a question, or you would like to share with us your ideas and
          suggestions? Please reach out to us. We are always happy to get our
          guests feedback, and are eager to improve the quality of your stay in
          New Mayapur.
        </p>
        <NuxtLink to="/more#contact">
          <button class="btn btn-primary btn-outline mt-6 w-44">
            Contact Us
          </button>
        </NuxtLink>
      </div>
    </div>
  </div>
  <div
    class="pb-32 lg:pt-24 lg:px-4 2xl:px-28 grid grid-cols-1 mx-4 lg:mx-0 lg:grid-cols-2 gap-6 2xl:gap-24"
  >
    <div class="max-lg:pb-20">
      <h2 class="text-2xl font-bold border-b-2 border-base-300 pb-2">
        Upcoming Events
      </h2>
      <ul>
        <li v-for="event in events.data" class="flex flex-col">
          <div
            class="bg-primary inline-block self-end translate-y-6 lg:translate-y-4 px-4 py-1 rounded-md text-white font-bold -translate-x-8"
          >
            {{
              new Date(event.attributes.Start).toLocaleString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })
            }}
          </div>
          <div class="p-4 px-6 pb-5 border-2 rounded-lg mt-2 lg:mt-0">
            <NuxtLink :to="'/events/' + event.id"
              ><h3 class="font-bold text-xl pb-2">
                {{ event.attributes.Title }}
              </h3></NuxtLink
            >
            <p>
              {{
                event.attributes.Description.split(" ").splice(0, 35).join(" ")
              }}
              ...
            </p>
          </div>
        </li>
      </ul>
      <NuxtLink to="/events">
        <button class="btn btn-primary btn-outline mx-auto block mt-8">
          View All Events
        </button>
      </NuxtLink>
    </div>
    <div>
      <h2 class="text-2xl font-bold border-b-2 border-base-300 pb-2">
        Our Shop
      </h2>
      <div class="grid grid-cols-2 gap-2 mt-10 md:w-[423px] mx-auto">
        <img
          src="/img/bhagavad-gita.jpg"
          alt="Bhagavad-Gita"
          class="h-44 sm:h-52 rounded-md"
        />
        <img
          src="/img/perfection-du-yoga.jpg"
          alt="Bhagavad-Gita"
          class="h-44 sm:h-52 rounded-md"
        />
        <img
          src="/img/sri-isopanisad.jpg"
          alt="Bhagavad-Gita"
          class="h-44 sm:h-52 rounded-md"
        />
        <img
          src="/img/gloire-mysteres-inde.jpg"
          alt="Bhagavad-Gita"
          class="h-44 sm:h-52 rounded-md"
        />
      </div>
      <button class="btn btn-secondary mx-auto block mt-8">
        View All Products
      </button>
    </div>
  </div>
  <div class="bg-base-200 mx-auto pt-24 pb-32">
    <h2 class="text-3xl font-bold text-center mb-6">Contributing</h2>
    <p class="max-w-xl pt-2 pb-2 mx-4 sm:mx-auto text-center text-lg">
      All contributions made to New Mayapur directly support the maintenance of
      and preaching activities of its residents. Donate once or
      <b>become a member</b> today.
    </p>
    <div class="mt-12 mx-4 xl:w-1/2 2xl:w-1/3 lg:mx-auto">
      <img
        class="mb-12 mx-auto rounded-lg shadow-lg"
        src="/img/contribute.jpg"
      />
      <button class="btn btn-secondary w-64 md:w-96 mx-auto block">
        Donate Now
      </button>
    </div>
  </div>
  <div class="">
    <div class="mx-auto py-32 lg:px-1.5 xl:px-12 2xl:px-16">
      <div class="md:px-24 mx-4 lg:px-0 lg:flex flex-col lg:items-center mb-20">
        <div class="p-5 pb-6 lg:pb-4 inline bg-base-200 rounded-xl">
          <Icon name="ion:book-outline" size="28px" />
        </div>
        <h2 class="text-xl uppercase font-bold mt-8">Read Our Blog</h2>
        <p class="pt-3 lg:w-[800px] lg:text-center text-lg mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          unde pariatur quos temporibus, blanditiis cum praesentium at non
          officiis perferendis incidunt molestias sint maiores quisquam itaque
          mollitia est consectetur dignissimos deserunt, omnis iste. Deserunt,
          quaerat!
        </p>
      </div>
      <div
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
  <div class="pb-44 pt-24 flex items-center justify-center">
    <div class="md:border-2 border-base-300 md:p-8 pt-4 rounded-xl">
      <h2 class="text-md md:text-xl mb-4 text-center uppercase font-bold">
        Subscribe to our Newsletter
      </h2>
      <div class="form-control">
        <form class="input-group" @submit.prevent="subscribe">
          <input
            v-model="mail.value"
            placeholder="Your Email"
            class="input input-bordered max-w-sm md:w-[350px]"
            type="text"
            @change="v$.value.$touch"
            :class="{
              'border-red-500': v$.value.$error,
            }"
          />
          <button type="submit" class="btn px-6">Submit</button>
        </form>
        <p
          class="text-sm mt-2 text-center"
          :class="
            res.includes('registered') ? 'text-green-600' : 'text-red-600'
          "
        >
          {{ res }}
        </p>
        <p v-if="v$.value.$error" class="text-sm mt-2 text-center text-red-600">
          Please enter a valid email.
        </p>
      </div>
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

const events = await find("events", {
  sort: ["Start:desc"],
  filters: {
    Start: {
      $gt: new Date(),
    },
  },
});

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

const config = useRuntimeConfig();
</script>

<script>
import Glide from "@glidejs/glide";
import { Autoplay } from "@glidejs/glide/dist/glide.modular.esm";

export default {
  mounted() {
    let glide = new Glide(".glide", {
      autoplay: 5000,
    }).mount({ Autoplay });
  },
};
</script>

<style scoped>
@import "@glidejs/glide/dist/css/glide.core.min.css";
</style>
