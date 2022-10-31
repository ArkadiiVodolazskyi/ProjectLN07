<script>
	export let size = '1.5em';
</script>

<div
	class="spinner"
	style={`--size: ${size};`}
></div>

<style lang="sass">
	@keyframes fsc
		50%
			transform: translate(-50%, -50%) scaleY(-1)

	@keyframes fbg
		0%
			background: $accent-2 none repeat scroll 0% 0%
		50%
			background: saturate($accent-1, 10%) none repeat scroll 0% 0%

	@keyframes mov
		0%
			transform: none
		20%
			transform: none
		100%
			transform: translateY(1em) rotate(0.5turn)

	@keyframes exp
		0%
			clip-path: inset(0 calc(var(--size) * 10) calc(var(--size) * 20) round 50%)
		20%
			clip-path: inset(0 calc(var(--size) * 10) calc(var(--size) * 20) round 50%)
		100%
			clip-path: inset(0 round 50% / 0px)

	.spinner
		overflow: hidden
		position: relative
		width: var(--size)
		height: var(--size)
		padding: var(--size)
		border-radius: calc(var(--size) * 0.5)
		animation: fbg 4s steps(1) -1s infinite, fsc 2s steps(1) infinite
		&::after
			content: ''
			position: absolute
			top: 50%
			left: 50%
			margin: calc(var(--size) * -1) calc(var(--size) * -10)
			padding: calc(var(--size) * 10)
			transform-origin: 50% 0
			animation: fbg 4s steps(1) -3s infinite, mov 1s infinite alternate, exp 1s ease-in infinite alternate
</style>