<script lang="ts">
	import { enhance } from '$app/forms';
	import { fly, slide } from 'svelte/transition';
	import type { PageData, ActionData } from './$types';
	export let data: PageData;
	export let form: ActionData;

	let creating = false;
</script>

<div class="centered">
	<h1>todos</h1>

	{#if form?.error}
		<p class="error">{form.error}</p>
	{/if}

	<!-- <form method="POST" action="?/create" use:enhance> -->
	<!--use:enhanceを拡張して、form#submit時の動作を拡張している。
        この場合formのリクエストが戻ってくるまで、<input>を非活性にしている。-->
	<form
		method="POST"
		action="?/create"
		use:enhance={() => {
			creating = true;
			return async ({ update }) => {
				await update();
				creating = false;
			};
		}}
	>
		<label>
			add a todo:
			<input
				disabled={creating}
				name="description"
				autocapitalize="off"
				value={form?.description ?? ''}
				required
			/>
			<!-- <input name="description" autocapitalize="off" value={form?.description ?? ''} required /> -->
		</label>
	</form>

	<ul class="todos">
		{#each data.todos as todo (todo.id)}
			<!--use:enhanceでクライアントサイドのJSを有効にし、flyやslideを使用してスライドインを実装-->
			<!-- <li> -->
			<li in:fly={{ x: 20 }} out:slide>
				<form method="POST" action="?/delete" use:enhance>
					<input type="hidden" name="id" value={todo.id} />
					<span>{todo.description}</span>
					<button aria-label="Mark as complete" />
				</form>
			</li>
		{/each}
	</ul>
</div>

<style>
	.centered {
		max-width: 20em;
		margin: 0 auto;
	}

	label {
		width: 100%;
	}

	input {
		flex: 1;
	}

	span {
		flex: 1;
	}

	button {
		border: none;
		background: url(./remove.svg) no-repeat 50% 50%;
		background-size: 1rem 1rem;
		cursor: pointer;
		height: 100%;
		aspect-ratio: 1;
		opacity: 0.5;
		transition: opacity 0.2s;
	}

	button:hover {
		opacity: 1;
	}

	.saving {
		opacity: 0.5;
	}
</style>
