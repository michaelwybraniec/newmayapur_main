<template>
  <div class="navbar bg-base-100">
    <div class="navbar-start">
      <div
        class="dropdown"
        :class="{ 'dropdown-hover': enableDropdownHover }"
        @mouseleave="enableDropdownHover = true"
      >
        <label tabindex="0" class="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <ul
          tabindex="0"
          class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li @click="handleSelected"><NuxtLink to="/posts">Blog</NuxtLink></li>
          <li @click="handleSelected">
            <NuxtLink to="/events">Events</NuxtLink>
          </li>
          <li
            @click="handleSelected"
            class="bg-primary text-white font-bold rounded-lg"
          >
            <a href="https://donations.newmayapur.com">Donate</a>
          </li>
          <li @click="handleSelected">
            <NuxtLink to="/events">Booking</NuxtLink>
          </li>
          <li tabindex="0">
            <a class="justify-between">
              About
              <svg
                class="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
                />
              </svg>
            </a>
            <ul class="p-2 bg-base-100 shadow-lg space-y-1">
              <li @click="handleSelected">
                <NuxtLink to="/temple">Temple</NuxtLink>
              </li>
              <li @click="handleSelected">
                <NuxtLink to="/community">Community</NuxtLink>
              </li>
              <li @click="handleSelected">
                <NuxtLink to="/farm">Farm</NuxtLink>
              </li>
            </ul>
          </li>
          <li tabindex="0">
            <a class="justify-between">
              Services
              <svg
                class="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
                />
              </svg>
            </a>
            <ul class="p-2 bg-base-100 shadow-lg space-y-1">
              <li @click="handleSelected">
                <NuxtLink to="/retreats">Retreats</NuxtLink>
              </li>
              <li @click="handleSelected">
                <NuxtLink to="/catering">Catering</NuxtLink>
              </li>
              <li @click="handleSelected">
                <NuxtLink to="/renting-venue">Renting Venue</NuxtLink>
              </li>
              <li @click="handleSelected">
                <NuxtLink to="/food-for-life">Food For Life</NuxtLink>
              </li>
            </ul>
          </li>
          <li tabindex="0">
            <a class="justify-between">
              More
              <svg
                class="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
                />
              </svg>
            </a>
            <ul class="p-2 bg-base-100 shadow-lg space-y-1">
              <li @click="handleSelected">
                <NuxtLink to="/more#map">Directions</NuxtLink>
              </li>
              <li @click="handleSelected">
                <NuxtLink to="/more#contact">Contact</NuxtLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <NuxtLink to="/" class="btn btn-ghost normal-case text-xl"
        >New Mayapur</NuxtLink
      >
    </div>
    <div class="navbar-center hidden lg:flex">
      <div class="form-control">
        <TheSearch></TheSearch>
      </div>
    </div>
    <div class="navbar-end hidden lg:flex">
      <ul class="menu menu-horizontal px-1 space-x-1">
        <li @click="handleSelected"><NuxtLink to="/posts">Blog</NuxtLink></li>
        <li @click="handleSelected">
          <NuxtLink to="/events">Events</NuxtLink>
        </li>
        <li @click="handleSelected">
          <NuxtLink to="/events">Booking</NuxtLink>
        </li>
        <li class="dropdown dropdown-end dropdown-hover">
          <a class="justify-between">
            About
            <svg
              class="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
              />
            </svg>
          </a>
          <ul
            class="dropdown-content menu p-2 border-2 space-y-1 border-base-300 bg-base-100 rounded-box w-52"
          >
            <li @click="handleSelected">
              <NuxtLink to="/temple">Temple</NuxtLink>
            </li>
            <li @click="handleSelected">
              <NuxtLink to="/community">Community</NuxtLink>
            </li>
            <li @click="handleSelected">
              <NuxtLink to="/farm">Farm</NuxtLink>
            </li>
          </ul>
        </li>
        <li class="dropdown dropdown-end dropdown-hover">
          <label tabindex="0" class=""
            >Services<svg
              class="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="dropdown-content menu p-2 border-2 space-y-1 border-base-300 bg-base-100 rounded-box w-52"
          >
            <li @click="handleSelected">
              <NuxtLink to="/retreats">Retreats</NuxtLink>
            </li>
            <li @click="handleSelected">
              <NuxtLink to="/catering">Catering</NuxtLink>
            </li>
            <li @click="handleSelected">
              <NuxtLink to="/renting-venue">Renting Venue</NuxtLink>
            </li>
            <li @click="handleSelected">
              <NuxtLink to="/food-for-life">Food For Life</NuxtLink>
            </li>
          </ul>
        </li>
        <li class="dropdown dropdown-end dropdown-hover">
          <label tabindex="0" class=""
            >More<svg
              class="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="dropdown-content menu p-2 border-2 space-y-1 border-base-300 bg-base-100 rounded-box w-52"
          >
            <li @click="handleSelected">
              <NuxtLink to="/more">Directions</NuxtLink>
            </li>
            <li @click="handleSelected">
              <NuxtLink to="/more#contact">Contact</NuxtLink>
            </li>
          </ul>
        </li>
        <li
          @click="handleSelected"
          class="bg-primary text-white font-bold rounded-lg"
        >
          <a href="https://donations.newmayapur.com">Donate</a>
        </li>
      </ul>
    </div>
  </div>
  <slot />

  <footer
    class="footer text-base px-8 py-20 md:px-4 lg:px-32 2xl:px-56 bg-neutral text-neutral-content"
  >
    <div>
      <div class="grid grid-flow-col gap-4 mb-4">
        <Icon name="ion:logo-instagram" size="28px" />
        <Icon name="ion:logo-facebook" size="28px" />
        <Icon name="ion:logo-youtube" size="28px" />
      </div>
      <p>
        <b>ISKCON New Mayapur</b><br />A spiritual eco-village in the heart of
        France.
      </p>
    </div>
    <div>
      <span class="footer-title">Navigation</span>
      <a class="link link-hover">Events</a>
      <a class="link link-hover">Temple</a>
      <a class="link link-hover">Donate</a>
      <a class="link link-hover">Farm</a>
      <a class="link link-hover">Blog</a>
    </div>
    <div>
      <span class="footer-title">Information</span>
      <p>Château d'Oublaise, <br />36360 Luçay-Le-Mâle, France</p>
      <p>+33 6 67 97 55 03</p>
    </div>
    <div>
      <span class="footer-title">More</span>
      <a class="link link-hover">Le Gopal</a>
      <a class="link link-hover">New Bahulavan</a>
    </div>
  </footer>
</template>

<script setup>
const enableDropdownHover = ref(true);
const handleSelected = () => {
  if (document.activeElement instanceof HTMLElement) {
    document.activeElement.blur();
  }
  enableDropdownHover.value = false;
};
</script>
