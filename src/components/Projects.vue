<template>
	<section id="projects" class="py-8 bg-gradient-to-b from-indigo-50 to-gray-50 px-8 md:px-20">
		<h1 class="mb-12 text-3xl text-center text-indigo-700 font-medium">Projects</h1>
		<p class="md:text-center md:mx-auto">
			This is a special section that I made to share what works I have made so far, <span class="text-indigo-700">I hope you like it 🙌🏻</span>
		</p>
		<section class="mt-6 md:flex gap-5 flex-wrap justify-between">
			<template  v-for="(project , x) in projects" :key="x">
				<Card :content="project" />
			</template>
		</section>
	</section>
</template>

<script setup>

	import Card from '@/components/Card.vue'
	import projects from '@/contents/projects.js'

</script>
