<script lang="ts">
	import { page } from '$app/stores';
</script>

<nav class="relative container mx-auto p-6">
	<div class="flex items-center justify-between">
		<div class="pt-2">
			<img src="/img/logo-white.svg" alt="" />
		</div>
		<div class="hidden md:flex space-x-6">
			<a href="/" class="hover:text-darkGrayishBlue" class:nav-active-route={$page.url.pathname === '/'}>Home</a>
			<a href="/about" class="hover:text-darkGrayishBlue" class:nav-active-route={$page.url.pathname === '/about'}>About</a>
			<a href="/sign-up" class="hover:text-darkGrayishBlue" class:nav-active-route={$page.url.pathname === '/sign-up'}>Sign up</a>
		</div>
	</div>
</nav>
