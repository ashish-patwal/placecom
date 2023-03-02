<script>
	import { onMount } from 'svelte'
	import { fly } from 'svelte/transition'
	import homecover from '$lib/images/homecover.jpg'

	let ready = false
	onMount(() => (ready = true))
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="relative">
	{#if ready}
		<p
			transition:fly={{ y: 200, duration: 1500 }}
			class="absolute leading-[4rem] sm:text-center font-extrabold font-navbar text-white left-0 right-0 sm:mx-auto md:w-1/2 md:text-8xl w-3/4 sm:text-7xl text-6xl top-32 mx-3.5"
		>
			Bridging the gap between job seekers and job providers
		</p>
	{/if}
	<picture>
		<source srcset={homecover} type="image/jpg" />
		<img class="h-[100rem] max-w-none" srcset={homecover} alt="homecover" />
	</picture>

	<h1 class="text-white">Dumb Dumb</h1>
</section>

<!-- md:text-8xl top-32 md:left-1/4 md:right-1/4 text-6xl left-16 right-16 -->
