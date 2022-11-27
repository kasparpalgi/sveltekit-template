<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '../app.css';
</script>

<nav class="relative container mx-auto p-6">
	<Header />
</nav>

<slot />

<Footer />