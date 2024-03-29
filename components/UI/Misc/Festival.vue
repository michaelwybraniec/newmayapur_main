<template>
  <div class="hero py-32 bg-base-200">
    <div class="hero-content flex-col lg:flex-row">
      <img
        :src="props.img"
        class="max-w-xs max-lg:mb-8 md:max-w-md rounded-lg shadow-2xl"
      />
      <div class="lg:ml-16">
        <div class="flex">
          <div
            class="flex gap-2 mb-6 items-center bg-base-100 py-2 px-4 rounded-xl"
          >
            <Icon name="ion:calendar-outline" size="26px" class="mr-1" />
            <span class="font-bold">{{ props.start }} </span>
            <span class="font-bold" v-if="props.end">/</span>
            <span class="font-bold" v-if="props.end">{{ props.end }}</span>
          </div>
        </div>
        <h1 class="text-5xl font-bold">{{ props.title }}</h1>
        <UtilitiesMarkdown :content="props.description" class="py-6" />
        <NuxtLink
          :disabled="props.full || props.organizerContact"
          to="https://booking.newmayapur.com"
          class="btn btn-primary w-44"
          :class="new Date(props.start) < new Date() ? 'btn-disabled' : ''"
        >
          Book Your Stay
        </NuxtLink>
      </div>
    </div>
  </div>
  <div class="xl:w-[1280px] mx-4 xl:mx-auto pt-28 pb-44" v-if="days.length > 0">
    <h2 class="text-3xl font-bold text-center mb-6">Schedule</h2>
    <div
      class="grid grid-cols-1 max-md:space-y-8 gap-6"
      :class="days.length !== 1 ? 'md:grid-cols-2' : 'mx-auto md:w-[620px]'"
    >
      <div v-for="day in days" class="flex items-center flex-col">
        <div
          class="py-1 px-3 rounded-md bg-primary text-white font-bold text-center inline"
        >
          {{
            new Date(day.attributes.Date).toLocaleDateString(locale, {
              weekday: "long",
            })
          }}
        </div>
        <div
          class="border-2 mt-4 w-full overflow-auto border-base-300 rounded-2xl"
        >
          <table class="table table-zebra w-full">
            <!-- head -->
            <thead>
              <tr>
                <th></th>
                <th>Time</th>
                <th>Activity</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(activity, index) in day.attributes.Activity">
                <th class="text-gray-300">{{ index + 1 }}</th>
                <td>
                  {{ activity.Time.slice(0, 5) }}
                </td>
                <td>{{ activity.Subject }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <div v-if="lang === 'en'">
    <div
      :class="days.length > 0 ? 'bg-base-200' : ''"
      v-if="!props.organizerContact"
    >
      <div class="lg:w-[900px] mx-4 lg:mx-auto pt-28 pb-36">
        <h2 class="text-3xl font-bold text-center mb-6">Interested?</h2>
        <p class="max-w-xl pt-2 pb-2 mx-auto text-center mb-16">
          Book your stay in our fully furnished guesthouse. We provide a variety
          of rooms; both <b>en suite</b> and with shared bathrooms, for families
          and individuals alike.
        </p>
        <div
          class="p-6 rounded-xl shadow-lg mt-20 grid md:grid-cols-2 gap-4 bg-base-100"
        >
          <div class="rounded-md p-4 bg-base-200">
            <div class="flex justify-between">
              <p class="text-2xl font-bold">Price</p>
              <span
                class="text-xl uppercase font-bold bg-red-300 rounded-md px-2 py-0.5"
                >{{ props.full ? "FULL" : "FREE" }}</span
              >
            </div>
            <p class="italic">Without Accomodation</p>
          </div>
          <div
            class="border-2 rounded-md border-base-300 flex max-md:flex-col justify-center items-center p-4 gap-2"
          >
            <NuxtLink
              :disabled="props.full"
              to="https://booking.newmayapur.com"
              class="btn btn-secondary w-full"
              >Book Your Stay</NuxtLink
            >
          </div>
        </div>
      </div>
    </div>
    <div :class="days.length > 0 ? 'bg-base-200' : ''" v-else>
      <div class="lg:w-[900px] mx-4 lg:mx-auto pt-28 pb-36">
        <h2 class="text-3xl font-bold text-center mb-6">Interested?</h2>
        <p class="max-w-xl pt-2 pb-2 mx-auto text-center mb-16">
          Book your stay in our fully furnished guesthouse. We provide a variety
          of rooms; both <b>en suite</b> and with shared bathrooms, for families
          and individuals alike.
        </p>
        <div
          class="p-6 rounded-xl shadow-lg mt-20 grid md:grid-cols-2 gap-4 bg-base-100"
        >
          <div>
            <h2
              class="uppercase text-lg font-bold text-center flex items-center justify-center h-full p-4 bg-base-200 rounded-lg"
            >
              Contact the Organizers
            </h2>
          </div>
          <div
            class="border-2 rounded-md border-base-300 flex max-md:flex-col justify-center items-center p-4 gap-2 text-lg italic"
          >
            {{ props.organizerContact.replace("@", "[at]") }}
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <div
      :class="days.length > 0 ? 'bg-base-200' : ''"
      v-if="!props.organizerContact"
    >
      <div class="lg:w-[900px] mx-4 lg:mx-auto pt-28 pb-36">
        <h2 class="text-3xl font-bold text-center mb-6">Intéressé(e) ?</h2>
        <p class="max-w-xl pt-2 pb-2 mx-auto text-center mb-16">
          Réservez votre séjour dans notre maison d'hôtes entièrement meublée.
          Nous proposons une grande variété de chambres, avec salle de bains
          privative ou commune, pour les familles comme pour les voyageurs
          individuels.
        </p>
        <div
          class="p-6 rounded-xl shadow-lg mt-20 grid md:grid-cols-2 gap-4 bg-base-100"
        >
          <div class="rounded-md p-4 bg-base-200">
            <div class="flex justify-between">
              <p class="text-2xl font-bold">Prix</p>
              <span
                class="text-xl uppercase font-bold bg-red-300 rounded-md px-2 py-0.5"
                >{{ props.full ? "FULL" : "FREE" }}</span
              >
            </div>
            <p class="italic">Sans Accomodation</p>
          </div>
          <div
            class="border-2 rounded-md border-base-300 flex max-md:flex-col justify-center items-center p-4 gap-2"
          >
            <NuxtLink
              :disabled="props.full"
              to="https://booking.newmayapur.com"
              class="btn btn-secondary w-full"
              >Réserver</NuxtLink
            >
          </div>
        </div>
      </div>
    </div>
    <div :class="days.length > 0 ? 'bg-base-200' : ''" v-else>
      <div class="lg:w-[900px] mx-4 lg:mx-auto pt-28 pb-36">
        <h2 class="text-3xl font-bold text-center mb-6">Intéressé(e) ?</h2>
        <p class="max-w-xl pt-2 pb-2 mx-auto text-center mb-16">
          Réservez votre séjour dans notre maison d'hôtes entièrement meublée.
          Nous proposons une grande variété de chambres, avec salle de bains
          privative ou commune, pour les familles comme pour les voyageurs
          individuels.
        </p>
        <div
          class="p-6 rounded-xl shadow-lg mt-20 grid md:grid-cols-2 gap-4 bg-base-100"
        >
          <div>
            <h2
              class="uppercase text-lg font-bold text-center flex items-center justify-center h-full p-4 bg-base-200 rounded-lg"
            >
              Contacter les Organisateurs
            </h2>
          </div>
          <div
            class="border-2 rounded-md border-base-300 flex max-md:flex-col justify-center items-center p-4 gap-2 text-lg italic"
          >
            {{ props.organizerContact.replace("@", "[at]") }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useLocaleStore } from "../../../stores/locale";
import { storeToRefs } from "pinia";

const store = useLocaleStore();
const { locale } = storeToRefs(store);

const props = defineProps([
  "img",
  "start",
  "end",
  "title",
  "description",
  "days",
  "full",
  "organizerContact",
  "lang",
]);
</script>
