<script type="ts">
	let number = 0;

	async function roll() {
		const response = await fetch('/roll');
		number = await response.json();
	}
</script>

<p>Svelte上に作成したAPIを呼び出す例。</p>

<button on:click={roll}>Roll the dice</button>

{#if number !== undefined}
	<p>You rolled a {number}</p>
{/if}
