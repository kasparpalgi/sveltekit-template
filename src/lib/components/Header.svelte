<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="flex items-center justify-between">
	<!-- Logo -->
	<div class="pt-2">
		<img src="/img/logo-white.svg" alt="" />
	</div>
	<!-- Menu items-->
	<div class="hidden md:flex space-x-6">
		<a
			href="/"
			class="hover:text-darkGrayishBlue"
			class:nav-active-route={$page.url.pathname === '/'}>Home</a
		>
		<a
			href="/about"
			class="hover:text-darkGrayishBlue"
			class:nav-active-route={$page.url.pathname === '/about'}>About</a
		>
		<a
			href="/sign-up"
			class="hover:text-darkGrayishBlue"
			class:nav-active-route={$page.url.pathname === '/sign-up'}>Sign up</a
		>
	</div>
	<!-- Free button -->
	<a
		href="/sign-up"
		class="hidden md:block p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
		>Free Forever</a
	>
</div>
