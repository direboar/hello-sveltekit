<script lang="ts">
	import ChatMessage from '$lib/components/molecule/ChatMessage.svelte';
	import type { ChatMessageType } from '$lib/components/molecule/ChatMessageType';

	let chatMessages: ChatMessageType[] = [
		{
			message: 'You were the Chosen One!',
			image: 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg',
			start: true,
			name: 'Obi-Wan Kenobi',
			status: 'Delivered',
			timestamp: '12:45'
		},
		{
			message: 'I hate you!',
			image: 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg',
			start: false,
			name: 'Anakin',
			status: 'Seen at 12:46',
			timestamp: '12:46'
		}
	];
</script>

{#each chatMessages as chatMessage}
	<ChatMessage {chatMessage} />
{/each}
