<template>
    <div class="container">
        <LoginBox v-if="!isLoggedIn" @login-success="onLoginSuccess" />
        <WelcomeBox v-else :user="loginUser" @logout="isLoggedIn = false" />
  </div>
</template>

<script setup>
    import { ref } from 'vue';

    import LoginBox from '@/components/LoginBox.vue';
    import WelcomeBox from '@/components/WelcomeBox.vue';

    const loginUser = ref('');
    const isLoggedIn = ref(false);

    function onLoginSuccess(name) {
    isLoggedIn.value = true;
    loginUser.value = name;
    }
</script>
