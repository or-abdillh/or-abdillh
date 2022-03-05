<template>
	<main class="navbar">
		<section class="navbar-brand">
			<div class="flex items-center gap-3">
				<img src="/hero.png" width="50" />
				<h1 class="text-indigo-700 text-xl font-semibold lg:text-3xl">OR ABDILLH</h1>
			</div>
			<button @click="showMenu = true" class="active:scale-90 duration-300 md:hidden" type="button">
				<i class="fa fa-bars text-indigo-700 text-2xl"></i>
			</button>
		</section>
		
		<section :class="showMenu ? 'right-0' : '-right-full'" class="navbar-menu">
			<ul class="navbar-list">
				<span @click="showMenu = false" class=" md:hidden"><i class="fa fa-times text-gray-50"></i></span>
				<template v-for="(menu, x) in menus" :key="x">
					<li :class="menuActive === menu.name ? 'border-b-4 border-blue-400' : ''" class="text-gray-100 md:text-indigo-600 font-medium duration-300">
						<a @click="changeMenu(menu.name)">{{ menu.name }}</a>
					</li>
				</template>
				<li class="md:hidden w-full bg-green-500 mt-5 text-gray-100 text-center py-2 px-4 rounded-lg">
					<a href="">
						<i class="fab fa-whatsapp"></i>
						Chat Me
					</a>
				</li>
			</ul>
			<section class="hidden md:block bg-green-500 text-gray-100 text-center p-2 md:px-4 rounded-lg">
				<a href="">
					<i class="fab fa-whatsapp"></i>
					Chat me
				</a>
			</section>
		</section>

	</main>
</template>

<style scoped>
	.navbar {
		@apply z-20 md:flex md:items-center md:justify-between md:px-6 md:py-8 lg:px-10 w-full bg-gradient-to-l from-indigo-100 to-gray-100 fixed top-0 left-0 right-0 px-5 lg:py-8 py-3;
	}

	.navbar-brand {
		@apply flex items-center justify-between md:gap-3;
	}

	.navbar-menu {
		@apply w-5/12 md:w-8/12 duration-300 fixed md:relative flex justify-between md:items-center top-0 bottom-0 bg-indigo-500 md:bg-opacity-0 px-5 lg:px-0 pt-12  md:pt-0;
	}

	.navbar-list {
		@apply flex flex-col md:flex-row gap-3 md:gap-4 lg:gap-10 lg:text-xl;
	}
</style>

<script setup>

	import { ref } from 'vue'
	import menus from '@/menu.js'

	const emits = defineEmits('changeMenu')

	const menuActive = ref('Home')
	const showMenu = ref(false)
	const viewport = ref(window.innerWidth) //Get current width of browser

	if ( viewport.value >= 768 ) showMenu.value = true //If device tablet or more wider shoow menu

	const changeMenu = menu => {
		menuActive.value = menu
		emits('changeMenu', menu)
	}	
	
</script>
