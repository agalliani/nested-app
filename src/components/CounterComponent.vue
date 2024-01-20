<script setup>
import { ref } from "vue";

const count = ref(0);
</script>

<template>
  <h1>COUNTER PAGE</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
  </div>
</template>

