<script lang="ts">
	import Testimonials from '$lib/components/Testimonials.svelte';
	import CTA from '$lib/components/CTA.svelte';
</script>

<!-- Hero Section -->
<section id="hero">
	<!-- Flex Container -->
	<div
		class="container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row"
	>
		<!-- Left item -->
		<div class="flex flex-col mb-32 space-y-12 md:w-1/2">
			<h1 class="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
				The only truly automatic time tracker
			</h1>
			<p class="max-w-sm text-center text-darkGrayishBlue md:text-left">
				Ideal for Remote or On-Site Developers and other professionals working with computers or
				smartphones.
			</p>
			<div class="flex justify-center md:justify-start">
				<a
					href="/sign-up"
					class="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
					>Get it FREE</a
				>
			</div>
		</div>
		<!-- Image -->
		<div class="md:w-1/2">
			<img src="img/illustration-intro.svg" alt="" />
		</div>
	</div>
</section>

<!-- Features Section -->
<section id="features">
	<!-- Flex container -->
	<div class="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
		<!-- What's Different -->
		<div class="flex flex-col space-y-12 md:w-1/2">
			<h2 class="max-w-md text-4xl font-bold text-center md:text-left">
				What's different about Klarity?
			</h2>
			<p class="max-w-sm text-center text-darkGrayishBlue md:text-left">
				Other time trackers that claim to be automated, will just give you a timeline where you see
				what app/program did you use during certain timeframe but it won't tell you what
				project/task did you work on so you will need to manually drag'n'drop timeframes. Bit better
				than manual time tracking but not ideal like Klarity.
			</p>
			<p class="max-w-sm text-center text-darkGrayishBlue md:text-left">
				Klarity believes in "privacy first" and doesn't tolerate secret spying. Users have a full
				control what data is shared with managers/customers. For personal growth in the local
				machine there's much more data available. Klarity can be also slef-hosted in your own server
				and its tracking part is open-source to verify that there's no sneaky things going on.
			</p>
		</div>

		<!-- Numbered List -->
		<div class="flex flex-col space-y-8 md:w-1/2">
			<!-- List Item 1 -->
			<div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
				<!-- Heading -->
				<div class="rounded-l-full bg-brightRedSupLight md:bg-transparent">
					<div class="flex items-center space-x-2">
						<div class="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">01</div>
						<h3 class="text-base font-bold md:mb-4 md:hidden">
							Gain Klarity on where the time is spent
						</h3>
					</div>
				</div>

				<div>
					<h3 class="hidden mb-4 text-lg font-bold md:block">
						Gain Klarity on where the time is spent
					</h3>
					<p class="text-darkGrayishBlue">
						Automatically know how much tme was spent on each project/task and/or during your free
						time
					</p>
				</div>
			</div>

			<!-- List Item 2 -->
			<div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
				<!-- Heading -->
				<div class="rounded-l-full bg-brightRedSupLight md:bg-transparent">
					<div class="flex items-center space-x-2">
						<div class="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">02</div>
						<h3 class="text-base font-bold md:mb-4 md:hidden">Stop loosing time</h3>
					</div>
				</div>

				<div>
					<h3 class="hidden mb-4 text-lg font-bold md:block">Stop loosing time</h3>
					<p class="text-darkGrayishBlue">
						As a professional you don't want to spend time reporting, explaining where time was
						spent nor constantly do the tedios time tracking. As a customer/manager you want to have
						a clear insignts.
					</p>
				</div>
			</div>

			<!-- List Item 3 -->
			<div class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
				<!-- Heading -->
				<div class="rounded-l-full bg-brightRedSupLight md:bg-transparent">
					<div class="flex items-center space-x-2">
						<div class="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">03</div>
						<h3 class="text-base font-bold md:mb-4 md:hidden">Grow your productivity</h3>
					</div>
				</div>

				<div>
					<h3 class="hidden mb-4 text-lg font-bold md:block">Grow your productivity</h3>
					<p class="text-darkGrayishBlue">
						Know when and where are you most productive and plan the right tasks, meetings and focus
						times to the right moment.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
<Testimonials />
<CTA />
