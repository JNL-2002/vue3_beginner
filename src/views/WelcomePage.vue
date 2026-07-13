<script setup>
import LogoutButton from '@/components/LogoutBox.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

function onLogout() {
    router.push('/login');
    
}
</script>

<template>
    <div class="LogoutButton" >
        <LogoutButton @logout="onLogout"/>
    </div>
</template>

<style scoped>
.LogoutButton {
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    height: 100vh;
}
</style>