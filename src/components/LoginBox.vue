<script setup>
import { ref } from 'vue';
import { useStatusStore } from '@/store/status.js';

const LoginUser = ref('');
const LoginPassword = ref('');
const userStatus = useStatusStore();
const { setIsLoggedIn, setLoginUser, setLoginPassword } = userStatus;
const emit = defineEmits(['login-success']);


function tryLogin() {
    if (LoginUser.value === 'admin' && LoginPassword.value === '1234') {
        setIsLoggedIn(true);
        setLoginUser(LoginUser.value);
        setLoginPassword(LoginPassword.value);
        emit('login-success', LoginUser.value);
    } else {
        alert('틀림');
    }
}
</script>

<template>
    <div>
        <h2>로그인</h2>
        <input v-model="LoginUser" type="text" /><br><br>
        <input v-model="LoginPassword" type="password" /><br><br>
        <button @click="tryLogin">로그인</button>
    </div>
</template>

<style scoped>
    h2 {
        text-align: center;
    }
</style>