<style scoped>

	.input {
		@apply text-sm text-gray-700 dark:bg-slate-200 bg-gray-50 py-4 w-10/12 pl-1 focus:pl-3 duration-300;
	}

</style>
<template>
	<section id="contact" class="py-8 bg-gradient-to-b from-gray-50 to-indigo-50 px-8 md:px-20 dark:from-slate-900 dark:to-slate-900">
		<h1 data-aos="fade-up" class="mb-8 text-3xl text-center text-indigo-700 font-bold dark:text-indigo-500">Contact</h1>
		<p data-aos="fade-up" class="md:text-center md:mx-auto dark:text-gray-300">
			contact me if there is a job you want to offer or just ask about me
		</p>
		<section class="w-full text-indigo-700 text-xl gap-5 mt-5">
			<div class="flex w-full gap-3 md:w-7/12 md:mx-auto lg:justify-center">
				<template v-for="(contact, x) in contacts" :key="x">
					<a data-aos="zoom-in" :href="!contact.mailto ? contact.link : 'mailto:' + contact.link"
					class="w-48 bg-indigo-100 grid place-items-center py-4 rounded active:bg-indigo-300 hover:bg-indigo-300 duration-300">
						<i :class="contact.icon"></i>
					</a>
				</template>
			</div>
			
			<form ref="myForm" @submit.prevent="submitForm" class="lg:w-10/12 lg:mx-auto mt-8 md:flex items-start gap-5 justify-between">
				<section class="md:w-6/12">
					<InputField label="Fullname">
						<template v-slot:input>
							<input name="fullname" class="input" type="text" placeholder="your fullname" required/>
						</template>
					</InputField>
					<InputField label="Company" icon="fa fa-building">
						<template v-slot:input>
							<input class="input" type="text" name="company" placeholder="your company name" required />
						</template>
					</InputField>
					<InputField label="Phone" icon="fab fa-whatsapp">
						<template v-slot:input>
							<input class="input" type="number" name="phone" placeholder="your phone number" required />
						</template>
					</InputField>
					<InputField label="Email" icon="fa fa-envelope">
						<template v-slot:input>
							<input class="input" type="email" name="email" placeholder="your email address" required />
						</template>
					</InputField>
				</section>
				
				<section class="w-full md:w-5/12 flex flex-wrap">
					<label data-aos="fade-up" class="text-base dark:text-indigo-400">Message</label>
					<textarea data-aos="fade-up" rows="13" name="message" class="w-full text-base text-gray-600 mt-2 p-2 border-2 border-indigo-300 rounded-xl overflow-hidden bg-gray-50 dark:bg-slate-200" placeholder="Your message"></textarea>
					<div data-aos="fade-up" class="w-full mt-5 flex justify-between">
						<button :class="isLoading ? 'bg-blue-200' : 'bg-blue-500'" class="text-gray-100 w-5/12 py-2 rounded-lg text-base" type="submit">
							<i v-if="statusMsg !== 'Failed'" :class="statusMsg === 'Ok' ? 'fa-check' : 'fa-paper-plane'" class="fa mr-1"></i>
							<span v-if="!isLoading">{{ statusMsg }}</span>
							<span v-else>Sending ...</span>
						</button>
						<button @click="statusMsg = 'Send'" class="border-red-500 border-2 text-red-600 w-5/12 py-2 rounded-lg text-base" type="reset">
							<i class="fa fa-times"></i>
							Reset
						</button>
					</div>
				</section>
			</form>
		</section>
	</section>
</template>

<script setup>

	import axios from 'axios'
	import contacts from '@/contents/contacts.js'
	import InputField from '@/components/InputField.vue'
	import { ref } from 'vue'

	const statusMsg = ref('Send')
	const myForm = ref(null)
	
	const isLoading = ref(false)
	const URL = 'https://script.google.com/macros/s/AKfycbwDLoFe7LvF7-UkfCC6BNE68ORGJnkMdcCiwTVGOqlacDhh02R4abuOv9Rth-IqOrbcgQ/exec'
	
	const submitForm = () => {
		isLoading.value = true
		
		fetch(URL, {
			method: 'POST',
			mode: 'no-cors',
			body: new FormData(myForm.value)
		})
		.then( res => {
			statusMsg.value = 'Ok'
			isLoading.value = false
		})
		.catch( err => {
			statusMsg.value = 'Failed'
			isLoading.value = false
		})
	}

</script>
