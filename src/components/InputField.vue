<template>
	<div data-aos="fade-up" class="mb-5">
		<label class="text-base dark:text-indigo-400">{{ label }}</label>
		<div class="w-full flex mt-2  border-2 border-indigo-300 dark:border-indigo-500 rounded-xl overflow-hidden">
			<i :class="icon" class="w-2/12 bg-gray-50 dark:bg-slate-200 grid place-items-center"></i>
			<slot name="input"></slot>
		</div>
	</div>
</template>

<script setup>

	const props = defineProps({
		icon: {
			type: String,
			default: 'fa fa-user'
		},
		label: {
			type: String
		}
	})

</script>
