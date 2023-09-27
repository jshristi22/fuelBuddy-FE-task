<template>
  <div
    class="h-4/5 w-2/5 mx-auto flex flex-col items-center gap-y-2.5 bg-sky-400 h-4/5 px-5 py-5 rounded-sm justify-around"
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
        class="px-6 py-1"
        type="text"
        placeholder="Enter your email"
        name="email"
        v-model="email"
      />
      <input
        class="px-6 py-1"
        type="password"
        placeholder="Enter your password"
        v-model="password"
      />
    </div>
    <button class="border px-6 py-1 rounded-sm text-white" @click="signup">
      Create Account
    </button>
    <p class="text-white">
      Already have a account? <a href="/login">Login here</a>
    </p>
  </div>
</template>

<script lang="ts">
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";

export default {
  name: "SignUp",

  //defining local state
  data() {
    return {
      email: "",
      password: "",
      error: "",
    };
  },
  methods: {
    redirectToLogin() {
      this.$router.push("/login");
    },
    async signup() {
      try {
        await createUserWithEmailAndPassword(auth, this.email, this.password);
        this.redirectToLogin();
      } catch (error: any) {
        this.error = error.message;
      }
    },
  },
};
</script>

<style >
</style>

function createUserWithEmailAndPassword(auth: any, email: any, password: any) {
  throw new Error('Function not implemented.');
}
