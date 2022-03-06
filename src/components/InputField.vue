<template>
	<div class="mb-5">
		<label class="text-base">{{ label }}</label>
		<div class="w-full flex mt-2  border-2 border-indigo-300 rounded-xl overflow-hidden">
			<i :class="icon" class="w-2/12 bg-gray-50 grid place-items-center"></i>
			<input v-model="model" class="w-11/12 text-base text-gray-600 py-4 bg-gray-50" :placeholder="placeholder" :type="type" :required="isRequired">
		</div>
	</div>
</template>

<script setup>

	const props = defineProps({
		label: {
			type: String,
			default: 'Your custom label'
		},
		placeholder: {
			type: String,
			default: 'Your custom placeholder' 
		},
		type: {
			type: String,
			default: 'text'
		},
		icon: {
			type: String,
			default: 'fa fa-user'
		},
		isRequired: {
			type: Boolean,
			default: true
		},
		model: {}
	})

</script>
