<script lang="ts">
	import type { ChatMessageType } from './ChatMessageType';
	export let chatMessage: ChatMessageType = {
		message: 'message',
		image: 'image',
		name: 'name',
		timestamp: '11:22',
		status: 'status',
		start: true
	};
</script>

<div class="chat chat-{chatMessage.start ? 'start' : 'end'}">
	<font />
	<div class="chat-image avatar">
		<font />
		<div class="w-10 rounded-full">
			<font />
			<img src={chatMessage.image} /><font />
		</div>
		<font />
	</div>
	<font />
	<div class="chat-header">
		<font />
		{chatMessage.name}<font />
		<time class="text-xs opacity-50">{chatMessage.timestamp}</time><font />
	</div>
	<font />
	<div class="chat-bubble">{chatMessage.message}</div>
	<font />
	<div class="chat-footer opacity-50">
		<font />
		{chatMessage.status}<font />
	</div>
	<font />
</div>
