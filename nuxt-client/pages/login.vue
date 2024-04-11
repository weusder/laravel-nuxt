<script lang="ts" setup>
definePageMeta({
  middleware: ["guest"],
  layout: "guest",
});

const form = ref({
  email: "test@example.com",
  password: "password",
});

const auth = useAuthStore();

async function handleLogin() {
  if (auth.isLoggedIn) {
    navigateTo("/");
  }

  const { error } = await auth.login(form.value);

  if (!error.value) {
    navigateTo("/");
  }
}
</script>

<template>
  <form @submit.prevent="handleLogin">
    <div>
      <label class="block font-medium text-sm text-gray-700" for="email">
        <span>Email</span>
      </label>
      <input
        class="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full"
        type="email"
        v-model="form.email"
      />
      <div class="mt-2" style="display: none">
        <p class="text-sm text-red-600"></p>
      </div>
    </div>

    <div class="mt-4">
      <label class="block font-medium text-sm text-gray-700" for="password">
        <span>Senha</span>
      </label>

      <input
        class="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full"
        type="password"
        v-model="form.password"
      />

      <div class="mt-2" style="display: none">
        <p class="text-sm text-red-600"></p>
      </div>
    </div>

    <div class="flex items-center justify-end mt-4">
      <button
        type="submit"
        class="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 ms-4"
      >
        Log in
      </button>
    </div>
  </form>
</template>
