<script lang="ts">
	import { techstack_badges, contact_badges } from '$lib/data/badges';
	import Article from '$lib/components/article/index.svelte';
	import Project from '$lib/components/project/index.svelte';
	import { projects } from '$lib/data/projects.js';

	export let data;
</script>

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
				<div class="rounded-full bg-green-300 h-48 w-48">
					<img src="/chad.png" alt="Chad Murobayashi" class="overflow-hidden rounded-full" />
				</div>
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
					class="text-green-300 hover:text-green-500"
					href="https://www.credly.com/badges/918a8ea5-b1a6-4d35-a747-3d882c6eb657"
					target="_blank"
					rel="noopener noreferrer">AWS Certified Cloud Practitioner (2022)</a
				>
			</li>
			<li>Japanese Language Proficiency Test N3 (2018)</li>
		</ul>
	</section>

	<section class="py-8" id="side-projects">
		<h2 class="pb-2">side projects</h2>
		<div class="flex flex-col gap-8">
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
		<div class="flex flex-wrap gap-2">
			{#each contact_badges as badge}
				<a href={badge.url} target="_blank" rel="noopener noreferrer"
					><img alt={badge.name} src={badge.src} /></a
				>
			{/each}
		</div>
	</section>
</main>
