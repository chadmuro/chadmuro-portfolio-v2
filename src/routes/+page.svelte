<script lang="ts">
	import { onMount } from 'svelte';
	import { fly, fade } from 'svelte/transition';
	import { techstack_badges, contact_badges } from '$lib/data/badges';
	import Article from '$lib/components/article/index.svelte';
	import Project from '$lib/components/project/index.svelte';
	import { projects } from '$lib/data/projects.js';
	import recaptchaEnhance from '$lib/recaptchaEnhance';
	import { PUBLIC_RECAPTCHA_SITE_KEY } from '$env/static/public';

	let ready = false;
	onMount(() => (ready = true));

	export let data;
	let formResponse: { status: boolean; message: string } | null = null;
</script>

<svelte:head>
	<script src="https://www.google.com/recaptcha/api.js?render={PUBLIC_RECAPTCHA_SITE_KEY}">
	</script>
</svelte:head>

<header class="flex h-16 items-center">
	<nav>
		<ul class="flex gap-8">
			<li><a href="/" class="hover:underline">top</a></li>
			<li><a href="#side-projects" class="hover:underline">side projects</a></li>
			<li><a href="#articles" class="hover:underline">articles</a></li>
		</ul>
	</nav>
</header>
<main class="flex-1 mx-auto justify-center">
	<section class="py-8" id="top">
		<div class="flex gap-4 flex-col sm:flex-row">
			<div>
				<h1 class="pb-4">Hi, my name is Chad 🤙</h1>
				<p>
					I'm a Software Engineer born and raised in Hawaii, and currently living in Tokyo, Japan
					🇯🇵. I enjoy building <span class="border-b-2 border-green-300 border-dashed"
						>user-friendly</span
					> web and mobile applications.
				</p>
			</div>
			<div class="flex-1">
				{#key ready}
					<div in:fade={{ duration: 1500 }}>
						<div in:fly={{ y: '100%', duration: 1500 }} class="rounded-full bg-green-300 h-48 w-48">
							<img src="/chad.png" alt="Chad Murobayashi" class="overflow-hidden rounded-full" />
						</div>
					</div>
				{/key}
			</div>
		</div>
	</section>

	<section class="py-8">
		<h2 class="pb-2">tech stack</h2>
		<div class="flex flex-wrap gap-2">
			{#each techstack_badges as badge}
				<img alt={badge.name} src={badge.src} />
			{/each}
		</div>
	</section>

	<section class="py-8">
		<h2 class="pb-2">certifications</h2>
		<ul>
			<li>
				<a
					class="flex items-center gap-2 text-green-300 hover:text-green-500"
					href="https://www.credly.com/badges/918a8ea5-b1a6-4d35-a747-3d882c6eb657"
					target="_blank"
					rel="noopener noreferrer"
					>AWS Certified Cloud Practitioner (2022) <svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-4 h-4"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
						/>
					</svg></a
				>
			</li>
			<li>Japanese Language Proficiency Test N3 (2018)</li>
		</ul>
	</section>

	<section class="py-8" id="side-projects">
		<h2 class="pb-2">side projects</h2>
		<div class="flex flex-col gap-10">
			{#each projects as project}
				<Project {project} />
			{/each}
		</div>
	</section>

	<section class="py-8" id="articles">
		<!-- h2 pb-2 from article card -->
		<h2 class="pb-2">articles</h2>
		<div class="flex flex-col gap-4">
			{#each data.posts as article, index}
				{#if index < 5}
					<Article {article} />
				{/if}
			{/each}
		</div>
	</section>

	<section class="py-8">
		<h2 class="pb-2">contact</h2>
		<div class="flex flex-wrap gap-2 pb-2">
			{#each contact_badges as badge}
				<a href={badge.url} target="_blank" rel="noopener noreferrer"
					><img alt={badge.name} src={badge.src} /></a
				>
			{/each}
		</div>
		{#if formResponse}
			<div class={`${formResponse.status ? 'bg-green-300' : 'bg-red-300'} rounded p-2 mt-2`}>
				<p class="text-gray-800">{formResponse.message}</p>
			</div>
		{:else}
			<form
				use:recaptchaEnhance={{
					siteKey: PUBLIC_RECAPTCHA_SITE_KEY,
					func:
						({ formData }) =>
						({ result }) => {
							// @ts-ignore
							formResponse = { status: result.data.status, message: result.data.message };
						}
				}}
				method="POST"
				class="flex flex-col gap-2 max-w-md mt-2"
			>
				<label class="flex flex-col">
					Name: <input
						class="bg-gray-800 focus:bg-gray-600 px-2 py-1 rounded focus:border-green-300 border-2 focus:outline-none caret-green-300"
						type="text"
						required
						name="name"
						id="name"
					/>
				</label>
				<label class="flex flex-col">
					Email: <input
						class="bg-gray-800 focus:bg-gray-600 px-2 py-1 rounded focus:border-green-300 border-2 focus:outline-none caret-green-300"
						type="email"
						required
						name="email"
						id="email"
					/>
				</label>
				<label class="flex flex-col">
					Message: <textarea
						class="bg-gray-800 focus:bg-gray-600 px-2 py-1 rounded focus:border-green-300 border-2 focus:outline-none caret-green-300"
						rows={4}
						required
						name="message"
						id="message"
					/>
				</label>
				<button type="submit" class="bg-green-300 rounded py-2 px-4 w-fit text-gray-800"
					>Send message</button
				>
			</form>
		{/if}
	</section>
</main>
