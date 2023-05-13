<template>
  <div class="lg:w-[900px] xl:w-[1000px] mx-4 lg:mx-auto mt-16 mb-48">
    <div class="card sm:card-side bg-base-100 border-2 border-base-200">
      <figure class="sm:w-[400px]">
        <img
          src="/img/mail.jpg"
          alt="Album"
          class="max-sm:h-[225px] md:h-[345px] max-md:w-full object-cover"
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title">Get our Latest News</h2>
        <p class="text-lg max-md:mb-6">
          Keep up to date with what's happening in New Mayapur.
        </p>
        <form @submit.prevent="subscribe">
          <div class="grid md:grid-cols-2 gap-2">
            <div>
              <input
                type="text"
                v-model="data.value.fName"
                placeholder="First Name"
                class="input input-bordered w-full"
                @input="v$.value.fName.$touch"
              />
              <p
                v-if="v$.value.fName.$error"
                class="text-sm mt-0.5 text-red-600"
              >
                Please enter a valid first name.
              </p>
            </div>
            <div>
              <input
                v-model="data.value.lName"
                type="text"
                placeholder="Last Name"
                class="input input-bordered w-full"
                @input="v$.value.lName.$touch"
              />
              <p
                v-if="v$.value.lName.$error"
                class="text-sm mt-0.5 text-red-600"
              >
                Please enter a valid last name.
              </p>
            </div>
          </div>
          <div class="grid md:grid-cols-2 gap-2 mt-3">
            <div>
              <input
                type="text"
                placeholder="Email"
                class="input input-bordered w-full"
                v-model="data.value.email"
                @input="v$.value.email.$touch"
              />
              <p
                v-if="v$.value.email.$error"
                class="text-sm mt-0.5 text-red-600"
              >
                Please enter a valid email.
              </p>
            </div>
            <div>
              <select
                class="select select-bordered w-full"
                v-model="data.value.language"
                @input="v$.value.language.$touch"
              >
                <option disabled selected value="">Language</option>
                <option value="20b75dca3e">French</option>
                <option value="c4e9098dd7">English</option>
              </select>
              <p
                v-if="v$.value.language.$error"
                class="text-sm mt-0.5 text-red-600"
              >
                Please enter a language.
              </p>
            </div>
          </div>
          <div class="card-actions mt-3 items-center">
            <button class="btn btn-primary max-md:w-full">Subscribe</button>
            <p
              class="2xl:text-center"
              :class="
                res.includes('registered') ? 'text-green-600' : 'text-red-600'
              "
            >
              {{ res }}
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { required, email } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";

const rules = computed(() => {
  return {
    value: {
      email: { required, email },
      fName: { required },
      lName: { required },
      language: { required },
    },
  };
});

const data = reactive({
  value: {
    email: "",
    fName: "",
    lName: "",
    language: "",
  },
});

const res = ref("");

const v$ = useVuelidate(rules, data);

const subscribe = async () => {
  const isCorrect = await v$.value.$validate();
  if (!isCorrect) return;

  console.log(data);

  const { _, pending, error, refresh } = await useFetch("/api/mailchimp", {
    method: "POST",
    body: {
      email: data.value.email,
      fName: data.value.fName,
      lName: data.value.lName,
      language: data.value.language,
      birthday: null,
      address: {
        addr1: "",
        city: "",
        state: "",
        zip: "",
        country: "",
      },
    },
  });

  res.value = error.value
    ? "Oops! Something went wrong. Please try again later."
    : "Your subscription has been registered.";

  data.value.email = "";
  data.value.fName = "";
  data.value.lName = "";
  data.value.language = "";

  v$.value.$reset();
};
</script>
