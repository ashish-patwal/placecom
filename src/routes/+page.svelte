<script>
	import homecover from '$lib/images/homecover.jpg'
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<picture>
		<source srcset={homecover} type="image/jpg" />
		<img class="h-[100rem] max-w-none" srcset={homecover} alt="homecover" />
	</picture>

	<h1 class="text-white">Dumb Dumb</h1>
</section>
