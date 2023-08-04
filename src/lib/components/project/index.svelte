<script lang="ts">
	import type { Project } from '$lib/types';

	export let project: Project;
</script>

<article class="py-2">
	<h3>{project.title}</h3>
	<p>{project.description}</p>
	Image

	<div>tags</div>
	<a>Link to project</a>
	<a>Link to GitHub</a>
</article>
