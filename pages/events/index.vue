<template>
  <div class="py-16">
    <div class="w-[1280px] mx-auto">
      <h1 class="font-bold text-3xl mb-8">Our Events</h1>
      <div
        class="w-full rounded-xl flex border border-base-300 p-2 justify-between"
      >
        <div class="flex gap-2">
          <select
            v-model="filter"
            class="select select-bordered w-full max-w-xs"
          >
            <option value="" disabled selected>Tags</option>
            <option value="Temple">Temple</option>
            <option value="Discovery">Discovery</option>
            <option value="Retreat">Retreat</option>
          </select>
          <select class="select select-bordered w-full max-w-xs">
            <option disabled selected>Month</option>
            <option>January</option>
            <option>February</option>
            <option>March</option>
            <option>April</option>
            <option>June</option>
            <option>July</option>
            <option>August</option>
            <option>September</option>
            <option>October</option>
            <option>November</option>
            <option>December</option>
          </select>
        </div>
        <button
          class="btn btn-secondary btn-outline"
          @click="() => (filter = '')"
        >
          Clear Filters
        </button>
      </div>
      <div
        class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 container gap-16 mt-20"
      >
        <div
          v-for="event in events.data"
          class="card w-96 bg-base-100 shadow-xl"
        >
          <img
            :src="
              config.strapiBase +
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
                event.attributes.Description.split(" ").splice(0, 18).join(" ")
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
      <div class="flex items-center justify-center mb-20">
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
</template>

<script setup>
const { find } = useStrapi();

const filter = ref("");

const options = reactive({
  pageSize: 6,
  page: 1,
});

const events = ref(
  await find("events", {
    populate: ["Thumbnail"],
    pagination: options,
  })
);

watch(options, async (newValue, oldValue) => {
  if (filter.value === "") {
    events.value = await find("events", {
      populate: ["Thumbnail"],
      pagination: newValue,
    });
  } else {
    events.value = await find("events", {
      populate: ["Thumbnail"],
      pagination: newValue,
      filters: {
        Tag: {
          $eq: filter.value,
        },
      },
    });
  }
});

watch(filter, async (newValue, oldValue) => {
  if (newValue === "") {
    options.page = 1;
    events.value = await find("events", {
      populate: ["Thumbnail"],
      pagination: options,
    });
  } else {
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
