<script lang="ts" setup>
definePageMeta({
  middleware: ["auth"],
});

const auth = useAuthStore();
</script>

<template>
  <div v-if="auth.isLoggedIn">Bem vindo: {{ auth.user.name }}</div>
</template>

<style scoped></style>
