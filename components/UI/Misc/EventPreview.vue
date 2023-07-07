<template>
  <div v-if="props.locale === 'en'">
    <div class="mx-auto pt-24 pb-32 lg:px-6 2xl:px-16">
      <div class="md:px-24 mx-4 lg:px-0 lg:flex flex-col lg:items-center mb-20">
        <div class="p-5 pb-6 lg:pb-4 inline bg-base-200 rounded-xl">
          <Icon name="ion:calendar-outline" size="28px" />
        </div>
        <h2
          class="text-xl uppercase font-bold mt-8"
          v-if="props.locale === 'en'"
        >
          Upcoming Events
        </h2>
        <h2 class="text-xl uppercase font-bold mt-8" v-else>
          Évenements à Venir
        </h2>
        <p
          class="pt-3 lg:w-[800px] lg:text-center text-lg mt-2"
          v-if="props.locale === 'en'"
        >
          Discover the science of <i>yoga</i> in all of its variety. From
          practicing asanas to learning the ancient philosophy of
          <b>Sanskrit</b> texts, or simply getting introduced to our place, we
          offer a variety of events all year round.
        </p>
        <p class="pt-3 lg:w-[800px] lg:text-center text-lg mt-2" v-else>
          Découvrez la science du <i>yoga</i> dans toute sa variété. De la
          pratique des asanas à l'apprentissage des textes <b>Sanskrit</b>, nous
          offrons une variété d'évènements et ateliers au cours de l'année.
        </p>
      </div>
      <div
        class="grid grid-cols-1 lg:grid-cols-3 mx-auto 2xl:w-[1300px] px-4 2xl:px-20 items-center gap-x-4"
      >
        <div
          v-for="event in events.data"
          class="card mt-6 h-[430px] md:mx-auto max-w-sm bg-base-100 shadow-xl"
        >
          <figure>
            <img
              :src="
                config.public.strapiBase +
                event.attributes.Thumbnail.data.attributes.formats.small.url
              "
              class="h-52 w-full object-cover"
              alt="Shoes"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">
              {{ event.attributes.Title.substr(0, 16) + "..." }}
            </h2>
            <p>{{ event.attributes.Description.substr(0, 65) + "..." }}</p>
            <div class="flex justify-end">
              <NuxtLink
                :to="'events/' + event.attributes.Slug"
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
const props = defineProps(["locale"]);

const { find } = useStrapi();

const events = await find("events", {
  pagination: {
    pageSize: 3,
    page: 1,
  },
  populate: "Thumbnail",
  sort: ["publishedAt:desc"],
});

const config = useRuntimeConfig();
</script>
