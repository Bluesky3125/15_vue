<template>
    <div>
        <h1>Home</h1>
        <input type="number" v-model="id">
        <button @click="changeRouter(id)">Router 경로 변경</button>
    </div>
</template>

<script setup>
    import {ref} from 'vue';
    // useRouter를 활용한 라우팅
    import {useRouter} from 'vue-router';

    const router = useRouter();
    const id = ref(0);

    function changeRouter(id) {
        router.push(`/pathvariable/${id}`)
    }
</script>

<style scoped>

</style>