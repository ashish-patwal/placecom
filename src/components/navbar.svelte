<script>
	$: menu = false

	const handleMenu = event => {
		let list = document.querySelector('ul')
		!menu
			? ((menu = !menu), list?.classList.add('top-20'), list?.classList.add('opacity-100'))
			: ((menu = !menu), list?.classList.remove('top-20'), list?.classList.remove('opacity-100'))
	}
</script>

<nav
	class="fixed left-0 top-0 z-10 w-full p-4 text-white backdrop-blur-md md:flex md:items-center md:justify-between"
>
	<div class="flex items-center justify-between">
		<span class="cursor-pointer font-navbar text-4xl font-bold">Placecom</span>
		<button on:click={handleMenu} class="mx-4 block cursor-pointer text-3xl md:hidden">
			{#if menu}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="h-9 w-9"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
				</svg>
			{:else}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="h-9 w-9"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
					/>
				</svg>
			{/if}
		</button>
	</div>
	<ul
		class="absolute left-0 top-[-24rem] flex w-full flex-col items-end opacity-0 transition-all duration-500 ease-in md:static md:w-auto md:flex-row md:items-center md:opacity-100"
	>
		<li class="mx-8 my-4 md:mx-4 md:my-0">
			<button
				class="rounded-md bg-gray-400/30 p-2 font-navbar text-lg text-white transition-all duration-500 hover:bg-blue-300/30"
				>Contact</button
			>
		</li>
		<li class="mx-8 my-4 md:mx-4 md:my-0">
			<button
				class="rounded-md bg-gray-400/30 p-2 font-navbar text-lg text-white transition-all duration-500 hover:bg-blue-300/30"
				>Discord</button
			>
		</li>
		<li class="mx-8 my-4 md:mx-4 md:my-0">
			<button
				class="rounded-md bg-gray-400/30 p-2 font-navbar text-lg text-white transition-all duration-500 hover:bg-blue-300/30"
				>About</button
			>
		</li>
	</ul>
</nav>
