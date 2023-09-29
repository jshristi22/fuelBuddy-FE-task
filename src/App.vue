<script setup lang="ts">
import { auth } from "./firebaseConfig";

import { onMounted } from "vue";
import { useDataStore } from "./store/user_data";

import { useRouter } from "vue-router";
import { linkTo } from "@storybook/addon-links";

const router = useRouter();

function redirectToDashboard() {
  linkTo("Dashboard", "Primary")();
  router.push("/");
}
function redirectToLogin() {
  linkTo("Login", "Primary")();
  router.push("/login");
}
const store = useDataStore();
onMounted(() => {
  auth.onAuthStateChanged((user) => {
    if (user === null) redirectToLogin();
    else {
      store.setUserCredential({
        email: user?.email!,
        userId: user?.uid,
        name: user?.displayName ?? "User",
      });
      redirectToDashboard();
    }
  });
});
</script>

<template>
  <div class="h-screen px-4 py-10 bg-sky-200">
    <router-view />
  </div>
</template>


