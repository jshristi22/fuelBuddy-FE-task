<script lang="ts" setup>
import { signOut } from "firebase/auth";
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { auth } from "../firebaseConfig";
import { useDataStore, UserDataType } from "../store/user_data";

const store = useDataStore();

const router = useRouter();

function redirectToLogin() {
  router.push("/login");
}
async function logout() {
  await signOut(auth);
  redirectToLogin();
  const data: UserDataType = {
    email: "",
    userId: "",
    name: "",
  };
  store.setUserCredential(data);
}

onMounted(() => {
  auth.onAuthStateChanged((user) => {
    if (user === null) redirectToLogin();
    else {
      const data: UserDataType = {
        email: user?.email!,
        userId: user?.uid,
        name: user?.displayName ?? "User",
      };
      store.setUserCredential(data);
    }
  });
});
</script>

<template>
  <div
    class="w-2/5 mx-auto flex flex-col items-center gap-y-2.5 bg-sky-400 h-4/5 px-5 py-5 rounded-xl"
  >
    <h2 class="text-white font-sans font-bold text-5xl">
      Welcome {{ store.getUserCredential.name }}
    </h2>
    <div
      class="shadow-2xl mx-auto w-4/5 py-5 px-10 bg-sky-300 rounded-xl mt-20"
    >
      <h4 class="text-white font-sans font-bold text-2xl mb-10">
        Profile Information
      </h4>
      <p class="text-white font-sans font-bold text-1xl">
        User Id: {{ store.getUserCredential.userId }}
      </p>
      <p class="text-white font-sans font-bold text-1xl">
        Username: {{ store.getUserCredential.name }}
      </p>
      <p class="text-white font-sans font-bold text-1xl">
        email: {{ store.getUserCredential.email }}
      </p>
    </div>

    <button
      class="shadow-xl border px-6 py-1 rounded-sm text-white mt-20"
      @click="logout"
    >
      Logout
    </button>
  </div>
</template>


<style>
</style>