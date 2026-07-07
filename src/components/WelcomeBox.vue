<script setup>

//props는 부모 컴포넌트에서 전달받은 데이터를 자식 컴포넌트에서 사용할 수 있게 해주는 역할을 한다.
defineProps(['user']);

//emit은 부모 컴포넌트에게 이벤트를 전달하는 역할을 한다.
defineEmits(['logout']);
</script>

<template>
    <div class="welcome-box">
        <h2>환영합니다. {{ user }}님</h2>
        <button @click="$emit('logout')">로그아웃</button>
    </div>
</template>