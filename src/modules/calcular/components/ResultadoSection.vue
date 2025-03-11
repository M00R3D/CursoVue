<script setup>
    import{defineProps} from 'vue';
    const props = defineProps(
        [
            'resultado'
        ]
    );
</script>

<template>
    <div class="resultado">{{props.resultado}}</div>

</template>

<style scoped>
    .resultado{
        background-color:antiquewhite;
    }
</style>