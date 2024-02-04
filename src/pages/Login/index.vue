<template>
	<div>Login</div>
</template>

<script setup lang="tsx" name="LoginView">
import { useUserStore } from '@/store/user'

const userStore = useUserStore()

// userStore.saveToken()

console.log(userStore.token)
</script>
