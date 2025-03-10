// src/stores/weatherStore.js 
import {defineStore} from 'pinia';
import { ref, watch } from 'vue'; // Agrega watch


export const useWeatherStore = defineStore('weather',()=>{
    const temperatura = ref(0);
    const setTemperatura= (temp)=>{
        temperatura.value = temp;
    }
    return {temperatura,setTemperatura};
});