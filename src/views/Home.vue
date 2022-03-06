<template>
	<Navbar v-on:change-menu="changeMenu" />
	<main class="mt-16">
		<Landing ref="home" />
		<About />
		<Projects />
		<Contact />
	</main>
</template>

<script setup>

	import { ref } from 'vue'
	import Landing from '@/components/Landing.vue'
	import About from '@/components/About.vue'
	import Navbar from '@/components/Navbar.vue'
	import Projects from '@/components/Projects.vue'
	import Contact from '@/components/Contact.vue'

	const home = ref(null) 

	const changeMenu = payload => {
		getEl(payload).scrollIntoView({
			behavior: 'smooth',
			block: 'start',
			inline: 'nearest'
		})
	}

	const getEl = id => document.querySelector(id)

</script>
