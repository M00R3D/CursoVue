<script setup>
import {Form,Field} from 'vee-validate';
import {schema} from '../schemas/validationSchema.js';
const onSubmit=()=>{
    console.log('Se ha enviado el formulario');
}
</script>

<template>
    <h2>Formulario de Registro</h2>
    <Form :validation-schema="schema" @submit="onSubmit">
        <div>
            <label for="nombre">Nombre:</label>
            <Field type="text" name="nombre" id="nombre" placeholder="Ingrese su nombre:" />
            <ErrorMessage name="nombre">error con el nombre</ErrorMessage>
        </div>
        
        <div>
            <label for="correo">Correo:</label>
            <Field type="email" name="email" id="correo" placeholder="Ingrese su email:" />
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