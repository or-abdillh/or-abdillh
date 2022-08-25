<template>
	<section data-aos="zoom-in" class="show mb-8 md:mb-2 md:w-64 lg:w-96 md:max-w-[25%]">		
		<div class="w-full relative">
			<img :alt="props.content.title" class="w-full border-2 border-gray-100 rounded-lg shadow mb-2" :src="props.content.thumb" />
			<div class="absolute rounded bg-slate-900 bg-opacity-25 opacity-0 backdrop-blur-sm hover:bg-opacity-75 hover:opacity-100 duration-300 inset-0 grid place-items-center">
				<span class="text-xl flex flex-wrap justify-center">
					<small class="text-slate-200 text-sm w-full text-center mb-1">See project on</small>
					<a :href="props.content.links.github" class="mr-2 text-slate-200">
						<i class="fab fa-github"></i>
					</a>
					<a :href="props.content.links.instagram">
						<i class="fab fa-instagram text-pink-400"></i>
					</a>
				</span>
			</div>
		</div>

		<div class="py-2 items-center gap-1 flex justify-between md:flex-wrap">
			<div class="w-6/12 md:w-full">
				<div class="flex items-center gap-1 mb-1">
					<p class="font-medium text-sm text-gray-900 dark:text-gray-300">{{ props.content.title }}</p>
				</div>
			</div>
			<div class="w-6/12 md:w-full text-right md:text-left">
				<i class="fas fa-tag text-indigo-600 dark:text-indigo-500 mr-1 text-xs"></i>
				<small v-for="tag in props.content.tags" :key="tag">
					<a :href="'https://www.google.com/search?q=' + tag" class="inline-block mr-1 text-indigo-700 text-xs dark:text-indigo-400">{{ tag }}</a>
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
