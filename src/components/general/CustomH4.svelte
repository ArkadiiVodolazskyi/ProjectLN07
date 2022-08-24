<script>
  export let portableText;
	const text = portableText.value.children[0].text;
	const id = portableText.value.id || '';
</script>

<h4 id={id}>
	{text}
</h4>