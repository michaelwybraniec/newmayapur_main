<template>
  <div class="py-64 bg-base-200">
    <h1 class="font-bold text-3xl p-4">Hello World !</h1>
  </div>
</template>

<script setup>
const { find } = useStrapi();

const events = await find("events", {
  populate: ["Thumbnail"],
});

const setTagsBg = function (value) {
  if (value === "Religious") {
    return "bg-purple-600";
  } else if (value === "Discover") {
    return "bg-blue-600";
  } else {
    return "bg-orange-600";
  }
};
</script>
