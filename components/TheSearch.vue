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
              item._meilisearch_id
                .toString()
                .replace('-', '')
                .replace(/[0-9]/g, '') +
              's/' +
              item._meilisearch_id
                .toString()
                .replace(/\D/g, '')
                .replace('-', '')
            "
            v-for="item in items"
            :key="item"
          >
            <li
              class="px-4 py-4 flex justify-between border-bottom hover:bg-base-200 hover:cursor-pointer"
            >
              <p>{{ item.Title }}</p>
              <span
                v-if="item._meilisearch_id.toString().includes('event')"
                class="px-2 py-0.5 font-bold rounded-md text-white bg-primary"
                >Event</span
              >
              <span
                v-else
                class="px-2 py-0.5 font-bold rounded-md text-white bg-secondary"
                >Blog</span
              >
            </li>
            <li v-if="!item.Title">Nothing</li>
          </NuxtLink>
          <ais-state-results>
            <template v-slot="{ state: { query }, results: { hits } }">
              <div v-show="!hits.length" class="p-4 flex items-center gap-2">
                <Icon name="ion:close-circle-outline" size="28px" />
                No results found for this query.
              </div>
            </template>
          </ais-state-results>
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
  AisStateResults,
} from "vue-instantsearch/vue3/es";
import { ref } from "vue";
const client = useMeilisearchClient();

let focused = ref(false);

const delay = function () {
  setTimeout(() => (focused.value = false), 180);
};
</script>
