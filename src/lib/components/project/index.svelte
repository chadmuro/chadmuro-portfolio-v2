<script lang="ts">
	import type { Project } from '$lib/types';
	import AppStoreButton from './AppStoreButton.svelte';

	export let project: Project;
</script>

<article class="flex flex-col gap-1">
	<h3 class="text-lg">
		<a
			class="text-green-300 hover:text-green-500"
			href={project.link}
			target="_blank"
			rel="noopener noreferrer">{project.title}</a
		>
	</h3>
	{#if project.appstore_link}
		<AppStoreButton link={project.appstore_link} />
	{/if}
	<img src={project.main_image} alt={project.title} />
	<p>{project.description}</p>

	<div class="flex gap-2 flex-wrap">
		{#each project.tags as tag}
			<p class="text-xs border-b border-green-300 rounded p-1 bg-gray-600">{tag}</p>
		{/each}
	</div>
	<div class="flex gap-4 mt-2">
		<a
			href={project.link}
			target="_blank"
			rel="noopener noreferrer"
			class="flex gap-2 items-center bg-gray-600 rounded px-4 py-2 hover:bg-gray-700"
			>Live
			<svg
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
			</svg>
		</a>
		<a
			href={project.github}
			target="_blank"
			rel="noopener noreferrer"
			class="flex gap-2 items-center bg-gray-600 rounded px-4 py-2 hover:bg-gray-700"
			>Source code<svg
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
	</div>
</article>
