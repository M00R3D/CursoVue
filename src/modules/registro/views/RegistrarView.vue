<!--  modules/registro/views/RegistrarView.vue-->

<script setup>
import {Form,Field} from 'vee-validate';
import { schema } from '../schemas/validationSchema.js';
const validationSchema = schema;
import {useRegistrarStore} from '../stores/registrarStore.js'
import {ref} from 'vue'
const registrarStore = useRegistrarStore();
const nombre = ref('');
const email = ref('');

const onSubmit=()=>{
    console.log('Se ha enviado el formulario');
    registrarStore.guardarRegistro(nombre.value, email.value);
}
</script>

<template>
    <h2>Formulario de Registro</h2>
    <Form :validation-schema="validationSchema" @submit="onSubmit">
        <div>
            <label for="nombre">Nombre:</label>
            <Field v-model="nombre" type="text" name="nombre" id="nombre" placeholder="Ingrese su nombre:" />
            <ErrorMessage name="nombre">error con el nombre</ErrorMessage>
        </div>
        
        <div>
            <label for="correo">Correo:</label>
            <Field v-model="email" type="email" name="email" id="correo" placeholder="Ingrese su email:" />
            <ErrorMessage name="email">error con el email</ErrorMessage>
        </div>
        
        <div>
            <button type="submit">Registrar</button>
        </div>
        
    </Form>
</template>

<style scoped>
form{
    margin-bottom:10px;
}
</style>