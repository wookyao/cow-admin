<template>
	404
	<svg-icon name="clean"></svg-icon>
	<a-table :data="data" :columns="columns"></a-table>
</template>

<script setup lang="tsx" name="NotFoundView">
import type { TableColumnData } from '@arco-design/web-vue'

const data = ref([
	{
		id: 1,
		name: 'John',
		age: 30,
		address: 'New York No. 1 Lake Park',
	},
	{
		id: 2,
		name: 'Jim',
		age: 25,
		address: 'London No. 1 Lake Park',
	},
])

const columns: TableColumnData[] = [
	{
		dataIndex: 'name',
		title: '姓名',
	},
	{
		dataIndex: 'age',
		title: '年龄',
	},
	{
		dataIndex: 'address',
		title: '地址',
	},
]
</script>
