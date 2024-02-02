<template>
	<div>
		<component :is="renderDemo(props.msg)"></component>
	</div>
	<div>2</div>
</template>

<script setup lang="tsx">
const props = defineProps<{
	msg: string;
}>();

const renderDemo = (msg: string) => (
	<div class="wrap">
		<div>{msg}</div>
	</div>
);
</script>
