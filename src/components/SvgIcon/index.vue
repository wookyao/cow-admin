<script setup lang="tsx" name="SvgIcon">
import { computed } from 'vue'

// props type
interface SvgIconProps {
	name: string
	color?: string
	size?: string | number
}

const props = withDefaults(defineProps<SvgIconProps>(), {
	color: '#333',
	size: 16,
})

const style = computed(() => {
	const size = String(props.size).endsWith('px')
		? props.size
		: `${props.size}px`

	return {
		'--svg-icon-color': `${props.color}`,
		'--svg-icon-size': size,
	}
})

const SvgIcon = (props: SvgIconProps, style) => {
	const svgClass = computed(() => {
		return `svg-icon icon-${props.name}`
	})

	return () => (
		<svg class={svgClass.value} aria-hidden="true" style={style}>
			<use xlink:href={`#icon-${props.name}`} />
		</svg>
	)
}
</script>

<template>
	<component :is="SvgIcon(props, style)" />
</template>

<style scoped>
.svg-icon {
	--svg-icon-color: #333;
	--svg-icon-size: 16px;

	width: var(--svg-icon-size);
	height: var(--svg-icon-size);
	color: var(--svg-icon-color);
	vertical-align: -0.18em;
	fill: currentColor;
	overflow: hidden;
}
</style>
