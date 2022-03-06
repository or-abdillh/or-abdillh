<template>
	<section id="projects" class="py-8 bg-gradient-to-b from-indigo-50 to-gray-50 px-8 md:px-20">
		<h1 class="mb-8 text-3xl text-center text-indigo-700 font-medium">Projects</h1>
		<p class="md:text-center md:mx-auto">
			This is a special section that I made to share what works I have made so far, <span class="text-indigo-700">I hope you like it 🙌🏻</span>
		</p>
		
		<section class="mt-4 lg:w-10/12 md:flex-nowrap mx-auto md:flex gap-5 flex-wrap justify-between">
			<template  v-for="(project , x) in currentPage" :key="x">
				<Card :content="project" />
			</template>
		</section>
		
		<section class="text-indigo-700 flex text-xl gap-5">
			<button @click="actionPage(false)" :class="indicatorPage === 0 ? 'bg-indigo-50 px-3 text-indigo-300' : 'bg-indigo-200 px-5' " class="active:scale-75 duration-300 rounded py-2 grid place-items-center">
				<i class="fa fa-chevron-left"></i>
			</button>
			<button @click="actionPage(true)" :class="indicatorPage === lengthPage - 1 ? 'bg-indigo-50 px-3 text-indigo-300' : 'bg-indigo-200 px-5' " class="active:scale-75 duration-300 rounded py-2 grid place-items-center">
				<i class="fa fa-chevron-right"></i>
			</button>
		</section>
		<div class="mt-2">
			<small class="text-sm">page {{ indicatorPage + 1  }} of {{ lengthPage }}</small>
		</div>
	</section>
</template>

<script setup>

	import Card from '@/components/Card.vue'
	import projects from '@/contents/projects.js'
	import { ref } from 'vue'

	const pages = []
	let loop = Math.floor( projects.length / 3 )
	
	for (let x = 0; x <= loop; x++) {
		if ( projects.length > 0 ) pages.push( projects.splice(0, 3) )
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
