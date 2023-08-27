<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import '../app.css';
	import Discord from '$lib/components/atom/icons/Discord.svelte';
	import Facebook from '$lib/components/atom/icons/Facebook.svelte';
	import Messenger from '$lib/components/atom/icons/Messenger.svelte';
	import Twitter from '$lib/components/atom/icons/Twitter.svelte';
	import Google from '$lib/components/atom/icons/Google.svelte';
	onMount(() => {
		document.documentElement.setAttribute('data-theme', 'dark');
	});
</script>

<div class="navbar bg-base-100">
	<div class="flex-auto">
		<a class="btn btn-ghost normal-case text-xl">daisyUI</a>

		<!-- search icon w-9 h-9でサイズ制御-->
		<button class="btn">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-8 h-8"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
				/>
			</svg>
		</button>
		<div class="form-control">
			<input type="text" placeholder="Search" class="input input-bordered w-96" />
		</div>
	</div>

	<div class="flex-auto gap-2">
		<button class="btn">
			<Discord />
		</button>
		<button class="btn">
			<Facebook />
		</button>
		<button class="btn">
			<Messenger />
		</button>
		<button class="btn">
			<Twitter />
		</button>
		<button class="btn">
			<Google />
		</button>
	</div>
	<div class="flex-auto gap-2">
		<div class="dropdown dropdown-end">
			<label tabindex="0" class="btn btn-ghost"> minokuba </label>
			<ul
				tabindex="0"
				class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
			>
				<li><a on:click={() => goto('card')}>Card</a></li>
				<li><a on:click={() => goto('chat')}>Chat</a></li>
				<li><a>Logout</a></li>
			</ul>
		</div>
	</div>
</div>
<slot />
