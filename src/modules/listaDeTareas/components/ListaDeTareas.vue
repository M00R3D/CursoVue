<script setup>
import { ref } from 'vue';
const tareas = ref([]);
const nuevaTarea = ref('');
const addTarea = () =>{tareas.value.push(nuevaTarea.value);
    nuevaTarea.value='';
}
const borrarTarea = (index) =>
    {
        tareas.value.splice(index,1);
    }
</script>



<template>
    <h2>Lista De Tareas</h2>
    <input type="text" v-model="nuevaTarea" @keyup.enter="addTarea">
    <ul>
        <li v-for="(tarea,index) in tareas" :key="index">
            {{ tarea }}
            <button @click="borrarTarea(index)">Borrar Tarea</button>
        </li>
        <!-- <li>tarea</li> -->
    </ul>
</template>





<style scoped>

</style>