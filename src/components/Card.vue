<template>
	<section class="show mb-8 md:mb-2 w-full md:w-64 lg:w-80">
				
		<img class="w-full border-2 border-graye-100 rounded-lg shadow mb-2" loading="lazy" :src="props.content.thumb" />

		<div class="py-2 items-center gap-1 flex justify-between">
			<div class="w-6/12">
				<div class="flex items-center gap-2 mb-1">
					<div class="text-xl">
						<a :href="props.content.links.github" class="mr-2 text-slate-800">
							<i class="fab fa-github"></i>
						</a>
						<a :href="props.content.links.instagram">
							<i class="fab fa-instagram text-pink-800"></i>
						</a>
					</div>
					<p class="font-medium text-sm text-gray-900">{{ props.content.title }}</p>
				</div>
			</div>
			<div class="w-6/12 text-right">
				<i class="fas fa-tag text-indigo-600 mr-1 text-xs"></i>
				<small v-for="tag in props.content.tags" :key="tag">
					<a :href="'https://www.google.com/search?q=' + tag" class="inline-block mr-1 text-indigo-700">{{ tag }}</a>
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

<style scoped>

	@keyframes show {
		from {
			opacity: .75;
			transform: translate(40, 40) scale(.75)
		} to {
			opacity: 1;
			transform: translate(0) scale(1)
		}
	}

	.show {
		animation: show .3s forward;
	}

</style>
