<script lang="ts">
	let button: string = '';
	let classes = 'font-bold underline';
	let openDialog = () => {
		errorModal.showModal();
	};
</script>

<h1 class="text-3xl {classes}">{button}</h1>
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

<!-- Open the modal using ID.showModal() method -->
<button class="btn" on:click={openDialog}>open modal</button>
<!-- <button class="btn" onclick="my_modal_1.showModal()">open modal</button> -->
<dialog id="errorModal" class="modal">
	<form method="dialog" class="modal-box">
		<h3 class="font-bold text-lg">Hello!</h3>
		<p class="py-4">ERROR !!! Press ESC key or click the button below to close</p>
		<div class="modal-action">
			<!-- if there is a button in form, it will close the modal -->
			<button class="btn">Close</button>
		</div>
	</form>
</dialog>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
