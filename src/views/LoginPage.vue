<template>
    <div class="container">
        <LoginBox v-if="!getIsLoggedIn" @login-success="onLoginSuccess" />
  </div>
</template>

<script setup>
    import { useStatusStore } from '@/store/status.js';
    import { storeToRefs } from 'pinia';
    import LoginBox from '@/components/LoginBox.vue';
    import { useRouter } from 'vue-router';
    
    const router = useRouter();
    const userStatus = useStatusStore();
    const { getIsLoggedIn } = storeToRefs(userStatus);

    function onLoginSuccess(name) {
        console.log('로그인 성공:', getIsLoggedIn.value);
        router.push('/welcome');
    }

</script>

<style scoped>
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }
</style>
