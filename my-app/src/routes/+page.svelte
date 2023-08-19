<script lang="ts">
	import type { PageData } from './$types';
	import { message } from '$lib/messages';
	export let data: PageData;
</script>

<h1>Hello ,{data.visited ? 'firend' : 'stranger'}!</h1>
<p>this is the home page.</p>
<p>{message}</p>
