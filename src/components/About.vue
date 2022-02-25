<template>
	<section class="px-6 py-8 bg-gradient-to-b from-gray-50 to-indigo-50">
		<h1 class="mb-12 text-3xl text-center text-indigo-700 font-medium">About Me</h1>
		<p>
			Hello, I'm Oka Rajeb Abdillah, from Barito Kuala, South Kalimantan province, Indonesia. <br>
			I am a web developer and Instagram content creator. <br>
			I am currently undergoing a Diploma 3 in Informatics Engineering Hasnur Polytechnic
		</p>
		<section class="mt-6 w-full flex flex-wrap gap-6">
			<div>
				<h2 class="mb-5 font-medium text-indigo-700 text-xl">Educations</h2>
				<div>
					<template v-for="(edu, x) in educations" :key="x">
						<div class="mb-3 border-l-4 border-indigo-600 rounded py-2 pl-3">
							<span class="flex items-center gap-3">
								<i class="fas fa-building text-indigo-600"></i>
								<p class="font-medium text-gray-700">{{ edu.name }}</p>
							</span>
							<small>{{ edu.year }}</small>
						</div>
					</template>
				</div>
			</div>

			<div>
				<h2 class="mb-5 font-medium text-indigo-700 text-xl">Skills</h2>
				<ul>
					<template v-for="(skil, x) in skils" :key="x">
						<li class="mb-3 font-medium text-gray-700">{{ x + 1 }}. {{ skil }}</li>
					</template>
				</ul>
			</div>
		</section>
	</section>
</template>

<script setup>
	import educations from '@/educations.js'
	import skils from '@/skils.js'
</script>
