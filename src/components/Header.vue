<!-- src/components/Header.vue -->
<script setup>
import Weather from './Weather.vue';
import {defineProps,ref,watch} from 'vue';
const props = defineProps(['mensaje']);
const mensajeRecibido = ref(props.mensaje);
watch(() => props.mensaje,(newValue) => {
        mensajeRecibido.value = newValue;
    });

</script>

<template>
<div class="header">
    {{mensajeRecibido}}<Weather></Weather>    
</div>
</template>

<style scoped>
.header{
    display: flex;
    justify-content: center;
    align-items: center;
    padding:12px 18px;
    position: fixed;
    top:0;
    right: 0;
    left: 0;
    background-color: #333;
    color: white;
}
h2{
    margin:0;
}
</style>