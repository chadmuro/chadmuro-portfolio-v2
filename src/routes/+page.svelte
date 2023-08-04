<script>
	import { badges } from '$lib/data/badges';
</script>

<main class="flex-1 px-4 mx-auto max-w-screen-md justify-center">
	<section class="py-4">
		<h1>Hi, my name is Chad 👋</h1>
		image
		<p>
			I'm a Software Engineer born and raised in Hawaii, and currently living in Tokyo, Japan. I
			enjoy building user-friendly websites and applications.
		</p>
	</section>

	<section class="py-4">
		<h2>tech stack</h2>
		<div class="flex flex-wrap gap-2">
			{#each badges as badge}
				<img alt={badge.name} src={badge.src} />
			{/each}
		</div>
	</section>

	<section class="py-4">
		<h2>side-projects</h2>
		<h3>Mainichi Habits</h3>

		<h3>NBA HotTakes</h3>

		<h3>BW Images</h3>

		<h3>AWS CCP Practice</h3>
	</section>

	<section class="py-4">articles</section>

	<section class="py-4">contact</section>
</main>
