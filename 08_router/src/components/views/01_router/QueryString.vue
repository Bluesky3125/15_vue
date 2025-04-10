<template>
    <div>
        <h1>QueryString</h1>
        <h4>넘어온 query string 값: {{ currentRoute.query }}</h4>
        <h4>name: {{ name }}</h4>
        <h4>age: {{ currentRoute.query.age }}</h4>
    </div>
</template>

<script setup>
    import {useRoute} from 'vue-router';

    const currentRoute = useRoute();
    const name = currentRoute.query.name;

</script>

<style scoped>

</style>