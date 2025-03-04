<script setup>
import Sidebar from './../components/Sidebar.vue';
</script>

<template>
<div class="container">
    <div class="content">
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