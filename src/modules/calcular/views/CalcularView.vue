<script setup>
import { ref,computed } from 'vue';
import ResultadoSection from '../components/ResultadoSection.vue';
const valor = ref('');
const valorCalculado = computed(()=>{
    return valor.value *3;
});
const mostrarElemento = computed(()=>{
    return valor.value > 10;    
});
</script>

<template>
    <h3>Propiedades Computadas</h3>
    <input type="text" v-model="valor">
    {{ valorCalculado }}
    <ResultadoSection resultado="valor calculado" v-if="mostrarElemento"></ResultadoSection>
    <div v-else-if="isNaN(valor)">debe ser un numero</div>
    <div v-else>contenido de v-else</div>
</template>

<style scoped>

</style>