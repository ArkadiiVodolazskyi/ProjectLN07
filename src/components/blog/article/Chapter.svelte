<script>
	import Footnote from '$components/blog/article/Footnote.svelte';
  export let portableText;
	const chapter_id = portableText.value.chapter_id || '';
	const text = portableText.value.children.reduce((sum, child) => sum + child.text, '');
	portableText.plainTextContent = text;
</script>

<h4 id={chapter_id} class="chapter_title">
	{#if text.includes('[')}
		<Footnote portableText={portableText} />
	{:else}
		{text}
	{/if}
</h4>