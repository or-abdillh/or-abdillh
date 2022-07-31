<template>
	<section id="projects" class="py-8 bg-gradient-to-b from-indigo-50 to-gray-50 px-8 md:px-20 dark:from-slate-900 dark:to-slate-900">
		<h1 data-aos="fade-up" class="mb-8 text-3xl font-bold text-center text-indigo-700 dark:text-indigo-500">
			Projects
		</h1>
		<p data-aos="fade-up" class="md:text-center md:mx-auto dark:text-gray-300">
			This is a special section that I made to share what works I have made so far, <span class="text-indigo-700 dark:text-indigo-500">I hope you like it 🙌🏻</span>
		</p>
		
		<section class="mt-4 md:flex-nowrap mx-auto md:flex gap-5 flex-wrap">
			<template  v-for="(project , x) in currentPage" :key="x">
				<Card :content="project" />
			</template>
		</section>
		
		<section data-aos="fade-up" class="text-indigo-700 flex justify-end text-xl gap-5">
			<button @click="actionPage(false)" :class="indicatorPage === 0 ? 'bg-indigo-50 px-3 text-indigo-300' : 'bg-indigo-200 px-5' " class="active:scale-75 duration-300 rounded py-2 grid place-items-center">
				<i class="fa fa-chevron-left"></i>
			</button>
			<button @click="actionPage(true)" :class="indicatorPage === lengthPage - 1 ? 'bg-indigo-50 px-3 text-indigo-300' : 'bg-indigo-200 px-5' " class="active:scale-75 duration-300 rounded py-2 grid place-items-center">
				<i class="fa fa-chevron-right"></i>
			</button>
		</section>
		<div data-aos="fade-up" class="mt-2 text-right">
			<small class="text-sm dark:text-gray-300">page {{ indicatorPage + 1  }} of {{ lengthPage }}</small>
		</div>
	</section>
</template>

<script setup>

	import Card from '@/components/Card.vue'
	import projects from '@/contents/projects.js'
	import { ref } from 'vue'

	const divideCard = 4
	const pages = []
	let loop = Math.floor( projects.length / divideCard )
	
	for (let x = 0; x <= loop; x++) {
		if ( projects.length > 0 ) pages.push( projects.splice(0, divideCard) )
	}

	const indicatorPage = ref(0)
	const currentPage = ref(pages[ indicatorPage.value ])
	const lengthPage = pages.length

	const actionPage = next => {
		if (next) {
			if ( indicatorPage.value < lengthPage - 1 ) indicatorPage.value++
		} else {
			if ( indicatorPage.value > 0 ) indicatorPage.value--
		}

		currentPage.value = pages[ indicatorPage.value ]
	}

</script>
