<script lang="ts">
	let button: string = '';
</script>

<h1 class="text-3xl font-bold underline">{button}</h1>
<button class="btn btn-primary" on:click={() => (button = 'One')}>One</button>
<button class="btn btn-secondary" on:click={() => (button = 'Two')}>Two</button>
<button class="btn btn-accent btn-outline" on:click={() => (button = 'Three')}>Three</button>

<div class="collapse bg-base-200">
	<input type="radio" name="my-accordion-1" checked />
	<div class="collapse-title text-xl font-medium">
		<button class="btn btn-primary">111</button>
	</div>
	<div class="collapse-content">
		<p>hello</p>
	</div>
</div>
<div class="collapse bg-base-200">
	<input type="radio" name="my-accordion-1" />
	<div class="collapse-title text-xl font-medium">Click to open this one and close others</div>
	<div class="collapse-content">
		<p>hello</p>
	</div>
</div>
<div class="collapse bg-base-200">
	<input type="radio" name="my-accordion-1" />
	<div class="collapse-title text-xl font-medium">Click to open this one and close others</div>
	<div class="collapse-content">
		<p>hello</p>
	</div>
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
