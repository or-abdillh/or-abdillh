<template>
	<section class="relative w-full md:w-64 lg:w-80">
		<div class="text-xl absolute top-3 left-3">
			<a :href="props.content.links.github" class="mr-2 text-slate-800">
				<i class="fab fa-github"></i>
			</a>
			<a :href="props.content.links.instagram">
				<i class="fab fa-instagram text-pink-800"></i>
			</a>
		</div>
		<img class="w-full rounded-lg" :src="props.content.thumb" />
		<div class="py-2 items-center gap-1 flex justify-between">
			<div class="w-5/12">
				<div class="flex items-center gap-2 mb-1">
					<img src="/hero.png" width="25"/>
					<p class="font-medium text-sm text-slate-900 text-base">{{ props.content.title }}</p>
				</div>
			</div>
			<div class="w-6/12">
				<i class="fas fa-tag text-indigo-600 mr-1 text-xs"></i>
				<small v-for="tag in props.content.tags" :key="tag">
					<span class="inline-block mr-1 text-indigo-700">{{ tag }}</span>
				</small>
			</div>			
		</div>
	</section>
</template>

<script setup>

	const props = defineProps({
		content: {
			type: Object
		}
	})

</script>
