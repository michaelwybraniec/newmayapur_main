<template>
  <div id="map" class="rounded-xl map mx-auto pt-24">
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

<style>
.map {
  @media (min-width: 10px) {
    height: 350px;
    width: 350px;
  }

  @media (min-width: 420px) {
    height: 420px;
    width: 420px;
  }

  @media (min-width: 900px) {
    height: 600px;
    width: 800px;
  }
}
</style>
