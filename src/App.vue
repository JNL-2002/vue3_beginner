<script setup>
import { ref } from 'vue';

import LoginBox from './components/LoginBox.vue';
import WelcomeBox from './components/WelcomeBox.vue';

const loginUser = ref('');
const isLoggedIn = ref(false);


function onLoginSuccess(name) {
  isLoggedIn.value = true;
  loginUser.value = name;
}

</script>

<template>
  <div class="containser">
    <LoginBox v-if="!isLoggedIn" @login-succeess="onLoginSuccess" />

    <WelcomeBox v-else :user="loginUser" @logout="isLoggedIn = false" />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
</style>
