// src/helpers/getWeather.js 
import axios from 'axios';
const API_URL='https://api.open-meteo.com/v1/forecast?latitude=24.1444&longitude=-110.3005&hourly=temperature_2m&timezone=auto';
export const getTemperatura=async()=>{
    const respuesta = await axios.get(API_URL);
    const temperaturas = respuesta.data.hourly.temperature_2m;
    const nuevaTemperatura = temperaturas[0];
    return nuevaTemperatura;
}