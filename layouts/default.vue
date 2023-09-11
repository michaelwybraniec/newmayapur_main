<template>
  <div class="navbar bg-base-100 justify-between">
    <div class="navbar-start w-64">
      <div
        class="dropdown"
        :class="{ 'dropdown-hover': enableDropdownHover }"
        @mouseleave="enableDropdownHover = true"
        style="z-index: 1000"
      >
        <label tabindex="0" class="btn btn-ghost xl:hidden">
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
          class="menu menu-compact space-y-1 dropdown-content p-2 lg:shadow bg-base-100 rounded-box w-52"
        >
          <li @click="handleSelected"><NuxtLink to="/posts">Blog</NuxtLink></li>
          <li @click="handleSelected">
            <NuxtLink to="/events">{{
              locale === "en" ? "Events" : "Évènements"
            }}</NuxtLink>
          </li>
          <li @click="handleSelected">
            <NuxtLink to="https://booking.newmayapur.com">{{
              locale === "en" ? "Booking" : "Réservations"
            }}</NuxtLink>
          </li>
          <li @click="handleSelected">
            <a href="https://www.vedalivres.com/">{{
              locale === "en" ? "Shop" : "Boutique"
            }}</a>
          </li>
          <li tabindex="0">
            <a class="justify-between" @click="aboutClicked = !aboutClicked">
              {{ locale === "en" ? "About" : "À Propos" }}
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
              class="p-2 bg-base-100 lg:shadow-lg space-y-1"
              :class="aboutClicked ? '' : 'hidden'"
            >
              <li @click="handleSelected">
                <NuxtLink to="/temple">Temple</NuxtLink>
              </li>
              <li @click="handleSelected">
                <NuxtLink to="/community">{{
                  locale === "en" ? "Community" : "Communauté"
                }}</NuxtLink>
              </li>
              <li @click="handleSelected">
                <NuxtLink to="/farm">{{
                  locale === "en" ? "Farm" : "Ferme"
                }}</NuxtLink>
              </li>
            </ul>
          </li>
          <li tabindex="0">
            <a
              class="justify-between"
              @click="servicesClicked = !servicesClicked"
            >
              Services
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
              class="p-2 bg-base-100 lg:shadow-lg space-y-1"
              :class="servicesClicked ? '' : 'hidden'"
            >
              <li @click="handleSelected">
                <NuxtLink to="/retreats">{{
                  locale === "en" ? "Retreats" : "Retraites"
                }}</NuxtLink>
              </li>
              <li @click="handleSelected">
                <NuxtLink to="/catering">{{
                  locale === "en" ? "Catering" : "Restauration"
                }}</NuxtLink>
              </li>
              <li @click="handleSelected">
                <NuxtLink to="/renting-venue">{{
                  locale === "en" ? "Renting Venue" : "Location d'Espaces"
                }}</NuxtLink>
              </li>
              <li @click="handleSelected">
                <NuxtLink to="/food-for-life">Food For Life</NuxtLink>
              </li>
            </ul>
          </li>
          <li tabindex="0">
            <a class="justify-between" @click="moreClicked = !moreClicked">
              {{ locale === "en" ? "More" : "Plus" }}
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
              class="p-2 bg-base-100 lg:shadow-lg space-y-1"
              :class="moreClicked ? '' : 'hidden'"
            >
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
            <a href="https://donations.newmayapur.com">{{
              locale === "en" ? "Donate" : "Faire un Don"
            }}</a>
          </li>
        </ul>
      </div>
      <NuxtLink to="/" class="btn btn-ghost normal-case text-xl"
        >New Mayapur</NuxtLink
      >
      <div @click="changeLocale" class="cursor-pointer">
        <p
          v-html="locale"
          class="uppercase font-bold border-2 xl:hidden p-2 rounded-lg"
        ></p>
      </div>
    </div>
    <div class="navbar-end hidden xl:flex w-[1000px]">
      <ul class="menu menu-horizontal px-1 space-x-1">
        <li @click="handleSelected" class="pr-1.5">
          <NuxtLink to="/events">{{
            locale === "en" ? "Events" : "Évènements"
          }}</NuxtLink>
        </li>
        <li @click="handleSelected" class="pr-1.5">
          <NuxtLink to="https://booking.newmayapur.com">{{
            locale === "en" ? "Booking" : "Réservations"
          }}</NuxtLink>
        </li>
        <li @click="handleSelected" class="pr-1.5">
          <NuxtLink to="/posts">Blog</NuxtLink>
        </li>
        <li @click="handleSelected" class="pr-1.5">
          <a href="https://www.vedalivres.com/">{{
            locale === "en" ? "Shop" : "Boutique"
          }}</a>
        </li>
        <li class="dropdown dropdown-end dropdown-hover">
          <a class="justify-between">
            {{ locale === "en" ? "About" : "À Propos" }}
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
              <NuxtLink to="/community">{{
                locale === "en" ? "Communiy " : "Communauté"
              }}</NuxtLink>
            </li>
            <li @click="handleSelected">
              <NuxtLink to="/farm">{{
                locale === "en" ? "Farm" : "Ferme"
              }}</NuxtLink>
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
              <NuxtLink to="/retreats">{{
                locale === "en" ? "Retreats" : "Retraites"
              }}</NuxtLink>
            </li>
            <li @click="handleSelected">
              <NuxtLink to="/catering">{{
                locale === "en" ? "Catering" : "Restauration"
              }}</NuxtLink>
            </li>
            <li @click="handleSelected">
              <NuxtLink to="/renting-venue">{{
                locale === "en" ? "Renting Venue" : "Location d'Espaces"
              }}</NuxtLink>
            </li>
            <li @click="handleSelected">
              <NuxtLink to="/food-for-life">Food For Life</NuxtLink>
            </li>
          </ul>
        </li>
        <li class="dropdown dropdown-end dropdown-hover">
          <label tabindex="0" class=""
            >{{ locale === "en" ? "More" : "Plus"
            }}<svg
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
        <li @click="changeLocale">
          <p v-html="locale" class="uppercase font-bold border-2"></p>
        </li>
        <li
          @click="handleSelected"
          class="bg-primary h-[38px] mt-[1px] text-white font-bold rounded-lg"
        >
          <a href="https://donations.newmayapur.com">{{
            locale === "en" ? "Donate" : "Contribuer"
          }}</a>
        </li>
      </ul>
    </div>
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
        <b>ISKCON New Mayapur</b><br />{{
          locale === "en"
            ? "A spiritual eco-village in the heart of France."
            : "Un éco-village spirituel au coeur de la France"
        }}
      </p>
      <div class="mt-8">
        <img
          src="https://image.jimcdn.com/app/cms/image/transf/dimension=704x10000:format=jpg/path/sb0bb6130fe7c9de0/image/iba5d44f3108bb87f/version/1583667139/image.jpg"
          class="w-52 rounded-xl"
        />
        <p class="mt-2 text-gray-400">
          <i>Sri Srila A.C. Bhaktivedanta Swami Prabhupada</i>, <br />
          <b>ISKCON</b>
          {{ locale === "en" ? " Founder-Acarya" : " Acarya Fondateur" }}
        </p>
      </div>
    </div>
    <div>
      <span class="footer-title">Navigation</span>
      <NuxtLink to="/posts" class="link link-hover">Blog</NuxtLink>
      <NuxtLink to="https://www.vedalivres.com/" class="link link-hover">{{
        locale === "en" ? "Shop" : "Boutique"
      }}</NuxtLink>
      <NuxtLink to="https://booking.newmayapur.com" class="link link-hover">{{
        locale === "en" ? "Booking" : "Réservations"
      }}</NuxtLink>
      <NuxtLink to="/events" class="link link-hover">{{
        locale === "en" ? "Events" : "Évènements"
      }}</NuxtLink>
      <a href="https://donations.newmayapur.com" class="link link-hover">{{
        locale === "en" ? "Donate" : "Contribuer"
      }}</a>
      <NuxtLink to="/more" class="link link-hover">Directions</NuxtLink>
      <NuxtLink to="/more#contact" class="link link-hover">Contact</NuxtLink>
    </div>
    <div>
      <span class="footer-title">{{
        locale === "en" ? "About" : "À Propos"
      }}</span>
      <NuxtLink to="/temple" class="link link-hover">Temple</NuxtLink>
      <NuxtLink to="/farm" class="link link-hover">{{
        locale === "en" ? "Farm" : "Ferme"
      }}</NuxtLink>
      <NuxtLink to="/community" class="link link-hover">{{
        locale === "en" ? "Community" : "Communauté"
      }}</NuxtLink>
      <span class="footer-title mt-4">Services</span>
      <NuxtLink to="/retreats" class="link link-hover">{{
        locale === "en" ? "Retreats" : "Retraites"
      }}</NuxtLink>
      <NuxtLink to="/catering" class="link link-hover">{{
        locale === "en" ? "Catering" : "Restauration"
      }}</NuxtLink>
      <NuxtLink to="/renting-venue" class="link link-hover">{{
        locale === "en" ? "Renting Venue" : "Location d'Espaces"
      }}</NuxtLink>
      <NuxtLink to="/food-for-life" class="link link-hover"
        >Food For Life</NuxtLink
      >
    </div>
    <div>
      <span class="footer-title">{{ locale === "en" ? "More" : "Plus" }}</span>
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
import { useLocaleStore } from "../stores/locale";
import { storeToRefs } from "pinia";

const aboutClicked = ref(false);
const servicesClicked = ref(false);
const moreClicked = ref(false);
const clicked = ref(false);
const enableDropdownHover = ref(true);
const handleSelected = () => {
  if (document.activeElement instanceof HTMLElement) {
    document.activeElement.blur();
  }
  enableDropdownHover.value = false;
};

const store = useLocaleStore();
const { locale } = storeToRefs(store);
const changeLocale = () => {
  if (locale.value === "en") locale.value = "fr";
  else locale.value = "en";
};

const route = useRoute();
</script>
