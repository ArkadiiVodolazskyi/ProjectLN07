<script>
	export let size = '3.5em';
</script>

<div
	class="spinner"
	style={`--size: ${size};`}
></div>

<style lang="sass">
	.spinner
		width: var(--size)
		height: var(--size)
		display: inline-block
		position: relative
		&::before,
		&::after
			content: ''
			width: 100%
			height: 100%
			border-radius: 50%
			position: absolute
			left: 0
			top: 0
			animation: animloader 2s ease-in-out infinite
			transform: scale(0)
			border: 1px solid $tx-1
		&::after
			animation-delay: 0.75s

	@keyframes animloader
		0%
			transform: scale(0)
			opacity: 1
		100%
			transform: scale(1)
			opacity: 0
</style>