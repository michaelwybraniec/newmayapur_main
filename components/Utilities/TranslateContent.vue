<template>
  <Transition mode="out-in">
    <div v-if="props.renderComponent">
      <slot></slot>
    </div>
    <div v-else class="flex items-center justify-center h-screen">
      <UISpinnerRound />
    </div>
  </Transition>
</template>

<script setup>
const props = defineProps(["renderComponent"]);
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
