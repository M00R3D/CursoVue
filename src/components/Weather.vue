<!-- src/components/Weather.vue -->
<script setup>
import {useWeather} from '../composables/useWeather.js'
import { onMounted } from 'vue';
import {useWeatherStore} from '../stores/weatherStore.js'
onMounted(()=>{
    useWeather();
});
const WeatherStore= useWeatherStore();
</script>

<template>
    <h2>La Temperatura Actual es: {{ WeatherStore.temperatura }}</h2>
</template>

<style scoped>

</style>