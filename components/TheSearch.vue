<template>
  <ais-instant-search :search-client="client" index-name="event">
    <ais-configure :hits-per-page.camel="10" />
    <ais-search-box>
      <template v-slot="{ currentRefinement, isSearchStalled, refine }">
        <input
          type="search"
          id="search"
          class="input input-bordered w-full"
          placeholder="Search..."
          :value="currentRefinement"
          @input="refine($event.currentTarget.value)"
          @focus="focused = true"
          @blur="delay"
        />
        <span :hidden="!isSearchStalled">Loading...</span>
      </template>
    </ais-search-box>
    <ais-hits v-if="focused">
      <template v-slot="{ items }">
        <ul
          class="mt-4 border-2 border-base-300 bg-base-100 z-50 rounded-xl w-[400px] absolute left-1/2 overflow-auto -translate-x-1/2"
        >
          <NuxtLink
            :to="
              '/' +
              id.replace('-', '').replace(/[0-9]/g, '') +
              's/' +
              id.replace(/\D/g, '').replace('-', '')
            "
            v-for="{ id, Title } in items"
            :key="id"
          >
            <li
              class="px-4 py-4 flex justify-between border-bottom hover:bg-base-200 hover:cursor-pointer"
            >
              <p>{{ Title }}</p>
              <span
                v-if="id.includes('event')"
                class="px-2 py-0.5 font-bold rounded-md text-white bg-primary"
                >Event</span
              >
              <span
                v-else
                class="px-2 py-0.5 font-bold rounded-md text-white bg-secondary"
                >Blog</span
              >
            </li>
          </NuxtLink>
        </ul>
      </template>
    </ais-hits>
  </ais-instant-search>
</template>

<script setup>
import {
  AisInstantSearch,
  AisHits,
  AisSearchBox,
  AisConfigure,
} from "vue-instantsearch/vue3/es";
import { ref } from "vue";
const client = useMeilisearchClient();

let focused = ref(false);

const delay = function () {
  setTimeout(() => (focused.value = false), 180);
};
</script>
