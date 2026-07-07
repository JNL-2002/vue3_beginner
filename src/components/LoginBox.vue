<script setup>
import { ref } from 'vue';

//emit은 부모 컴포넌트에게 이벤트를 전달하는 역할을 한다.
const emit = defineEmits(['login-success']);

const username = ref('');
const password = ref('');

function tryLogin() {
    if (username.value === 'admin' && password.value === '1234') {
        emit('login-success', username.value)
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