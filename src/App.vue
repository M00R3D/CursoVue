<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue';
import Contador from './components/Contador.vue';
</script>

<template>
<Contador></Contador>
</template>

<style scoped>
p{
  color:red;
}
</style>
