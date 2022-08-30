<script>
	import {onMount} from 'svelte';
  export let portableText;
	const content = portableText.plainTextContent.split('[');
	const text = content[0];

	const footnote = {
		text: content[1],
		node: null
	};

	// TODO: remove active on scroll or something

	onMount(() => {
		footnote.node.addEventListener('click', e => {
			const footnote_box = document.querySelector('.footnotes .footnote');
			footnote_box.innerText = footnote.text;
			footnote_box.classList.toggle('active');
			e.target.classList.toggle('active');
		});
	});
</script>

<span class="has_footnote" data-action="show_footnote" bind:this={footnote.node}>
	{text}
</span>

<style lang="sass" global>
	.has_footnote
		border-radius: calc(var(--radius) * .2)
		padding: 0 .2rem
		cursor: pointer
		transition: all .3s ease
		border: 1px solid var(--color-text-primary-o)
		&:hover, &.active
			border-color: var(--color-accent-primary)
	.footnotes .footnote
		transition: opacity .3s ease
		opacity: 0
		visibility: hidden
		&.active
			opacity: 1
			visibility: visible
</style>