<script>
	import {onMount} from 'svelte';
  export let portableText;
	const content = portableText.plainTextContent.split('[');
	const text = content[0];
	const footnote_text = content[1];
	let has_footnote;

	onMount(() => {
		const footnote_box = document.querySelector('.footnotes .footnote');
		const footnote_box_text = footnote_box.querySelector('.text');

		has_footnote.addEventListener('click', e => {
			document.querySelectorAll('[data-action="show_footnote"]').forEach(el => el.classList.remove('active'));
			footnote_box_text.innerText = footnote_text;

			const chapter_parent = has_footnote.closest('.chapter_title');
			const top = chapter_parent ? chapter_parent.offsetTop : has_footnote.offsetTop;
			footnote_box.style.top = `${top}px`;

			footnote_box.classList.add('active');
			has_footnote.classList.add('active');
		});
	});
</script>

<span class="has_footnote" data-action="show_footnote" bind:this={has_footnote}>
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
			background-color: var(--accent-1)
	.footnotes .footnote
		transition: opacity .3s ease
		opacity: 0
		visibility: hidden
		&.active
			opacity: 1
			visibility: visible
			transform: translate(-50%, -25%) scale(1) !important
</style>