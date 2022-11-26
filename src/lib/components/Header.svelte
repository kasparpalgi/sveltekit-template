<script lang="ts">
	import { page } from '$app/stores';
</script>

<nav class="relative container mx-auto p-6">
	<div class="flex items-center justify-between">
		<a href="/" class:nav-active-route={$page.url.pathname === '/'}>Home</a>
		<a href="/about" class:nav-active-route={$page.url.pathname === '/about'}>About</a>
		<a href="/sign-up" class:nav-active-route={$page.url.pathname === '/sign-up'}>Sign up</a>
	</div>
</nav>
