<template>
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
          <NuxtLink :to="'/events/' + event.Slug"
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
</template>

<script setup>
const { find } = useStrapi();

const events = await find("events", {
  sort: ["Start:asc"],
  filters: {
    Start: {
      $gt: new Date(),
    },
  },
  pagination: {
    pageSize: 3,
    page: 1,
  },
});
</script>
