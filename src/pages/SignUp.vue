<template>
  <div
    class="shadow-2xl h-4/5 w-2/5 mx-auto flex flex-col items-center gap-y-2.5 bg-sky-400 h-4/5 px-5 py-5 rounded-sm justify-around"
  >
    <h1 class="font-sans text-5xl font-bold text-white">
      Create a new account
    </h1>
    <div class="flex flex-col mx-auto gap-y-2.5">
      <div v-show="error.length !== 0" class="bg-red-600 px-2 py-1 rounded">
        <p class="text-white">{{ error }}</p>
      </div>
      <!-- v-model keeps state data and input field data in sync -->
      <input
        class="px-6 py-1 border rounded-md shadow"
        type="text"
        placeholder="Enter your email"
        name="email"
        v-model="email"
      />
      <input
        class="px-6 py-1 border rounded-md shadow"
        type="password"
        placeholder="Enter your password"
        v-model="password"
      />
    </div>
    <button
      class="shadow-xl border px-6 py-1 rounded-sm text-white"
      @click="signup"
    >
      Create Account
    </button>
    <p class="text-white">
      Already have a account?
      <strong class="cursor-pointer" @click="redirectToLogin">here</strong>
    </p>
  </div>
</template>

<script lang="ts" setup>
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { linkTo } from "@storybook/addon-links";

const email = ref("");
const password = ref("");
const error = ref("");
const router = useRouter();

function redirectToLogin() {
  linkTo("Login", "Primary")();
  router.push("/login");
}
async function signup() {
  try {
    await createUserWithEmailAndPassword(auth, email.value, password.value);
    redirectToLogin();
  } catch (err: any) {
    error.value = err.message;
  }
}
</script>

<style >
</style>

