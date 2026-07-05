<script setup>
defineProps(['user']);
defineEmits(['logout']);
</script>

<template>
    <div class="welcome-box">
        <h2>환영합니다. {{ user }}님</h2>
        <button @click="$emit('logout')">로그아웃</button>
    </div>
</template>