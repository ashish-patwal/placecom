<script>
	import '../app.css'
	import Header from '../components/header.svelte'
	import Footer from '../components/footer.svelte'
</script>

<main data-theme="cupcake">
	<Header />
	<slot />
	<Footer />
</main>

<style>
	:root::-webkit-scrollbar {
		display: none;
	}

	:root {
		-ms-overflow-style: none;
		scrollbar-width: none;
		overflow-x: hidden;
		width: '100vw';
		height: '100vh';
	}
</style>
