<template>
	<div data-aos="fade-up" class="mb-5">
		<label class="text-base">{{ label }}</label>
		<div class="w-full flex mt-2  border-2 border-indigo-300 rounded-xl overflow-hidden">
			<i :class="icon" class="w-2/12 bg-gray-50 grid place-items-center"></i>
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
