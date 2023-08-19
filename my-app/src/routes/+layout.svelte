<script lang="ts">
	import { page, navigating } from '$app/stores';
</script>

<nav>
	<a href="/" aria-current={$page.url.pathname === '/'}>home</a>
	<a href="/about" aria-current={$page.url.pathname === '/about'}>about</a>
	<a href="/blog" aria-current={$page.url.pathname === '/blog'}>blog</a>
	<a href="/todos" aria-current={$page.url.pathname === '/todos'}>todos</a>
	<a href="/roll" aria-current={$page.url.pathname === '/roll'}>roll</a>
	<a href="/deeply/nested" aria-current={$page.url.pathname === '/deeply/nested'}
		>a deeply nested route</a
	>
	<a href="/error/expected" aria-current={$page.url.pathname === '/error/expected'}
		>expected error</a
	>
	<a href="/error/unexpected" aria-current={$page.url.pathname === '/error/unexpected'}
		>unexpected error</a
	>
	<a href="/redirect" aria-current={$page.url.pathname === '/redirect'}>redirect</a>
	{#if $navigating}
		navigating to {$navigating.to?.url.pathname}
	{/if}
</nav>

<slot />
