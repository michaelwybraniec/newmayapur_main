<template>
  <div class="navbar bg-base-100">
    <div class="navbar-start">
      <div
        class="dropdown"
        :class="{ 'dropdown-hover': enableDropdownHover }"
        @mouseleave="enableDropdownHover = true"
        style="z-index: 1000"
      >
        <label tabindex="0" class="btn btn-ghost 2xl:hidden">
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
          class="menu menu-compact space-y-1 dropdown-content p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li @click="handleSelected"><NuxtLink to="/posts">Blog</NuxtLink></li>
          <li @click="handleSelected">
            <NuxtLink to="/events">Events</NuxtLink>
          </li>
          <li @click="handleSelected">
            <NuxtLink to="https://booking.newmayapur.com">Booking</NuxtLink>
          </li>
          <li @click="handleSelected">
            <a href="https://www.vedalivres.com/">Shop</a>
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
          <li
            @click="handleSelected"
            class="bg-primary text-white font-bold rounded-lg"
          >
            <a href="https://donations.newmayapur.com">Donate</a>
          </li>
        </ul>
      </div>
      <NuxtLink to="/" class="btn btn-ghost normal-case text-xl"
        >New Mayapur</NuxtLink
      >
    </div>
    <div class="navbar-center hidden 2xl:flex mr-20">
      <div class="form-control">
        <UIMiscTheSearch></UIMiscTheSearch>
      </div>
    </div>
    <div class="navbar-end hidden 2xl:flex">
      <ul class="menu menu-horizontal px-1 space-x-1">
        <li @click="handleSelected" class="pr-1.5">
          <NuxtLink to="/events">Events</NuxtLink>
        </li>
        <li @click="handleSelected" class="pr-1.5">
          <NuxtLink to="https://booking.newmayapur.com">Booking</NuxtLink>
        </li>
        <li @click="handleSelected" class="pr-1.5">
          <NuxtLink to="/posts">Blog</NuxtLink>
        </li>
        <li @click="handleSelected" class="pr-1.5">
          <a href="https://www.vedalivres.com/">Shop</a>
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
  <div class="p-2 sticky top-0 w-full bg-base-100 2xl:hidden shadow-md z-50">
    <UIMiscTheSearch></UIMiscTheSearch>
  </div>

  <slot />

  <footer
    class="footer text-base px-8 py-20 md:px-4 lg:px-32 2xl:px-56 bg-neutral text-neutral-content"
  >
    <div>
      <div class="grid grid-flow-col gap-4 mb-1">
        <NuxtLink to="https://www.instagram.com/lanouvellemayapur/"
          ><Icon name="ion:logo-instagram" size="28px"
        /></NuxtLink>
        <NuxtLink to="https://www.facebook.com/nouvellemayapur"
          ><Icon name="ion:logo-facebook" size="28px"
        /></NuxtLink>
        <NuxtLink to="https://www.youtube.com/@NewMayapur">
          <Icon name="ion:logo-youtube" size="28px" />
        </NuxtLink>
      </div>
      <p>
        <b>ISKCON New Mayapur</b><br />A spiritual eco-village in the heart of
        France.
      </p>
      <div class="mt-8">
        <img
          src="https://image.jimcdn.com/app/cms/image/transf/dimension=704x10000:format=jpg/path/sb0bb6130fe7c9de0/image/iba5d44f3108bb87f/version/1583667139/image.jpg"
          class="w-52 rounded-xl"
        />
        <p class="mt-2 text-gray-400">
          <i>Sri Srila A.C. Bhaktivedanta Swami Prabhupada</i>, <br />
          <b>ISKCON</b> Founder-Acarya
        </p>
      </div>
    </div>
    <div>
      <span class="footer-title">Navigation</span>
      <NuxtLink to="/blog" class="link link-hover">Blog</NuxtLink>
      <NuxtLink to="https://www.vedalivres.com/" class="link link-hover"
        >Shop</NuxtLink
      >
      <NuxtLink to="https://booking.newmayapur.com" class="link link-hover"
        >Booking</NuxtLink
      >
      <NuxtLink to="/events" class="link link-hover">Events</NuxtLink>
      <a href="https://donations.newmayapur.com" class="link link-hover"
        >Donate</a
      >
      <NuxtLink to="/more" class="link link-hover">Directions</NuxtLink>
      <NuxtLink to="/more#contact" class="link link-hover">Contact</NuxtLink>
    </div>
    <div>
      <span class="footer-title">About</span>
      <NuxtLink to="/temple" class="link link-hover">Temple</NuxtLink>
      <NuxtLink to="/farm" class="link link-hover">Farm</NuxtLink>
      <NuxtLink to="/community" class="link link-hover">Community</NuxtLink>
      <span class="footer-title mt-4">Services</span>
      <NuxtLink to="/retreats" class="link link-hover">Retreats</NuxtLink>
      <NuxtLink to="/catering" class="link link-hover">Catering</NuxtLink>
      <NuxtLink to="/renting-venue" class="link link-hover"
        >Renting Venue</NuxtLink
      >
      <NuxtLink to="/food-for-life" class="link link-hover"
        >Food For Life</NuxtLink
      >
    </div>
    <div>
      <span class="footer-title">More</span>
      <a href="https://legopal.fr/" class="link link-hover">Le Gopal</a>
      <a href="https://newbahulavan.fr/" class="link link-hover"
        >New Bahulavan</a
      >
      <span class="footer-title mt-4">Information</span>
      <p>Château d'Oublaise, <br />36360 Luçay-Le-Mâle, France</p>
      <a href="tel:33783207004" class="link link-hover">+33 7 83 20 70 04</a>
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

const route = useRoute();
</script>
