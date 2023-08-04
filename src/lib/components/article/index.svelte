<script lang="ts">
	import type { Article } from '$lib/types';

	export let article: Article;
</script>

<article class="border-green-300 border-b border-solid py-2">
	<a href={article.link} target="_blank" rel="noopener noreferrer">
		<h3>{article.title}</h3>
		<p>{article.pubDate.split(' ')[0]}</p>
	</a>
</article>
