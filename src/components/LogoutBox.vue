<script setup>

import { useStatusStore } from '@/store/status.js';

const userStatus = useStatusStore();
const { setIsLoggedIn } = userStatus;

function loginStatus() {
    setIsLoggedIn(false);
}

</script>

<template>
    <div class="welcome-box">
        <button @click="$emit('logout'), loginStatus()">로그아웃</button>
    </div>
</template>