<script>
	import {onMount} from 'svelte';
  export let portableText;
	const content = portableText.plainTextContent.split('[');
	const text = content[0];

	const footnote = {
		text: content[1],
		node: null
	};

	onMount(() => {
		footnote.node.addEventListener('click', e => {
			const footnote_box = document.querySelector('.footnotes .footnote');
			const footnote_box_text = footnote_box.querySelector('.text');
			footnote_box_text.innerText = footnote.text;

			const chapter_parent = e.target.closest('.chapter_title');
			const top = chapter_parent ? chapter_parent.offsetTop : footnote.node.offsetTop;
			footnote_box.style.top = `${top}px`;

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
		position: relative
		transition: all .3s ease
		border: 1px solid var(--tx-1-o50)
		&:hover, &.active
			border-color: var(--accent-1)
	.footnotes .footnote
		transition: opacity .3s ease
		opacity: 0
		visibility: hidden
		&.active
			opacity: 1
			visibility: visible
			transform: translate(-50%, -25%) scale(1) !important
</style>