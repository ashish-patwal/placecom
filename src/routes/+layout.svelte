<script>
	import '../app.css'
	import Navbar from '../components/navbar.svelte'
</script>

<div class="overflow-x-hidden w-screen h-screen bg-white">
	<Navbar />

	<main>
		<slot />
	</main>
</div>
