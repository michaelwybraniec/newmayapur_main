<template>
  <div class="bg-base-200 py-28 lg:px-16">
    <div
      class="grid grid-rows-1 lg:grid-cols-2 px-4 lg:px-20 items-center gap-x-4"
    >
      <div class="order-2 lg:order-1 md:px-24 lg:px-0">
        <h2 class="text-xl uppercase font-bold">Retreat Center</h2>
        <p class="pt-3">
          New Mayapur is situated in a haven of peace, amongst the forests and
          fields of Indre, in the center of France. What better setting to take
          a break from the hustle and bustle of your everyday life? We organize
          regular events centered around the discovery and practice of yoga and
          its adjacent culture, be it ahimsa cooking, a natural lifestyle, or
          study of spirituality.
        </p>
      </div>
      <img
        class="order-1 lg:max-w-lg max-w-xs md:max-w-md lg:order-2 mb-12 lg:mb-0 md:mb-24 lg:ml-auto lg:mr-0 mx-auto rounded-lg"
        src="/img/meditation.jpg"
      />
    </div>
  </div>
  <div class="pb-32 pt-28 lg:px-10 lg:w-[1000px] mx-auto">
    <h2 class="text-2xl font-bold text-center mb-2">Our Events</h2>
    <p class="max-w-xl pt-2 pb-2 md:mx-auto text-center mb-16 mx-4lay">
      Discover the ancient science of yoga in all of its variety. From
      practicing asanas to learning the ancient philosophy of Sanskrit texts, or
      simply getting introduced to our place, we offer a variety of events all
      year round.
    </p>
    <div
      class="flex flex-col mx-4 md:flex-row gap-4 items-center justify-center mb-16"
    >
      <img class="md:h-[245px] rounded-xl" src="/img/yoga.jpg" />
      <img class="md:h-[245px] rounded-xl" src="/img/food.jpg" />
    </div>
    <div class="mx-4">
      <div
        tabindex="0"
        class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
      >
        <input type="checkbox" />
        <div class="collapse-title text-xl font-medium">Open House Sundays</div>
        <div class="collapse-content">
          <p>
            Sustainability is currently the biggest challenge facing humanity,
            and the practice of ecology is one of the core principle that will
            enable us to create a healthy, long-lasting civilization. As such,
            we in New Mayapur endeavour to permeate all of our activities with a
            respect for nature and its gifts.
          </p>
        </div>
      </div>
      <div
        tabindex="0"
        class="collapse collapse-plus border mt-4 border-base-300 bg-base-100 rounded-box"
      >
        <input type="checkbox" />
        <div class="collapse-title text-xl font-medium">Immersion Weekend</div>
        <div class="collapse-content">
          <p>
            Our farm is home to two Jersey cows, who provide us with their milk
            every day, along with their two calves. We also have a herd of four
            billys who help us clean the forest by eating thorn bushes and other
            unwanted vegetation. We take pride in the fact that none of the
            animals we care for will ever see a slaughterhouse, and we therefore
            shelter older bovids who might not be productive anymore, and who
            would have seen their lives terminated in other structures.
          </p>
        </div>
      </div>
      <div
        tabindex="0"
        class="collapse collapse-plus mt-4 border border-base-300 bg-base-100 rounded-box"
      >
        <input type="checkbox" />
        <div class="collapse-title text-xl font-medium">Full Retreats</div>
        <div class="collapse-content">
          <p>
            "All living bodies subsist on food grains, which are produced from
            rain. Rains are produced by performance of <i>yajna</i> [sacrifice],
            and <i>yajna</i> is born of prescribed duties" (Bhagavad-Gita, 3.14)
          </p>
          <p class="mt-2">
            Grains are the staple of a balanced diet. If we are to reach full
            self-sufficiency, we will have to provide grains daily to all the
            members of our community. We currently have a few fields dedicated
            to the production of wheat and amaranth, with which we are
            manufacturing flour and baking bread throughout the year.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div>
    <div class="mx-auto py-32 pt-8 lg:px-16">
      <div
        class="grid grid-cols-1 lg:grid-cols-4 px-4 lg:px-20 items-center gap-x-4"
      >
        <div class="md:px-24 lg:px-0 lg:col-span-2">
          <div class="p-5 pb-6 mx-auto inline bg-base-200 rounded-xl mb-16">
            <Icon name="ion:calendar-outline" size="28px" />
          </div>
          <h2 class="text-xl uppercase font-bold mt-12">Upcoming Events</h2>
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
</template>

<script setup>
const { find } = useStrapi();

const mail = reactive({ value: "" });
const res = ref("");

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
