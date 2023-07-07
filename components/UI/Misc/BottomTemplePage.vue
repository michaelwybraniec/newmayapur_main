<template>
  <div class="pt-28 pb-36 2xl:px-16">
    <div
      class="grid grid-rows-1 lg:grid-cols-2 items-center px-4 2xl:px-20 gap-x-28"
    >
      <div class="order-2 lg:order-1 md:px-24 lg:px-0">
        <div>
          <div>
            <div
              class="p-5 px-1 pb-6 mx-auto inline border-2 border-base-300 bg-base-100 rounded-xl"
            >
              <Icon name="ion:logo-facebook" class="m-5" size="28px" />
            </div>
            <h2 class="text-xl uppercase mt-4 font-bold">
              {{
                props.locale === "en" ? "Daily Darshan" : "Darshan Quotidien"
              }}
            </h2>
            <p class="pt-3 text-lg" v-if="props.locale === 'en'">
              Get <b>Sri-Sri Gaura-Nitai</b>, <b>Sri-Sri Krishna-Balarama</b>,
              <b>Sri Varahadeva</b>, and <b>Sri-Sri Radha-Govinda-Madhava</b>'s
              <i>darshan</i> regularly, straight from your social media feed.
            </p>
            <p class="pt-3 text-lg" v-else>
              Bénéficiez du <i>darshan</i> de <b>Sri-Sri Gaura-Nitai</b>,
              <b>Sri-Sri Krishna-Balarama</b>, <b>Sri Varahadeva</b>, and
              <b>Sri-Sri Radha-Govinda-Madhava</b> sur vos réseaux sociaux
              régulièrement.
            </p>
            <NuxtLink
              to="https://www.facebook.com/people/Daily-darsan-New-Mayapur-Iskcon-France/100064249227219/"
              class="btn-primary btn mt-4"
              >{{
                props.locale === "en" ? "See On" : "Voir Sur"
              }}
              Facebook</NuxtLink
            >
          </div>
          <div class="mt-12">
            <div
              class="p-5 px-1 pb-6 mx-auto inline border-2 border-base-300 bg-base-100 rounded-xl"
            >
              <Icon name="ion:logo-youtube" class="m-5" size="28px" />
            </div>
            <h2 class="text-xl uppercase mt-4 font-bold">
              {{
                props.locale === "en" ? "Online Lectures" : "Classes en Ligne"
              }}
            </h2>
            <p class="pt-3 text-lg" v-if="props.locale === 'en'">
              Want to learn more about <b>Krishna Consciousness</b>? Our YouTube
              channel has hundreds of recordings of lectures from holy
              scriptures, like <i>Srimad-Bhagavatam</i> and
              <i>Bhagavad-Gita</i>.
            </p>
            <p class="pt-3 text-lg" v-else>
              Vous souhaitez en savoir plus sur la <b>Conscience de Krishna</b>?
              Notre chaîne YouTube a des centaines d'enregistrements de classes
              sur des textes sacrés, tel le <i>Srimad-Bhagavatam</i> et la
              <i>Bhagavad-Gita</i>.
            </p>
            <NuxtLink
              to="https://www.youtube.com/@NewMayapur"
              class="bg-red-600 text-white border-0 hover:bg-red-700 btn mt-4"
            >
              {{ props.locale === "en" ? "See Now" : "En Savoir Plus" }}
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="overflow-x-auto">
        <h2 class="text-xl uppercase mb-5 ml-0.5 font-bold">
          {{ props.locale === "en" ? "Our Schedule" : "Notre Emploi du Temps" }}
        </h2>
        <div class="border-2 border-base-300 rounded-xl mb-20 lg:mb-0">
          <table class="table table-zebra w-full">
            <!-- head -->
            <thead>
              <tr>
                <th></th>
                <th>{{ props.locale === "en" ? "Time" : "Heure" }}</th>
                <th>{{ props.locale === "en" ? "Activity" : "Activité" }}</th>
              </tr>
            </thead>
            <tbody>
              <!-- row 1 -->
              <tr>
                <th class="text-gray-300">1</th>
                <td>04:30</td>
                <td>Mangala Arati</td>
              </tr>
              <!-- row 2 -->
              <tr>
                <th class="text-gray-300">2</th>
                <td>07:30</td>
                <td>Darshan Arati</td>
              </tr>
              <!-- row 3 -->
              <tr>
                <th class="text-gray-300">3</th>
                <td>08:00</td>
                <td>
                  {{
                    props.locale === "en"
                      ? "Srimad-Bhagavatam Class"
                      : "Classe de Srimad-Bhagavatam"
                  }}
                </td>
              </tr>
              <tr>
                <th class="text-gray-300">4</th>
                <td>08:45</td>
                <td>
                  {{ props.locale === "en" ? "Breakfast" : "Petit-Déjeuner" }}
                </td>
              </tr>
              <tr>
                <th class="text-gray-300">5</th>
                <td>12:30</td>
                <td>
                  {{ props.locale === "en" ? "Midday Arati" : "Arati de Midi" }}
                </td>
              </tr>
              <tr>
                <th class="text-gray-300">6</th>
                <td>13:30</td>
                <td>
                  {{ props.locale === "en" ? "Lunch" : "Déjeuner" }}
                </td>
              </tr>
              <tr>
                <th class="text-gray-300">7</th>
                <td>18:30</td>
                <td>Gaura Arati</td>
              </tr>
              <tr>
                <th class="text-gray-300">8</th>
                <td>19:30</td>
                <td>{{ props.locale === "en" ? "Dinner" : "Dîner" }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["locale"]);
</script>
