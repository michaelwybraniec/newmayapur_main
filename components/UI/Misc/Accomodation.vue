<template>
  <div class="bg-base-200 py-28 lg:px-16" v-if="props.locale === 'en'">
    <div
      class="grid grid-rows-1 2xl:grid-cols-2 px-4 2xl:px-20 items-center gap-x-4"
    >
      <div class="order-2 2xl:order-2 md:px-24 2xl:px-0">
        <h2 class="text-xl uppercase font-bold">On-site Accomodation</h2>
        <p class="pt-3 text-lg">
          Book a room in our fully furnished, comfortable guest-house for the
          duration of your stay.
        </p>
        <div class="grid md:grid-cols-2 gap-12 lg:gap-x-8 xl:gap-x-16 mt-10">
          <div>
            <h2 class="font-bold uppercase text-xl">47 Beds</h2>
            <h3 class="italic text-lg">Shared Bathroom</h3>
            <ul class="mt-4 text-lg">
              <li>💤 1 Single Room</li>
              <li>💤 8 Double Rooms</li>
              <li>💤 1 Triple Room</li>
              <li>💤 6 Family Rooms (3 to 5 Beds)</li>
            </ul>
          </div>
          <div>
            <h2 class="font-bold uppercase text-xl">22 Beds</h2>
            <h3 class="italic text-lg">Private Bathrooms</h3>
            <ul class="mt-4 text-lg">
              <li>💤 1 Single Room</li>
              <li>💤 6 Double Rooms</li>
              <li>💤 1 Triple Room</li>
              <li>💤 1 Four Beds Room</li>
            </ul>
          </div>
        </div>
      </div>
      <img
        class="order-1 lg:max-w-lg max-w-xs md:max-w-md 2xl:order-1 mb-12 2xl:mb-0 md:mb-24 2xl:mr-auto 2xl:ml-0 mx-auto rounded-lg"
        src="/img/bed.jpg"
      />
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["locale"]);
</script>
