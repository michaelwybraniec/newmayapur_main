<template>
  <div class="order-2 lg:order-1 md:px-24 lg:px-0 mb-24 lg:mb-0">
    <div
      :class="props.bgColor === 'Gray' ? 'bg-base-100' : 'bg-base-200'"
      class="p-5 pb-6 mx-auto inline rounded-xl mb-16"
    >
      <Icon :name="'ion:' + data.IonIcon" size="28px" />
    </div>
    <h2 class="text-xl mt-12 uppercase font-bold">{{ data.Title }}</h2>
    <p class="pt-3 text-lg">
      {{ data.Text }}
    </p>
    <NuxtLink :to="data.ButtonLink">
      <button class="btn btn-primary btn-outline mt-6 w-44">
        {{ data.ButtonText }}
      </button>
    </NuxtLink>
  </div>
</template>

<script setup>
const props = defineProps(["data", "bgColor"]);
</script>
