<template>
  <div
    id="map"
    style="height: 600px; width: 800px"
    class="rounded-xl mx-auto pt-24 overflow-auto"
  >
    <l-map
      class="z-10"
      ref="map"
      :useGlobalLeaflet="false"
      v-model:zoom="zoom"
      :center="[47.085605560944096, 1.404755961360667]"
      :minZoom="3"
      :maxZoom="14"
    >
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      ></l-tile-layer>
      <l-marker :lat-lng="[47.085605560944096, 1.404755961360667]" draggable>
        <l-popup> ISKCON New Mayapur </l-popup></l-marker
      >
    </l-map>
  </div>
  <div class="py-24 pb-32 lg:px-10">
    <h2 class="text-3xl font-bold text-center mb-16">How to Reach Us</h2>
    <div
      class="mb-32 border-2 flex gap-4 border-base-300 px-5 py-4 rounded-lg max-w-lg mx-auto"
    >
      <Icon name="ion:information-circle-outline" size="72px" />
      <span
        >We can make a bus reservation for you on demand, and provide a pick-up
        service from anywhere. To request a lift, please do so when booking your
        room.</span
      >
    </div>
    <div
      class="grid grid-cols-1 lg:grid-cols-3 px-4 lg:px-20 items-start gap-x-16"
    >
      <div class="order-2 lg:order-1 md:px-24 lg:px-0 mb-24 lg:mb-0">
        <div class="p-5 pb-6 mx-auto inline bg-base-200 rounded-xl mb-16">
          <Icon name="ion:airplane-outline" size="28px" />
        </div>
        <h2 class="text-xl mt-12 uppercase font-bold">By Plane</h2>
        <p class="pt-3">
          If you are coming from the Paris-Charles de Gaulle airport, TGVs are
          available from the airport directly to the Saint Pierre des Corps
          train station. It is also possible to reach the Paris-Austerlitz train
          station by metro, to then take a train to Chateauroux. Once in
          Chateauroux, a bus can drop you off in front of New Mayapur.
        </p>
      </div>
      <div class="order-2 lg:order-1 md:px-24 lg:px-0 mb-24 lg:mb-0">
        <div class="p-5 pb-6 mx-auto inline bg-base-200 rounded-xl mb-16">
          <Icon name="ion:train-outline" size="28px" />
        </div>
        <h2 class="text-xl mt-12 uppercase font-bold">By Train</h2>
        <p class="pt-3">
          If you are coming from the Paris city-center, it is best to take a
          train to Châteauroux from the Paris-Austerlitz train station. From
          Châteauroux, buses are available, going to the following destinations:
          Ecueillé/Luçay-le-Mâle at 5.30 pm & 6:25pm (Monday to Friday, Saturday
          5:30pm only). <br />For booking your trip, call the day before:
          <b>+33 800 77 86 21</b>
        </p>
      </div>
      <div class="order-2 lg:order-1 md:px-24 lg:px-0 mb-24 lg:mb-0">
        <div class="p-5 pb-6 mx-auto inline bg-base-200 rounded-xl mb-16">
          <Icon name="ion:car-outline" size="28px" />
        </div>
        <h2 class="text-xl mt-12 uppercase font-bold">By Car</h2>
        <p class="pt-3">
          From <b>Paris</b>, follow: Orléans – Vierzon – Châteauroux – Blois –
          Valençay – Luçay-le-Mâle – Ecueillé. From <b>Tours</b>, follow:
          Chateauroux – St Aignan-sur-Cher – Ecueillé. Once in Ecueillé, on the
          main square, look for the Credit Agricole bank and drive down the road
          facing it (D13). Stay on this road for about 2km, then turn right on
          the D109 (you will cross a small railroad). Follow this road for about
          4km and you will see the castle on your right.
        </p>
      </div>
    </div>
  </div>
  <div class="bg-base-200 py-32 lg:px-16">
    <div
      class="grid grid-rows-1 lg:grid-cols-2 px-4 lg:px-20 items-start gap-x-32"
    >
      <div class="order-2 lg:order-1 md:px-24 lg:px-0">
        <h2 class="text-xl uppercase font-bold">Contact</h2>
        <p class="pt-3">
          You have a question, or you would like to share with us your ideas and
          suggestions? Please reach out to us using the form below.
        </p>
        <form class="mt-6">
          <div class="grid grid-cols-2 gap-2">
            <input
              type="text"
              placeholder="Name"
              class="input input-bordered w-full"
            /><input
              type="email"
              placeholder="Email"
              class="input input-bordered w-full"
            />
          </div>
          <textarea
            class="textarea textarea-bordered resize-none text-base w-full mt-3"
            placeholder="Your Message"
            rows="6"
          ></textarea>
          <button class="btn btn-primary ml-auto mt-3 block w-40">
            Submit
          </button>
        </form>
      </div>
      <div class="order-1 lg:order-2 md:px-24 lg:px-0" id="contact">
        <h2 class="text-xl uppercase font-bold">Find us Online</h2>
        <div class="grid grid-cols-3 gap-3 mt-8">
          <div
            class="p-4 rounded-xl bg-base-100 flex items-center justify-center gap-4"
          >
            <Icon name="ion:logo-instagram" size="42px" />
            <p class="font-bold uppercase">Instagram</p>
          </div>
          <div
            class="p-4 rounded-xl bg-base-100 flex items-center justify-center gap-4"
          >
            <Icon name="ion:logo-facebook" size="42px" />
            <p class="font-bold uppercase">Facebook</p>
          </div>
          <div
            class="p-4 rounded-xl bg-base-100 flex items-center justify-center gap-4"
          >
            <Icon name="ion:logo-youtube" size="42px" />
            <p class="font-bold uppercase">YouTube</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker, LPopup } from "@vue-leaflet/vue-leaflet";

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
  },
  data() {
    return {
      zoom: 14,
    };
  },
};
</script>
