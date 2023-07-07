<template>
  <div
    v-if="props.locale === 'en'"
    class="py-24 px-4 md:px-12 2xl:px-44 grid md:grid-cols-2 gap-24 items-center"
  >
    <div>
      <img
        src="/img/prabhupada.jpg"
        class="h-44 mx-auto mb-8 rounded-full border-4"
      />
      <blockquote class="rounded-lg">
        <p class="text-lg italic">
          Nobody should go hungry within a ten mile radius of an ISKCON temple.
        </p>
      </blockquote>
      <p class="text-right mt-6">
        — Sri Srila A.C. Bhaktivedanta Swami Prabhupada
      </p>
    </div>
    <div class="order-2 lg:order-1 md:px-24 lg:px-0">
      <div>
        <div>
          <div
            class="p-5 px-1 pb-6 mx-auto inline border-2 border-base-300 bg-base-100 rounded-xl"
          >
            <Icon name="ion:globe-outline" class="m-5" size="28px" />
          </div>
          <h2 class="text-xl uppercase mt-4 font-bold">Official Website</h2>
          <p class="pt-3 text-lg">
            <b>Food for Life Global</b> (FFLG) serves as the international
            headquarters for an international network of over 250 affiliate
            projects in <b>65 countries</b> serving over
            <b>1 million</b> plant-based meals daily.
          </p>
          <a href="https://ffl.org/">
            <button class="btn-primary btn mt-4">Learn More</button>
          </a>
        </div>
        <div class="mt-12">
          <div
            class="p-5 px-1 pb-6 mx-auto inline border-2 border-base-300 bg-base-100 rounded-xl"
          >
            <Icon name="ion:heart-outline" class="m-5" size="28px" />
          </div>
          <h2 class="text-xl uppercase mt-4 font-bold">Contribute</h2>
          <p class="pt-3 text-lg">
            Do you want to <b>contribute</b> to Food For Life's effort in
            France? We will gladly receive any help you can offer, be it your
            <b>service</b> or a financial contribution. Do not hesitate to
            <b>contact</b> us.
          </p>
          <NuxtLink to="/more#contact">
            <button
              class="bg-red-600 text-white border-0 hover:bg-red-700 btn mt-4"
            >
              Contact Us
            </button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
  <div
    v-else
    class="py-24 px-4 md:px-12 2xl:px-44 grid md:grid-cols-2 gap-24 items-center"
  >
    <div>
      <img
        src="/img/prabhupada.jpg"
        class="h-44 mx-auto mb-8 rounded-full border-4"
      />
      <blockquote class="rounded-lg">
        <p class="text-lg italic">
          Personne ne devrait avoir faim dans un rayon de 5km autour d'un temple
          ISKCON.
        </p>
      </blockquote>
      <p class="text-right mt-6">
        — Sri Srila A.C. Bhaktivedanta Swami Prabhupada
      </p>
    </div>
    <div class="order-2 lg:order-1 md:px-24 lg:px-0">
      <div>
        <div>
          <div
            class="p-5 px-1 pb-6 mx-auto inline border-2 border-base-300 bg-base-100 rounded-xl"
          >
            <Icon name="ion:globe-outline" class="m-5" size="28px" />
          </div>
          <h2 class="text-xl uppercase mt-4 font-bold">Site Officiel</h2>
          <p class="pt-3 text-lg">
            <b>Food for Life Global</b> (FFLG) est un résau de plus de 250
            projets internationaux, dans <b>65 pays</b>, qui servent un total
            d'environ <b>1 million</b> de repas végétariens chaque jour.
          </p>
          <a href="https://ffl.org/">
            <button class="btn-primary btn mt-4">En Savoir Plus</button>
          </a>
        </div>
        <div class="mt-12">
          <div
            class="p-5 px-1 pb-6 mx-auto inline border-2 border-base-300 bg-base-100 rounded-xl"
          >
            <Icon name="ion:heart-outline" class="m-5" size="28px" />
          </div>
          <h2 class="text-xl uppercase mt-4 font-bold">Contribute</h2>
          <p class="pt-3 text-lg">
            Souhaitez-vous <b>contribuer</b> à Food For Life en France? Nous
            recevons avec plaisir toute aide que vous nous offrirez, que cela
            soit un <b>service</b> où une participation financière. N'hésitez
            pas à nous <b>contacter</b>.
          </p>
          <NuxtLink to="/more#contact">
            <button
              class="bg-red-600 text-white border-0 hover:bg-red-700 btn mt-4"
            >
              Contact
            </button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
blockquote {
  background: #f9f9f9;
  border-left: 10px solid #ccc;
  padding: 0.5em 10px;
  quotes: "\201C""\201D""\2018""\2019";
}
blockquote:before {
  color: #ccc;
  content: open-quote;
  font-size: 4em;
  line-height: 0.1em;
  margin-right: 0.25em;
  vertical-align: -0.4em;
}
blockquote p {
  display: inline;
}
</style>

<script setup>
const props = defineProps(["locale"]);
</script>
