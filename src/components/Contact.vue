<template>
	<section id="contact" class="py-8 bg-gradient-to-b from-gray-50 to-indigo-50 px-8 md:px-20">
		<h1 class="mb-8 text-3xl text-center text-indigo-700 font-medium">Contact</h1>
		<p class="md:text-center md:mx-auto">
			contact me if there is a job you want to offer or just ask about me
		</p>
		<section class="w-full text-indigo-700 text-xl gap-5 mt-5">
			<div class="flex w-full gap-3 md:w-7/12 md:mx-auto">
				<template v-for="(contact, x) in contacts" :key="x">
					<a :href="!contact.mailto ? contact.link : 'mailto:' + contact.link"
					class="w-48 bg-indigo-100 grid place-items-center py-4 rounded active:bg-indigo-300 hover:bg-indigo-300 duration-300">
						<i :class="contact.icon"></i>
					</a>
				</template>
			</div>
			
			<form class="lg:w-10/12 lg:mx-auto mt-8 md:flex items-start gap-5 justify-between">
				<section class="md:w-6/12">
					<InputField :model="fullname" label="Fullname" placeholder="your fullname" />
					<InputField :model="company" label="Company" placeholder="your company name" icon="fas fa-building" />
					<InputField :model="phone" type="number" label="Phone number" placeholder="your phone number" :isRequired="false" icon="fab fa-whatsapp" />
					<InputField :model="email" type="email" label="Email" placeholder="your email" :isRequired="false" icon="fa fa-envelope" />
				</section>
				
				<section class="w-full md:w-5/12 flex flex-wrap">
					<label class="text-base">Message</label>
					<textarea rows="13" v-model="message" class="w-full text-base text-gray-600 mt-2 p-2 border-2 border-indigo-300 rounded-xl overflow-hidden bg-gray-50" placeholder="Your message"></textarea>
					<div class="w-full mt-5 flex justify-between">
						<button class="bg-blue-500 text-gray-100 w-5/12 py-2 rounded-lg text-base" type="submit">
							<i class="fa fa-paper-plane"></i>
							Send
						</button>
						<button class="border-red-500 border-2 text-red-600 w-5/12 py-2 rounded-lg text-base" type="reset">
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

	import contacts from '@/contents/contacts.js'
	import InputField from '@/components/InputField.vue'
	import { ref } from 'vue'

	const fullname = ref('')
	const company = ref('')
	const phone = ref('')
	const email = ref('')
	const message = ref('')

</script>
