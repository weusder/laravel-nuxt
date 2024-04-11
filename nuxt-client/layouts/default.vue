<script setup></script>

<template>
  <div>
    <div class="min-h-screen bg-gray-100">
      <Nav />

      <main>
        <div class="py-4">
          <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
              <div class="p-6 text-gray-900">
                <slot />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
