<script>
  export let portableText;
	const text = portableText.value.children[0].text;
	const chapter_id = portableText.value.chapter_id || '';
</script>

<h4 id={chapter_id} class="chapter_title">
	{text}
</h4>