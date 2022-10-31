<script>
	export let size = '2.5em';
</script>

<div
	class="spinner"
	style={`--size: ${size};`}
></div>

<style lang="sass">
	.spinner
		width: var(--size)
		height: calc(var(--size) * 0.85)
		perspective: calc(var(--size) * 2)
		border: calc(var(--size) * 0.06) solid $tx-1
		position: relative
		background-color: $accent-1
		&::before, &::after
			content: ''
			position: absolute
			right: 0
			top: 0
			display: inline-block
			width: 50%
			height: 100%
			overflow: hidden
			background: $accent-1
			transform-style: preserve-3d
			transform-origin: left center

	.spinner::before, .spinner::after
		animation: pageTurn 2s ease-in infinite
	.spinner::after
		animation-delay: 1s

	@keyframes pageTurn
		0%
			transform: rotateY(0deg)
		20%
			background: darken($accent-1, 10%)
		40%
			background: darken($accent-1, 15%)
			transform: rotateY(-180deg)
		100%
			background: darken($accent-1, 20%)
			transform: rotateY(-180deg)
</style>