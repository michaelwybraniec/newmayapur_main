<template>
  <UtilitiesTranslateContent :renderComponent="renderComponent">
    <div class="pt-24 2xl:px-10">
      <UIAlertInformation
        :text="content.data.attributes.Information"
        class="!-pb-20"
      />
    </div>
    <div class="mx-4">
      <div class="container lg:w-[800px] sm:mx-auto mt-24 mb-8">
        <div
          class="md:mx-auto w-full bg-blue-500 rounded-xl grid md:grid-cols-2"
        >
          <div class="flex md:ml-12 mx-16 max-md:mt-8 justify-center flex-col">
            <h2 class="text-white font-bold text-2xl mb-3">
              {{
                locale === "en"
                  ? "Open House Sundays"
                  : "Dimanche Porte Ouverte"
              }}
            </h2>
            <p class="text-lg text-white">
              {{
                locale === "en"
                  ? "New Mayapur is open for all to visit every Sunday, from 12:30am to 7:30pm. Join in the kirtan, visit the domain, and get a delicious vegetarian lunch, all free of charge!"
                  : "La Nouvelle Mayapur est ouverte tous les dimanches, de 12h30 à 19h30. Participez à un kirtan, visitez le domaine et prenez un délicieux déjeuner végétarien, le tout gratuitement !"
              }}
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
    <UISectionParagraphWrapperThree
      :section0="content.data.attributes.Thirds.Section0"
      :section1="content.data.attributes.Thirds.Section1"
      :section2="content.data.attributes.Thirds.Section2"
      :bg-color="content.data.attributes.Thirds.BgColor"
    />
    <div class="bg-base-200">
      <div class="py-32 pb-24 mx-4">
        <div class="xl:w-[1250px] mx-auto">
          <h1 class="font-bold uppercase border-b-2 pb-1.5 text-xl mb-5">
            All Events
          </h1>
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
                    :class="setColor(event.attributes.Tag)"
                  >
                    #{{ event.attributes.Tag }}
                  </div>
                  <div
                    class="py-1 px-2 rounded-md bg-orange-600 text-white font-bold"
                    v-if="
                      new Date(event.attributes.Start) < new Date() &&
                      new Date(event.attributes.End) > new Date()
                    "
                  >
                    Happening Now
                  </div>
                  <div
                    class="py-1 px-2 rounded-md bg-red-600 text-white font-bold"
                    v-else-if="
                      !event.attributes.End &&
                      new Date(event.attributes.Start) < new Date()
                    "
                  >
                    Finished
                  </div>
                  <div
                    class="py-1 px-2 rounded-md bg-red-600 text-white font-bold"
                    v-else-if="
                      event.attributes.End &&
                      new Date(event.attributes.End) < new Date()
                    "
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
                  <span class="font-bold" v-if="event.attributes.End">/</span>
                  <span class="font-bold" v-if="event.attributes.End">{{
                    new Date(event.attributes.End).toLocaleString("en-GB", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })
                  }}</span>
                </div>
                <NuxtLink
                  :to="'/events/' + event.attributes.Slug"
                  class="btn btn-primary mt-4"
                  >Read More</NuxtLink
                >
              </div>
            </div>
          </div>
          <div v-else class="mx-auto mt-44 mb-10">
            <div class="flex items-center flex-col">
              <div class="p-5 pb-5 mx-auto inline bg-base-100 rounded-xl mb-10">
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
  </UtilitiesTranslateContent>
</template>

<script setup>
import { useLocaleStore } from "../../stores/locale";
import { storeToRefs } from "pinia";

const { find } = useStrapi();
const store = useLocaleStore();
const { locale } = storeToRefs(store);
const renderComponent = ref(true);

let content = await find("event-page", {
  populate: {
    Thirds: {
      populate: "*",
    },
  },
  locale: locale.value,
});

const options = reactive({
  pageSize: 6,
  page: 1,
});

const date = reactive({
  firstDay: 1,
  year: new Date().getFullYear,
  month: "",
});

const events = ref(
  await find("events", {
    populate: ["Thumbnail"],
    pagination: options,
    filters: {
      Start: {
        $gte: new Date(new Date().setDate(new Date().getDate() - 7)),
      },
    },
    sort: ["Start:asc"],
    locale: locale.value,
  })
);

watch(options, async (newValue) => {
  events.value = await find("events", {
    populate: ["Thumbnail"],
    pagination: newValue,
    filters: {
      Start: {
        $gte: new Date(new Date().setDate(new Date().getDate() - 7)),
      },
    },
    sort: ["Start:asc"],
    locale: locale.value,
  });
});

watch(locale, async (newValue) => {
  renderComponent.value = false;
  events.value = await find("events", {
    populate: ["Thumbnail"],
    pagination: options,
    filters: {
      Start: {
        $gte: new Date(new Date().setDate(new Date().getDate() - 7)),
      },
    },
    sort: ["Start:asc"],
    locale: newValue,
  });

  content = await find("event-page", {
    populate: {
      Thirds: {
        populate: "*",
      },
    },
    locale: locale.value,
  });
  await sleep(900);
  renderComponent.value = true;
});

const config = useRuntimeConfig();

useHead({
  title: "New Mayapur - Events",
});
</script>
