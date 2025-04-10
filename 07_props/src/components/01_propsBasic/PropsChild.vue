<template>
    <h3>전달 받은 props: {{ props2.message }}</h3>
</template>

<script setup>
    import {defineProps} from 'vue';

    const props2 = defineProps({
        message: String
    });
</script>

<style scoped>

</style>