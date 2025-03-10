// src/composables/useWeather.js 
import {useWeatherStore} from '../stores/weatherStore'
import {getTemperatura} from '../helpers/getWeather.js'

export const useWeather = async () => {
    const weatherStore = useWeatherStore();

    try {
        const temperatura = await getTemperatura(); 
        weatherStore.temperatura = temperatura;     
    } catch (error) {
        console.error('Error al obtener la temperatura:', error);
    }
};
