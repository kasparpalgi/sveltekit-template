<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import '../app.css';
</script>

<div style="bg-slate-100 h-screen">
	<Header />
</div>

<div class="max-w-max mx-auto">
	<slot />
</div>
