<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue';
import Contador from './components/Contador.vue';
import ListaDeTareas from './components/ListaDeTareas.vue';
</script>

<template>
<Contador></Contador>
<ListaDeTareas></ListaDeTareas>
</template>

<style scoped>
p{
  color:red;
}
</style>
