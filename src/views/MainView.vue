<!-- src/views/MainView.vue -->
<script setup>
import Sidebar from './../components/Sidebar.vue';
import Header from './../components/Header.vue';
import { ref } from 'vue';
const texto= ref('asdfsadf');
</script>

<template>
    <Header mensaje="textrefmensaje"></Header>
    <div class="container">
        <div class="content">
            {{ texto }}
            <input type="texto" v-model='texto'>
            <RouterView></RouterView>
        </div>
        <Sidebar></Sidebar>
    </div>
</template>

<style scoped>
.container{
    display:flex;
}
.content{
    flex:1;
    padding:20px;   
}
</style>