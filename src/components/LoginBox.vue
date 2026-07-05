<script setup>
import { ref } from 'vue';

const emit = defineEmits(['login-succeess']);

const username = ref('');
const password = ref('');

function tryLogin() {
    if (username.value === 'admin' && password.value === '1234') {
        emit('login-succeess', username.value)
    } else {
        alert('틀림')
    }
}
</script>

<template>
    <div>
        <h2>로그인 하기</h2>
        <input v-model="username" type="text" /><br><br>
        <input v-model="password" type="password" /><br><br>
        <button @click="tryLogin">로그인</button>
    </div>
</template>