<script lang="ts">
	/** @type {import('./$types').PageData} */
	export let data: any;
</script>

<h1 class="text-3xl font-bold">{data.title}</h1>

<div>{@html data.content}</div>

<div class="flex flex-col">
{#each data.movies as movie}
	<p>{movie.title}</p>
{/each}
</div>