<script lang="ts">
	import { page } from '$app/stores';
	var mobileMenuOpen: Boolean = false;
	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}
</script>

<div class="flex items-center justify-between">
	<!-- Logo -->
	<div class="pt-2">
		<img src="/img/logo.svg" alt="" />
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
	<!-- Hamburger Icon -->
	<button on:click={toggleMobileMenu} id="menu-btn" class:open={mobileMenuOpen} class="block hamburger md:hidden focus:outline-none">
		<span class="hamburger-top" />
		<span class="hamburger-middle" />
		<span class="hamburger-bottom" />
	</button>
</div>
{#if mobileMenuOpen}
<!-- Mobile Menu -->
<div class="md:hidden">
	<div
		id="menu"
		class="absolute flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
	>
		<a href="/">Home</a>
		<a href="/about">About</a>
		<a href="/sign-up">Sign-up FREE</a>
	</div>
</div>
{/if}
