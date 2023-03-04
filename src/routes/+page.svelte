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

	let cardhovering = false
	const info =
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
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
			<img
				class="h-[100rem] max-w-none 2xl:h-auto 2xl:max-w-full"
				srcset={homecover}
				alt="homecover"
			/>
		</picture>
	</section>
	<section class="flex p-10 md:p-16 justify-end bg-black w-full lg:h-screen h-full">
		<div class="card">
			<div
				class="card-content"
				on:mouseover={() => {
					cardhovering = true
				}}
				on:mouseout={() => {
					cardhovering = false
				}}
			>
				<h3 class="card-title">Who are we exactly ?</h3>
				{#if cardhovering}
					<h4 class="card-subtitle" transition:fly={{ y: 100, duration: 1000 }}>
						{info}
					</h4>
				{/if}
			</div>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="card-icon text-white w-9 h-9 md:w-13 md:w-12"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
				/>
			</svg>
		</div>
	</section>
	<section
		class="h-full w-full md:h-screen relative after:bg-gradient-to-br after:from-layerone-pink-three after:via-layerone-pink-two after:to-layerone-pink-one after:content-[''] after:inset-0 after:absolute after:skew-y-6"
	/>
	<section
		class="h-full w-full md:h-screen relative after:bg-gradient-to-br after:from-layertwo-neon-three after:via-layertwo-neon-two after:to-layertwo-neon-one after:content-[''] after:inset-0 after:absolute after:skew-y-6"
	/>
	<section
		class="h-full w-full md:h-screen relative after:bg-gradient-to-br after:from-layerthree-violet-three after:via-layerthree-violet-two after:to-layerthree-violet-one after:content-[''] after:inset-0 after:absolute after:skew-y-6"
	/>
</main>

<style>
	:root {
		--border: rgb(3, 169, 244);

		--g1: rgb(98, 0, 234);
		--g2: rgb(236, 64, 122);
		--g3: rgb(253, 216, 53);
	}
	.card {
		aspect-ratio: 1 / 1.6;
		border: 0.5vmin solid var(--border);
		cursor: pointer;
		position: relative;
		width: 60vmin;
	}

	.card:hover:before {
		background-position: 100% 100%;
		transform: scale(1.08, 1.03);
	}

	.card:hover > .card-content {
		background-position: -10% 0%;
	}

	.card:hover > .card-icon {
		color: white;
	}

	.card:before {
		background: linear-gradient(
			130deg,
			transparent 0% 33%,
			var(--g1) 66%,
			var(--g2) 83.5%,
			var(--g3) 100%
		);
		background-position: 0% 0%;
		background-size: 300% 300%;
		content: '';
		height: 100%;
		left: 0px;
		pointer-events: none;
		position: absolute;
		top: 0px;
		transition: background-position 350ms ease, transform 350ms ease;
		width: 100%;
		z-index: 1;
	}

	.card-content {
		background-image: radial-gradient(rgba(255, 255, 255, 0.2) 8%, transparent 8%);
		background-position: 0% 0%;
		background-size: 5vmin 5vmin;
		height: 100%;
		padding: 5vmin;
		position: relative;
		transition: background-position 350ms ease;
		width: 100%;
		z-index: 2;
	}

	.card-title,
	.card-subtitle {
		color: white;
		line-height: 1;
		font-family: 'Anek Latin', sans-serif;
		font-weight: 400;
		margin: 0px;
	}

	.card-title {
		font-size: 6vmin;
	}

	.card-subtitle {
		font-size: 3vmin;
		margin-top: 2vmin;
	}

	.card-icon {
		bottom: 0px;
		color: rgba(255, 255, 255, 0.5);
		font-size: 7vmin;
		right: 0px;
		margin: 5vmin;
		position: absolute;
		transition: color 250ms ease;
		z-index: 2;
	}
</style>
