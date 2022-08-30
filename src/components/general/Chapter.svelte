<script>
  export let portableText;
	const text = portableText.value.children.reduce((sum, child) => sum + child.text, '');
	const chapter_id = portableText.value.chapter_id || '';
	// TODO: use Footnote
</script>

<h4 id={chapter_id} class="chapter_title">
	{text}
</h4>