

<template>
  <div
    class="h-4/5 w-2/5 mx-auto flex flex-col items-center gap-y-2.5 bg-sky-400 h-4/5 px-5 py-5 rounded-sm justify-around"
  >
    <h1 class="font-sans text-5xl font-bold text-white">
      Login to your account
    </h1>
    <div v-show="error.length !== 0" class="bg-red-600 px-2 py-1 rounded">
      <p class="text-white">{{ error }}</p>
    </div>
    <div class="flex flex-col mx-auto gap-y-2.5">
      <input
        type="text"
        class="px-6 py-1 border rounded-sm"
        placeholder="Enter your email"
        name="email"
        v-model="email"
      />
      <input
        type="password"
        class="px-6 py-1 border rounded-sm"
        placeholder="Enter your password"
        v-model="pwd"
      />
    </div>
    <button class="border px-6 py-1 rounded-sm text-white" @click="login">
      Login
    </button>
    <p class="text-white">Create an account, <a href="/sign-up">here</a></p>
  </div>
</template>

<script lang="ts" setup>
import { signInWithEmailAndPassword } from "firebase/auth";
import { ref } from "vue";
import { auth } from "../firebaseConfig";

import { useDataStore, UserDataType } from "../store/user_data";
import { useRouter } from "vue-router";

const store = useDataStore();

const email = ref("");
const pwd = ref("");
const error = ref("");
const router = useRouter();

function redirect() {
  router.push("/");
}
async function login() {
  try {
    const response = await signInWithEmailAndPassword(
      auth,
      email.value,
      pwd.value
    );
    const data: UserDataType = {
      email: response.user.email ?? "",
      name: response.user.displayName ?? "",
      userId: response.user.uid,
    };
    console.log(data);
    store.setUserCredential(data);
    redirect();
  } catch (err: any) {
    error.value = err.message;
  }
}
</script>

<style >
</style>
