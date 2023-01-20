<template>
  <div
    class="hero min-h-screen"
    style="background-image: url(https://placeimg.com/1920/1080/arch)"
  >
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="hero-content text-center text-neutral-content">
      <div class="max-w-md">
        <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
        <p class="mb-5">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.
        </p>
      </div>
    </div>
  </div>
  <div class="pb-24 pt-36 lg:px-10">
    <div
      class="grid grid-cols-1 lg:grid-cols-3 px-4 lg:px-20 items-start gap-x-16"
    >
      <div class="order-2 lg:order-1 md:px-24 lg:px-0 mb-24 lg:mb-0">
        <div class="p-5 pb-6 mx-auto inline bg-base-200 rounded-xl mb-16">
          <Icon name="ion:map-outline" size="28px" />
        </div>
        <h2 class="text-xl mt-12 uppercase font-bold">How to Come</h2>
        <p class="pt-3">
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
        <p class="pt-3">
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
        <p class="pt-3">
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
    class="pb-32 lg:pt-24 lg:px-28 grid grid-cols-1 mx-2 lg:mx-0 lg:grid-cols-2 gap-24"
  >
    <div>
      <h2 class="text-2xl font-bold border-b-2 border-base-300 pb-2">
        Upcoming Events
      </h2>
      <ul class="mt-10">
        <li
          v-for="event in events.data"
          class="mt-8 flex flex-col lg:flex-row items-start"
        >
          <div
            class="bg-primary px-2 py-0.5 rounded-md mt-0.5 text-white font-bold mr-4"
          >
            {{
              new Date(event.attributes.Start).toLocaleString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })
            }}
          </div>
          <div class="lg:w-4/5 mt-2 lg:mt-0">
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
    <p class="max-w-xl pt-2 pb-2 mx-2 sm:mx-auto text-center">
      All contributions made to New Mayapur directly support the maintenance of
      the property and its residents, and are making innovative preaching
      ventures possible. Donate once or <b>become a member</b> today.
    </p>
    <div
      class="p-7 rounded-xl shadow-md bg-base-100 mt-12 mx-2 lg:w-1/3 lg:mx-auto"
    >
      <img class="mb-6 mx-auto rounded-lg" src="/img/contribute.jpg" />
      <button class="btn btn-secondary ml-auto block">Donate Now</button>
    </div>
  </div>
  <div class="">
    <div class="mx-auto py-32 lg:px-16">
      <div
        class="grid grid-cols-1 lg:grid-cols-4 px-4 lg:px-20 items-center gap-x-4"
      >
        <div class="md:px-24 lg:px-0 lg:col-span-2">
          <div class="p-5 pb-6 mx-auto inline bg-base-200 rounded-xl mb-16">
            <Icon name="ion:book-outline" size="28px" />
          </div>
          <h2 class="text-xl uppercase font-bold mt-12">Read Our Blog</h2>
          <p class="pt-3 md:w-3/4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            unde pariatur quos temporibus, blanditiis cum praesentium at non
            officiis perferendis incidunt molestias sint maiores quisquam itaque
            mollitia est consectetur dignissimos deserunt, omnis iste. Deserunt,
            quaerat!
          </p>
        </div>
        <div
          v-for="post in posts.data"
          class="card mt-6 md:mx-auto lg:mx-0 max-w-sm bg-base-100 shadow-xl"
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
              {{ post.attributes.Title.substr(0, 16) + "..." }}
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
            v-model="email"
            placeholder="Your Email"
            class="input input-bordered max-w-sm md:w-[350px]"
            type="email"
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
      </div>
    </div>
  </div>
</template>

<script setup>
const { find } = useStrapi();

const email = ref("");
const res = ref("");

const subscribe = async () => {
  const { data, pending, error, refresh } = await useFetch("/api/mailchimp", {
    method: "POST",
    body: { email: email.value },
  });

  res.value = error.value
    ? "Oops! Something went wrong. Please try again later."
    : "Your subscription has been registered.";
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
    pageSize: 2,
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
