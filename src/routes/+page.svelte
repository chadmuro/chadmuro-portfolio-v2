<script lang="ts">
	import { techstack_badges, contact_badges } from '$lib/data/badges';
	import Article from '$lib/components/article/index.svelte';

	export let data;
	console.log(data.posts);
</script>

<header class="flex h-16 items-center">
	<nav>
		<ul class="flex gap-8">
			<li><a href="#top" class="hover:underline">top</a></li>
			<li><a href="#side-projects" class="hover:underline">side projects</a></li>
			<li><a href="#articles" class="hover:underline">articles</a></li>
		</ul>
	</nav>
</header>
<main class="flex-1 mx-auto justify-center">
	<section class="py-4" id="top">
		<div class="flex gap-4 flex-col sm:flex-row">
			<div>
				<h1 class="pb-4">Hi, my name is Chad 🤙</h1>
				<p>
					I'm a Software Engineer born and raised in Hawaii, and currently living in Tokyo, Japan. I
					enjoy building user-friendly websites and applications.
				</p>
			</div>
			<div class="flex-1">
				<div class="rounded-full bg-green-300 h-48 w-48">
					<img src="/chad.png" alt="Chad Murobayashi" class="overflow-hidden rounded-full" />
				</div>
			</div>
		</div>
	</section>

	<section class="py-4">
		<h2 class="pb-2">tech stack</h2>
		<div class="flex flex-wrap gap-2">
			{#each techstack_badges as badge}
				<img alt={badge.name} src={badge.src} />
			{/each}
		</div>
	</section>

	<section class="py-4" id="side-projects">
		<h2 class="pb-2">side projects</h2>
		<h3>Mainichi Habits</h3>

		<h3>NBA HotTakes</h3>

		<h3>BW Images</h3>

		<h3>AWS CCP Practice</h3>
	</section>

	<section class="py-4" id="articles">
		<!-- pb-2 from article card -->
		<h2>articles</h2>
		{#each data.posts as article, index}
			{#if index < 5}
				<Article {article} />
			{/if}
		{/each}
	</section>

	<section class="py-4">
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
