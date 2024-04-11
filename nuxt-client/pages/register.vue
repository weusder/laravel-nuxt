<script lang="ts" setup>
const form = ref({
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
});

const auth = useAuthStore();

async function handleRegister() {
  const { error } = await auth.register(form.value);

  if (!error.value) {
    navigateTo("/");
  }
}
</script>

<template>
  <div>
    <h1>Register</h1>

    <form @submit.prevent="handleRegister">
      <div>
        <label>
          Name
          <input type="text" v-model="form.name" />
        </label>
      </div>

      <div>
        <label>
          Email
          <input type="text" v-model="form.email" />
        </label>
      </div>

      <div>
        <label>
          Password
          <input type="password" v-model="form.password" />
        </label>
      </div>

      <div>
        <label>
          Password Confirmation
          <input type="password" v-model="form.password_confirmation" />
        </label>
      </div>

      <button type="submit">Login</button>
    </form>
  </div>
</template>
