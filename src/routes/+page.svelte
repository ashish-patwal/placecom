<script>
	import { onMount } from 'svelte'
	import { fly } from 'svelte/transition'
	import homecover from '$lib/images/homecover.jpg'

	let ready = false
	onMount(() => (ready = true))

	const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
	const handleHackerText = event => {
		let iters = 0

		const interval = setInterval(() => {
			event.target.innerText = event.target.innerText
				.split('')
				.map((letter, index) => {
					if (index < iters) {
						return event.target.dataset.value[index]
					} else return letter === ' ' ? letter : letters[Math.floor(Math.random() * 26)]
				})
				.join('')

			if (iters >= event.target.dataset.value.length) clearInterval(interval)
			iters += 1 / 3
		}, 30)
	}
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="relative">
	{#if ready}
		<p
			data-value="BRIDGING THE GAP BETWEEN JOB SEEKERS AND JOB PROVIDERS"
			on:mouseover={handleHackerText}
			transition:fly={{ y: 200, duration: 1500 }}
			class="absolute leading-[4rem] sm:text-center font-extrabold font-navbar text-white left-0 right-0 sm:mx-auto md:w-1/2 md:text-8xl w-3/4 sm:text-7xl text-6xl top-32 mx-3.5"
		>
			BRIDGING THE GAP BETWEEN JOB SEEKERS AND JOB PROVIDERS
		</p>
	{/if}
	<picture>
		<source srcset={homecover} type="image/jpg" />
		<img class="h-[100rem] max-w-none" srcset={homecover} alt="homecover" />
	</picture>

	<h1 class="text-white">Dumb Dumb</h1>
</section>

<!-- md:text-8xl top-32 md:left-1/4 md:right-1/4 text-6xl left-16 right-16 -->
