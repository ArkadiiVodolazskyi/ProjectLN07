<script>
	import {onMount} from 'svelte';
	import Icon from '$components/general/Icon.svelte';
	let footnote, close_footnote, scroll_check;
	const free_footnotes = () => {
		footnote.classList.remove('active');
		const show_footnote_active = document.querySelector('.active[data-action="show_footnote"]');
		show_footnote_active?.classList.remove('active');
	}

	onMount(() => {
		(() => {

			window.addEventListener('scroll', e => {
				clearInterval(scroll_check);
				scroll_check = setInterval(() => {
					clearInterval(scroll_check);
					free_footnotes();
				}, 50);
			});

			// Close footnote by click
			document.body.addEventListener('click', e => {
				if (
					e.target.closest('.footnote') !== footnote &&
					e.target.closest('[data-action="close_footnote"]') !== close_footnote
				) { return; }
				footnote?.classList.remove('active');
				document.querySelector('.active[data-action="show_footnote"]')?.classList.remove('active');
			});

			footnote.addEventListener('click', e => footnote.classList.remove('active'));
			close_footnote.addEventListener('click', e => footnote.classList.remove('active'));

		})();
	});
</script>

<div class="footnotes">
	<div class="footnote" bind:this={footnote}>
		<button class="close" data-action="close_footnote" bind:this={close_footnote}>
			<Icon type={'cross'} />
		</button>
		<div class="text"></div>
	</div>
</div>

<style lang="sass">
.footnotes
	font-size: .9em
	margin-top: var(--contents-padding)
	line-height: 1.3em
	position: relative
.footnote
	position: absolute
	z-index: 5
	width: calc( 100% - calc(var(--contents-padding) * 2) )
	left: 50%
	border-radius: calc($rad * .2)
	padding: 1em 1em 1em 1.2em
	cursor: pointer
	background-color: rgba($bg-1, 0.5)
	box-shadow: $shd-4
	transition: opacity $tr-2, background-color $tr-2, transform $tr-2
	transform: translate(-50%, -15%) scale(.95)
	&:hover
		border-color: darken($accent-1, 10%)
		background-color: rgba($bg-1, 0.25)
	.close
		margin: 0 0 .5em .5em
		float: right
		display: flex
		align-items: center
		justify-content: center
		width: 1.5em
		height: 1.5em
		border-radius: 50%
		border: 1px solid rgba($tx-1, 0.5)
		transition: border-color $tr-2, transform $tr-2
		:global(svg)
			width: 90%
			height: 90%
			fill: rgba($tx-1, 0.5)
			transition: fill $tr-2
		&:hover
			border-color: $accent-1
			transform: scale(1.1)
			:global(svg)
				fill: lighten($accent-1, 10%)
</style>

