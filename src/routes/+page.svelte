<script>
	import { onMount } from 'svelte'
	import { fly } from 'svelte/transition'
	import homecover from '$lib/images/homecover.jpg'

	let ready = false
	onMount(() => (ready = true))
	const heading = ['BRIDGING', 'THE', 'GAP', 'BETWEEN', 'JOB', 'SEEKERS', 'AND', 'JOB', 'PROVIDERS']

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
			iters += 1 / 4
		}, 30)
	}
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<main>
	<section class="relative">
		{#if ready}
			<div
				class="flex border-white p-4 border-8 flex-col absolute leading-[4rem] sm:text-center font-extrabold font-sans text-white left-0 right-0 sm:mx-auto  md:text-8xl w-min sm:text-7xl text-6xl top-24 mx-3.5"
				transition:fly={{ y: 200, duration: 1300 }}
			>
				{#each heading as word, index}
					<h1
						class="md:self-center max-w-min"
						data-value={word}
						on:focus
						on:mouseover={handleHackerText}
						transition:fly={{ y: 100, duration: 1500 + index * 150 }}
					>
						{word}
					</h1>
				{/each}
			</div>
		{/if}
		<picture>
			<source srcset={homecover} type="image/jpg" />
			<img class="h-[100rem] max-w-none" srcset={homecover} alt="homecover" />
		</picture>
	</section>
	<section class="w-full h-screen" />
	<section
		class="w-full h-screen relative after:bg-gradient-to-br after:from-layerone-pink-three after:via-layerone-pink-two after:to-layerone-pink-one after:content-[''] after:inset-0 after:absolute after:skew-y-6"
	/>
	<section
		class="w-full h-screen relative after:bg-gradient-to-br after:from-layertwo-neon-three after:via-layertwo-neon-two after:to-layertwo-neon-one after:content-[''] after:inset-0 after:absolute after:skew-y-6"
	/>
	<section
		class="w-full h-screen relative after:bg-gradient-to-br after:from-layerthree-violet-three after:via-layerthree-violet-two after:to-layerthree-violet-one after:content-[''] after:inset-0 after:absolute after:skew-y-6"
	/>
</main>
