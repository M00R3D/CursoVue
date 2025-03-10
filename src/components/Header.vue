<!-- src/components/Header.vue -->
<script setup>
import Weather from './Weather.vue'
</script>

<template>
<div class="header">
    <h2>La Temperatura Actual es: <Weather></Weather></h2>
    
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