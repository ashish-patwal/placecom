<script>
	import { fly } from 'svelte/transition'
	let kardhovering = false
	const info =
		'As we know that in India, placement drives are generally conducted for technical courses like B tech, MBA, polytechnic, etc; but in this race of placement, students with non technical background are somewhere left behind and here comes our PlaceCom, which is a Roorkee based startup that focuses on conducting placement drives for general courses like B.Sc, B.Com, B.Ed, B pharma and many more so that the students of these courses get more job opportunities and in-hand experience of campus placement.'
</script>

<div class="kard">
	<div
		class="kard-content"
		on:blur
		on:focus
		on:mouseover={() => {
			kardhovering = true
		}}
		on:mouseout={() => {
			kardhovering = false
		}}
	>
		<h3 class="kard-title font-aneklatin">Who are we exactly ?</h3>
		{#if kardhovering}
			<h5 class="kard-subtitle font-aneklatin" transition:fly={{ y: 100, duration: 1000 }}>
				{info}
			</h5>
		{/if}
	</div>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		stroke-width="1.5"
		stroke="currentColor"
		class="kard-icon md:w-13 h-9 w-9 text-white md:w-12"
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
		/>
	</svg>
</div>

<style>
	:root {
		--border: rgb(3, 169, 244);

		--g1: rgb(98, 0, 234);
		--g2: rgb(236, 64, 122);
		--g3: rgb(253, 216, 53);
	}
	.kard {
		aspect-ratio: 1 / 1.4;
		border: 0.5vmin solid var(--border);
		cursor: pointer;
		position: relative;
		width: 60vmin;
		display: flex;
		align-self: center;
	}

	.kard:hover:before {
		background-position: 100% 100%;
		transform: scale(1.08, 1.03);
	}

	.kard:hover > .kard-content {
		background-position: -10% 0%;
	}

	.kard:hover > .kard-icon {
		color: white;
	}

	.kard:before {
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

	.kard-content {
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

	.kard-title,
	.kard-subtitle {
		color: white;
		font-weight: 400;
		margin: 0px;
	}

	.kard-title {
		font-size: 5vmin;
	}

	.kard-subtitle {
		font-size: 2.5vmin;
		margin-top: 2vmin;
	}

	.kard-icon {
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
