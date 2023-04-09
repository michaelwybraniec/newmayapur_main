<template>
  <div class="mx-4">
    <div class="container lg:w-[800px] sm:mx-auto mt-24 mb-8">
      <div class="md:mx-auto w-full bg-blue-500 rounded-xl grid md:grid-cols-2">
        <div class="flex md:ml-12 mx-16 max-md:mt-8 justify-center flex-col">
          <h2 class="text-white font-bold text-2xl md:text-3xl mb-3">
            Open House Sundays
          </h2>
          <p class="text-lg text-white">
            New Mayapur is <b>open for all</b> to visit every Sunday, from 12am
            to 4pm. Join in the kirtan and enjoy a delicious vegetarian lunch,
            all free of charge!
          </p>
        </div>
        <img
          src="/img/transp_castle.png"
          class="ml-auto rounded-br-xl max-w-xs lg:max-w-sm"
          alt=""
        />
      </div>
    </div>
  </div>
  <div class="pb-32 py-28 2xl:px-16">
    <div
      class="grid grid-cols-1 lg:grid-cols-3 px-4 2xl:px-20 items-start lg:gap-x-10 2xl:gap-x-16"
    >
      <div class="md:px-24 lg:px-0 mb-24 lg:mb-0">
        <div class="p-5 pb-6 mx-auto inline bg-base-200 rounded-xl mb-16">
          <Icon name="ion:flower-outline" size="28px" />
        </div>
        <h2 class="text-xl mt-12 uppercase font-bold">Immersion Weekends</h2>
        <p class="pt-3 text-lg">
          Our immersion weekends are a great way to get a head start on
          <i>vaisnava</i> traditions and culture. Spanning over the course of
          two days, those weekends are an introduction to the practice of
          timeless wisdom, and to show its relevance up to now.
        </p>
      </div>
      <div class="md:px-24 lg:px-0 mb-24 lg:mb-0">
        <div class="p-5 pb-6 mx-auto inline bg-base-200 rounded-xl mb-16">
          <Icon name="ion:sparkles-outline" size="28px" />
        </div>
        <h2 class="text-xl mt-12 uppercase font-bold">Retreats</h2>
        <p class="pt-3 text-lg">
          Full retreats are dedicated to specific topics (such as ayurveda or
          hatha-yoga, for example), last for a minimum of four days, and are a
          great way to take a deeper dive into the yoga tradition, with our team
          of passionate and qualified teachers.
        </p>
      </div>
      <div class="md:px-24 lg:px-0 mb-24 lg:mb-0">
        <div class="p-5 pb-6 mx-auto inline bg-base-200 rounded-xl mb-16">
          <Icon name="ion:sunny-outline" size="28px" />
        </div>
        <h2 class="text-xl mt-12 uppercase font-bold">Temple Festivals</h2>
        <p class="pt-3 text-lg">
          Festivals are the highlights of New Mayapur, and an integral part of
          <i>vaisnava</i> culture. They celebrate the appearance of Krishna, the
          Supreme Personality of Godhead, into our material realm, and are
          always a joyous occurence.
        </p>
      </div>
    </div>
  </div>
  <div class="bg-base-200">
    <div class="py-32 pb-24 mx-4">
      <div class="xl:w-[1250px] mx-auto">
        <h1 class="font-bold uppercase border-b-2 pb-1.5 text-xl mb-5">
          All Events
        </h1>
        <div
          class="w-full rounded-xl xl:mx-auto flex flex-col md:flex-row items-center justify-between"
        >
          <div class="flex flex-col md:flex-row gap-2 w-full md:max-w-xs">
            <select
              v-model="filter"
              class="select select-bordered w-100 md:max-w-xs xl:w-64"
            >
              <option value="" disabled selected>Category</option>
              <option value="Temple">Temple</option>
              <option value="Discovery">Discovery</option>
              <option value="Retreat">Retreat</option>
            </select>
            <select
              v-model="date.month"
              class="select select-bordered w-full md:w-40 xl:w-64"
            >
              <option value="" disabled selected>Month</option>
              <option value="01">January</option>
              <option value="02">February</option>
              <option value="03">March</option>
              <option value="04">April</option>
              <option value="05">May</option>
              <option value="06">June</option>
              <option value="07">July</option>
              <option value="08">August</option>
              <option value="09">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select>
          </div>
          <button
            class="btn mt-2 w-full md:w-36 md:mt-0 btn-secondary btn-outline"
            @click="() => ((filter = ''), (date.month = ''))"
          >
            Clear Filters
          </button>
        </div>
        <div
          v-if="events.data.length > 0"
          class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mx-auto gap-4 gap-y-8 2xl:gap-6 mt-6"
        >
          <div
            v-for="event in events.data"
            class="card max-w-md max-md mx-auto bg-base-100 shadow-xl"
          >
            <img
              :src="
                config.public.strapiBase +
                event.attributes.Thumbnail.data.attributes.formats.small.url
              "
              alt="Thumbnail"
              class="h-64 object-cover rounded-t-xl"
            />
            <div class="card-body">
              <div class="mb-1 flex gap-2">
                <div
                  class="py-1 px-2 rounded-md text-white font-bold"
                  :class="setTagsBg(event.attributes.Tag)"
                >
                  #{{ event.attributes.Tag }}
                </div>
                <div
                  class="py-1 px-2 rounded-md bg-red-700 text-white font-bold"
                  v-if="new Date(event.attributes.Start) < new Date()"
                >
                  Finished
                </div>
              </div>
              <h2 class="card-title">{{ event.attributes.Title }}</h2>
              <p>
                {{
                  event.attributes.Description.split(" ")
                    .splice(0, 18)
                    .join(" ")
                }}
                ...
              </p>
              <div
                class="flex gap-2 rounded-md border border-base-300 items-center bg-base-100 py-2 px-4 mt-2"
              >
                <Icon name="ion:calendar-outline" size="26px" class="mr-1" />
                <span class="font-bold"
                  >{{
                    new Date(event.attributes.Start).toLocaleString("en-GB", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })
                  }}
                </span>
                <span class="font-bold">/</span>
                <span class="font-bold">{{
                  new Date(event.attributes.End).toLocaleString("en-GB", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })
                }}</span>
              </div>
              <NuxtLink :to="'/events/' + event.id" class="btn btn-primary mt-4"
                >Read More</NuxtLink
              >
            </div>
          </div>
        </div>
        <div v-else class="mx-auto mt-44 mb-10">
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
        <div class="flex items-center justify-center">
          <div class="btn-group mt-20 mb-10">
            <button
              class="btn"
              v-for="(event, index) in events.meta.pagination.pageCount"
              @click="options.page = index + 1"
              :class="options.page === index + 1 ? 'btn-active' : ''"
            >
              {{ index + 1 }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { find } = useStrapi();

const filter = ref("");

const options = reactive({
  pageSize: 6,
  page: 1,
});

const date = reactive({
  firstDay: 1,
  year: new Date().getFullYear(),
  month: "",
});

const events = ref(
  await find("events", {
    populate: ["Thumbnail"],
    pagination: options,
    filters: {
      Start: {
        $gte: new Date(date.year, 0, 1),
      },
    },
  })
);

watch(options, async (newValue, oldValue) => {
  if (filter.value === "" && date.month === "") {
    events.value = await find("events", {
      populate: ["Thumbnail"],
      pagination: newValue,
    });
  } else if (filter.value !== "" && date.month === "") {
    events.value = await find("events", {
      populate: ["Thumbnail"],
      pagination: newValue,
      filters: {
        Tag: {
          $eq: filter.value,
        },
      },
    });
  } else if (filter.value === "" && date.month !== "") {
    events.value = await find("events", {
      populate: ["Thumbnail"],
      pagination: newValue,
      filters: {
        Start: {
          $gte: new Date(date.year + "-" + date.month + "-" + date.firstDay),
          $lte: new Date(
            date.year +
              "-" +
              date.month +
              "-" +
              new Date(date.year, date.month, 0).getDate()
          ),
        },
      },
    });
  } else {
    events.value = await find("events", {
      populate: ["Thumbnail"],
      pagination: newValue,
      filters: {
        Start: {
          $gte: new Date(date.year + "-" + date.month + "-" + date.firstDay),
          $lte: new Date(
            date.year +
              "-" +
              date.month +
              "-" +
              new Date(date.year, date.month, 0).getDate()
          ),
        },
        Tag: {
          $eq: filter.value,
        },
      },
    });
  }
});

watch(date, async (newValue, oldValue) => {
  if (filter.value === "" && newValue.month !== "") {
    options.page = 1;
    events.value = await find("events", {
      populate: ["Thumbnail"],
      pagination: options,
      filters: {
        Start: {
          $gte: new Date(
            newValue.year + "-" + newValue.month + "-" + newValue.firstDay
          ),
          $lte: new Date(
            newValue.year +
              "-" +
              newValue.month +
              "-" +
              new Date(newValue.year, newValue.month, 0).getDate()
          ),
        },
      },
    });
  } else if (filter.value !== "" && newValue.month !== "") {
    options.page = 1;
    events.value = await find("events", {
      populate: ["Thumbnail"],
      pagination: options,
      filters: {
        Start: {
          $gte: new Date(
            newValue.year + "-" + newValue.month + "-" + newValue.firstDay
          ),
          $lte: new Date(
            newValue.year +
              "-" +
              newValue.month +
              "-" +
              new Date(newValue.year, newValue.month, 0).getDate()
          ),
        },
        Tag: {
          $eq: filter.value,
        },
      },
    });
  } else if (newValue.month === "") {
    options.page = 1;
    events.value = await find("events", {
      populate: ["Thumbnail"],
      pagination: options,
    });
  }
});

watch(filter, async (newValue, oldValue) => {
  if (newValue === "" && date.month === "") {
    options.page = 1;
    events.value = await find("events", {
      populate: ["Thumbnail"],
      pagination: options,
    });
  } else if (newValue !== "" && date.month === "") {
    options.page = 1;
    events.value = await find("events", {
      populate: ["Thumbnail"],
      pagination: options,
      filters: {
        Tag: {
          $eq: newValue,
        },
      },
    });
  } else if (newValue === "" && date.month !== "") {
    options.page = 1;
    events.value = await find("events", {
      populate: ["Thumbnail"],
      pagination: options,
      filters: {
        Start: {
          $gte: new Date(date.year + "-" + date.month + "-" + date.firstDay),
          $lte: new Date(
            date.year +
              "-" +
              date.month +
              "-" +
              new Date(date.year, date.month, 0).getDate()
          ),
        },
      },
    });
  } else {
    options.page = 1;
    events.value = await find("events", {
      populate: ["Thumbnail"],
      pagination: options,
      filters: {
        Start: {
          $gte: new Date(date.year + "-" + date.month + "-" + date.firstDay),
          $lte: new Date(
            date.year +
              "-" +
              date.month +
              "-" +
              new Date(date.year, date.month, 0).getDate()
          ),
        },
        Tag: {
          $eq: newValue,
        },
      },
    });
  }
});

const setTagsBg = function (value) {
  if (value === "Temple") {
    return "bg-purple-600";
  } else if (value === "Discovery") {
    return "bg-blue-600";
  } else {
    return "bg-orange-600";
  }
};

const config = useRuntimeConfig();
</script>
