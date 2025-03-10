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
{{ WeatherStore.temperatura }}
</template>

<style scoped>

</style>