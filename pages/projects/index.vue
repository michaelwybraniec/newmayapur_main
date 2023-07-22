<template>
  <div class="bg-base-200">
    <div class="mx-auto py-28 2xl:px-16">
      <div
        class="grid grid-rows-1 2xl:grid-cols-2 px-4 lg:px-20 items-center gap-x-4"
      >
        <div class="order-2 md:px-24 2xl:px-0 2xl:order-1">
          <h2 class="text-xl uppercase font-bold">Our Plans</h2>
          <div class="pt-3 text-lg">
            We are situated on the Domaine d'Oublaise, a property that is a few
            hundred years old. As such, its infrastructure is oftentime
            out-of-date, and needs steady upkeeping as well as frequent
            repairing. We are dedicated to grow New Mayapur into a secure,
            welcoming and comfortable place for all our visitors and residents.
          </div>
          <div
            class="my-4 bg-base-100 rounded-xl shadow-md px-5 py-3 inline-block"
          >
            <div class="flex gap-2 items-center">
              <Icon name="ion:information-circle-outline" size="24px" />
              <p><b>Displayed:</b> Guesthouse Repairs</p>
            </div>
          </div>
        </div>
        <div
          class="order-1 max-w-xs md:max-w-lg mb-12 2xl:mb-0 mx-auto md:mb-24 rounded-lg 2xl:order-2 2xl:ml-auto 2xl:mr-0"
        >
          <div class="carousel w-full rounded-lg">
            <div id="slide1" class="carousel-item relative w-full">
              <img
                src="https://images.unsplash.com/photo-1587582423116-ec07293f0395?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                class="w-full"
              />
              <div
                class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
              >
                <a href="#slide4" class="btn btn-circle">❮</a>
                <a href="#slide2" class="btn btn-circle">❯</a>
              </div>
            </div>
            <div id="slide2" class="carousel-item relative w-full">
              <img
                src="https://images.unsplash.com/photo-1587582423116-ec07293f0395?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                class="w-full"
              />
              <div
                class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
              >
                <a href="#slide1" class="btn btn-circle">❮</a>
                <a href="#slide3" class="btn btn-circle">❯</a>
              </div>
            </div>
            <div id="slide3" class="carousel-item relative w-full">
              <img
                src="https://images.unsplash.com/photo-1587582423116-ec07293f0395?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                class="w-full"
              />
              <div
                class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
              >
                <a href="#slide2" class="btn btn-circle">❮</a>
                <a href="#slide4" class="btn btn-circle">❯</a>
              </div>
            </div>
            <div id="slide4" class="carousel-item relative w-full">
              <img
                src="https://images.unsplash.com/photo-1587582423116-ec07293f0395?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                class="w-full"
              />
              <div
                class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
              >
                <a href="#slide3" class="btn btn-circle">❮</a>
                <a href="#slide1" class="btn btn-circle">❯</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div>
    <div class="py-32 pb-24 mx-4">
      <div class="xl:w-[1250px] mx-auto">
        <h1 class="font-bold uppercase border-b-2 pb-1.5 text-xl mb-5">
          All Projects
        </h1>
        <div
          class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 gap-y-8 2xl:gap-6 mt-6"
        >
          <div class="card max-w-md max-md mx-auto bg-base-100 shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1587582423116-ec07293f0395?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Thumbnail"
              class="h-64 object-cover rounded-t-xl"
            />
            <div class="card-body">
              <div
                class="px-2 py-1 border-2 flex gap-1 items-center justify-center w-32 border-green-500 rounded-md"
              >
                <Icon name="ion:checkmark-circle-outline" size="20px" />
                <span class="font-bold">Completed</span>
              </div>
              <h2 class="card-title">Some Project</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Repellat quia ad reiciendis excepturi odit corporis sequi alias
                quos...
              </p>
              <NuxtLink class="btn mt-4">Read More</NuxtLink>
            </div>
          </div>
          <div class="card max-w-md max-md mx-auto bg-base-100 shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1587582423116-ec07293f0395?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Thumbnail"
              class="h-64 object-cover rounded-t-xl"
            />
            <div class="card-body">
              <div
                class="px-2 py-1 border-2 flex gap-1 items-center justify-center w-32 border-red-500 rounded-md"
              >
                <Icon name="ion:reload-outline" size="20px" />
                <span class="font-bold">In Progress</span>
              </div>
              <h2 class="card-title">Some Project</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Repellat quia ad reiciendis excepturi odit corporis sequi alias
                quos......
              </p>
              <NuxtLink class="btn mt-4">Read More</NuxtLink>
            </div>
          </div>
          <div class="card max-w-md max-md mx-auto bg-base-100 shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1587582423116-ec07293f0395?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Thumbnail"
              class="h-64 object-cover rounded-t-xl"
            />
            <div class="card-body">
              <div
                class="px-2 py-1 border-2 flex gap-1 items-center justify-center w-28 border-gray-500 rounded-md"
              >
                <Icon name="ion:calendar-outline" size="20px" />
                <span class="font-bold">Planned</span>
              </div>
              <h2 class="card-title">Some Project</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Repellat quia ad reiciendis excepturi odit corporis sequi alias
                quos......
              </p>
              <NuxtLink class="btn mt-4">Read More</NuxtLink>
            </div>
          </div>
        </div>
        <div class="flex items-center justify-center">
          <div class="btn-group mt-20 mb-10">
            <button class="btn">1</button>
            <button class="btn">2</button>
            <button class="btn">3</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-base-200">
    <div class="max-w-[1280px] py-32 mx-auto">
      <h1 class="font-bold uppercase pb-1.5 text-xl mb-6">
        Completed Projects
      </h1>
      <div class="grid grid-cols-3 gap-6 gap-y-10 mb-10">
        <div
          class="bg-base-100 py-6 px-8 rounded-xl shadow-md text-lg relative"
        >
          <div
            class="bg-gray-600 rounded-full w-10 h-10 absolute right-6 -top-4"
          >
            <Icon
              name="ion:checkmark-outline"
              size="24px"
              class="ml-2 mt-2 text-white"
            ></Icon>
          </div>
          <h3 class="mb-2 font-bold text-xl">Some Title</h3>
          <p class="mb-1.5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, non
            at? Doloremque rerum, adipisci illum dolorum, nostrum voluptatum
            deserunt repellat nulla tempora quibusdam excepturi nobis.
          </p>
        </div>
        <div
          class="bg-base-100 py-6 px-8 rounded-xl shadow-md text-lg relative"
        >
          <div
            class="bg-gray-600 rounded-full w-10 h-10 absolute right-6 -top-4"
          >
            <Icon
              name="ion:checkmark-outline"
              size="24px"
              class="ml-2 mt-2 text-white"
            ></Icon>
          </div>
          <h3 class="mb-2 font-bold text-xl">Some Title</h3>
          <p class="mb-1.5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, non
            at? Doloremque rerum, adipisci illum dolorum, nostrum voluptatum
            deserunt repellat nulla tempora quibusdam excepturi nobis.
          </p>
        </div>
        <div
          class="bg-base-100 py-6 px-8 rounded-xl shadow-md text-lg relative"
        >
          <div
            class="bg-gray-600 rounded-full w-10 h-10 absolute right-6 -top-4"
          >
            <Icon
              name="ion:checkmark-outline"
              size="24px"
              class="ml-2 mt-2 text-white"
            ></Icon>
          </div>
          <h3 class="mb-2 font-bold text-xl">Some Title</h3>
          <p class="mb-1.5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, non
            at? Doloremque rerum, adipisci illum dolorum, nostrum voluptatum
            deserunt repellat nulla tempora quibusdam excepturi nobis.
          </p>
        </div>
      </div>
      <div class="flex justify-center">
        <button class="btn btn-primary">Show More</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useLocaleStore } from "../../stores/locale";
import { storeToRefs } from "pinia";

const store = useLocaleStore();
const { locale } = storeToRefs(store);
</script>
