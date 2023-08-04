<script>
	import '../app.css';
</script>

<div class="h-screen w-full flex flex-col">
	<header class="flex justify-center h-16 items-center">
		<nav>
			<ul class="flex gap-8">
				<li><a href="/">Top</a></li>
				<li><a href="/">Projects</a></li>
				<li><a href="/">Articles</a></li>
			</ul>
		</nav>
	</header>
	<slot />
	<footer class="flex justify-center h-16 items-center">
		<ul class="flex gap-8">
			<li>
				<a href="https://github.com/chadmuro" target="_blank" rel="noopener noreferrer"
					><img
						alt="GitHub"
						src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"
					/></a
				>
			</li>
			<li>
				<a href="https://www.linkedin.com/in/chadmuro/" target="_blank" rel="noopener noreferrer"
					><img
						alt="LinkedIn"
						src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white"
					/></a
				>
			</li>
			<li>
				<a href="https://medium.com/@chadmuro" target="_blank" rel="noopener noreferrer"
					><img
						alt="Medium"
						src="https://img.shields.io/badge/Medium-12100E?style=for-the-badge&logo=medium&logoColor=white"
					/></a
				>
			</li>
		</ul>
	</footer>
</div>
