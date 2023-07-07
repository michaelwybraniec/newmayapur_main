<template>
  <div class="bg-base-200 py-32 2xl:px-16">
    <div
      class="grid grid-rows-1 lg:grid-cols-2 px-4 md:px-12 2xl:px-20 items-start gap-x-32"
    >
      <div class="order-2 lg:order-1 md:px-24 lg:px-0">
        <h2 class="text-xl uppercase font-bold">Contact</h2>
        <p class="pt-3 text-lg" v-if="props.locale === 'en'">
          You have a question, or you would like to share with us your ideas and
          suggestions? Please reach out to us using the form below.
        </p>
        <p class="pt-3 text-lg" v-else>
          Vous avez une question, où vous souhaiteriez partager avec nous vos
          idées et vos suggestions? Contactez-nous avec le formularie
          ci-dessous.
        </p>
        <div
          class="alert alert-success mt-6 -mb-2 rounded-lg"
          v-if="isSent === 'success'"
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="stroke-current flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Your message has been sent!</span>
          </div>
        </div>
        <div
          class="alert alert-error mt-6 -mb-2 rounded-lg"
          v-else-if="isSent === 'error'"
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="stroke-current flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Oops! Something happened. Please try again later.</span>
          </div>
        </div>
        <form class="mt-6" @submit.prevent="sendEmail">
          <div class="grid 2xl:grid-cols-2 gap-2">
            <div>
              <input
                type="text"
                placeholder="Name"
                class="input input-bordered w-full"
                v-model="infos.name"
                :class="{
                  'border-red-500': v$.name.$error,
                }"
              />
              <p
                v-if="v$.name.$error"
                class="text-sm text-red-600 ml-0.5 mt-0.5"
              >
                Please enter a valid name.
              </p>
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                class="input input-bordered w-full"
                v-model="infos.email"
                @change="v$.email.$touch"
                :class="{
                  'border-red-500': v$.email.$error,
                }"
              />
              <p
                v-if="v$.email.$error"
                class="text-sm text-red-600 ml-0.5 mt-0.5"
              >
                Please enter a valid email.
              </p>
            </div>
          </div>
          <div>
            <textarea
              class="textarea textarea-bordered resize-none text-base w-full mt-3"
              placeholder="Your Message"
              rows="6"
              v-model="infos.message"
              :class="{
                'border-red-500': v$.message.$error,
              }"
            ></textarea>
            <p
              v-if="v$.message.$error"
              class="text-sm text-red-600 ml-0.5 mt-0.5"
            >
              {{ v$.message.required.$message }}
            </p>
          </div>
          <button type="submit" class="btn btn-primary ml-auto mt-3 block w-40">
            Submit
          </button>
        </form>
      </div>
      <div class="order-1 lg:order-2 md:px-24 lg:px-0" id="contact">
        <h2 class="text-xl uppercase font-bold">
          {{
            props.locale === "en" ? "Find us Online" : "Retrouvez nous en Ligne"
          }}
        </h2>
        <div class="grid grid-col-1 mb-12 2xl:grid-cols-3 gap-3 mt-8">
          <a
            href="https://www.instagram.com/lanouvellemayapur/"
            class="p-4 rounded-xl bg-base-100 flex items-center justify-center gap-4"
          >
            <Icon name="ion:logo-instagram" size="38px" />
            <p class="font-bold uppercase">Instagram</p>
          </a>
          <a
            href="https://www.facebook.com/nouvellemayapur"
            class="p-4 rounded-xl bg-base-100 flex items-center justify-center gap-4"
          >
            <Icon name="ion:logo-facebook" size="38px" />
            <p class="font-bold uppercase">Facebook</p>
          </a>
          <a
            href="https://www.youtube.com/c/NewMayapur"
            class="p-4 rounded-xl bg-base-100 flex items-center justify-center gap-4"
          >
            <Icon name="ion:logo-youtube" size="38px" />
            <p class="font-bold uppercase">YouTube</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { required, email, minLength, helpers } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";

const props = defineProps(["locale"]);

const rules = computed(() => {
  return {
    email: {
      required: helpers.withMessage("The email field is required", required),
      email: helpers.withMessage("Invalid email format", email),
    },
    name: {
      required: helpers.withMessage("The name field is required", required),
      minLength: minLength(2),
    },
    message: {
      required: helpers.withMessage("The message field is required", required),
    },
  };
});

const mail = useMail();
const infos = reactive({
  name: "",
  email: "",
  message: "",
});

const isSent = ref(null);

const v$ = useVuelidate(rules, infos);

const sendEmail = async function () {
  const isCorrect = await v$.value.$validate();
  if (!isCorrect) return;
  try {
    await mail.send({
      from: infos.email,
      subject: "You received a new message from " + infos.name,
      text: infos.message,
    });

    isSent.value = "success";
  } catch (e) {
    isSent.value = "error";
  }

  infos.name = "";
  infos.email = "";
  infos.message = "";

  v$.value.$reset();
};
</script>
