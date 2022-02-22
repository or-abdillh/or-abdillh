<template>
	<Navbar />
	<main class="app">
		<router-view></router-view>
	</main>
</template>

<script setup>

	import Navbar from '@/components/Navbar.vue'

</script>

<style scoped>
	.app {
		@apply w-full md:mx-auto
	}
</style>
