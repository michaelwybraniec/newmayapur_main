<template>
  <div id="container">
    <h1 class="text-2xl font-bold mb-10">Add Person to Newsletter</h1>
    <div
      class="alert alert-success my-6 mx-auto"
      v-if="success"
      style="width: 80%"
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
        <span>Person has been added!</span>
      </div>
    </div>
    <form @submit.prevent="subscribe">
      <input type="text" placeholder="First Name" v-model="fName" />
      <input type="text" placeholder="Last Name" v-model="lName" />
      <input type="text" placeholder="Email" v-model="mail" />
      <button>Send</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";

const mail = ref("");
const fName = ref("");
const lName = ref("");
const success = ref(false);

const subscribe = () => {
  fetch("/api/mailchimp", {
    method: "POST",
    body: JSON.stringify({
      email: mail.value,
      fName: fName.value,
      lName: lName.value,
    }),
  }).then((data) => {
    console.log(data);
    mail.value = "";
    fName.value = "";
    lName.value = "";
    if (data.status == 200) {
      success.value = true;
    }
  });
};
</script>

<style scoped>
#container {
  margin: 150px auto;
  text-align: center;
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}

input {
  margin: 12px;
  width: 80%;
  padding: 8px 10px;
  border: 1px solid gray;
}

button {
  width: 80%;
  padding: 8px 10px;
  height: 42px;
  margin-top: 12px;
  font-size: large;
  background-color: #ebebeb;
}
</style>
