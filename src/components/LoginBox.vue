<script setup>
import { onMounted, ref } from 'vue';
import { useStatusStore } from '@/store/status.js';
import api from '@/api/index.js';

const LoginUser = ref('');
const LoginPassword = ref('');
const userStatus = useStatusStore();
const emit = defineEmits(['login-success']);



async function tryLogin() {
        const response = await api.post('/v1/login', {
            username: LoginUser.value,
            password: LoginPassword.value
        });
        
        console.log('로그인 API 응답:', response.data);
        userStatus.setIsLoggedIn(response.data);

        if (response.data == '성공') {
            emit('login-success');
        } else {
            alert('로그인 실패. 아이디와 비밀번호를 확인하세요.');
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