<template>
  <div class="bg-base-200 pb-28 py-28 lg:px-10">
    <h2 class="text-2xl font-bold text-center mb-2">{{ props.title }}</h2>
    <div class="lg:pb-16 pt-16 lg:px-10">
      <div
        class="grid grid-cols-1 lg:grid-cols-2 px-4 lg:px-20 items-start gap-x-16 gap-y-12 lg:gap-y-24"
      >
        <div class="md:px-24 lg:px-0 mb-24 lg:mb-0" v-for="item in props.data">
          <h2 class="uppercase font-bold text-xl mb-4">{{ item.Title }}</h2>
          <table class="table-auto border-2 w-full rounded-xl">
            <tbody class="border-2">
              <tr class="border-2" v-for="(cell, key, index) in item.Data">
                <td class="px-6 py-4" v-if="key != index">
                  {{ key }}
                </td>
                <td class="px-6 py-4 text-gray-400" v-else="key != index">
                  {{ index + 1 }}
                </td>
                <td>{{ cell }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["data", "title"]);
</script>
