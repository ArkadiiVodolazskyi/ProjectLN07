<a class="logo" href='/'>
	<div class="logo_icon_wrapper">
		<div class="logo_ln"><i></i><i></i><i></i><i></i><i></i><i></i></div>
	</div>
	<h1>Literary Note</h1>
</a>

<style lang="sass">
	a
		padding: var(--links-padding)
		fill: $tx-1
	.logo
		display: inline-flex
		align-items: center
		fill: darken($bg-1, 10%)
		&:hover
			color: $tx-2
			fill: darken($tx-2, 10%)
			.logo_icon_wrapper
				background-color: rgba($tx-1, 0.8)
				--color: #{darken($tx-2, 25%)}
			&::before
				opacity: 1
				background-color: var(--color)
				transform: translate(-50%, -50%) scale(1)
			.logo_ln i
				&:nth-of-type(1)
					transform: translate(var(--shiftf), var(--shiftf))
				&:nth-of-type(2)
					transform: translate(var(--shiftf), var(--shiftb))
				&:nth-of-type(3)
					transform: translate(0, var(--shiftb))
				&:nth-of-type(4)
					transform: translate(0, var(--shiftb))
				&:nth-of-type(5)
					height: 88%
					transform: translate(calc(var(--shiftb) * 0.5), calc(var(--shiftf) + var(--shiftf) * 0.5))
				&:nth-of-type(6)
					height: 86%
					transform: translate(calc(var(--shiftb) * 0.5), calc(var(--shiftf) + var(--shiftf) * 0.5))
	.logo_icon_wrapper
		--size: 4em
		--color: #{darken($bg-1, 10%)}
		--shiftb: -2px
		--shiftf: 2px
		width: 2em
		height: 2em
		padding: 2px
		margin-right: .8em
		border-radius: 0.05em
		transition: background-color $tr-2
		background-color: rgba($tx-1, 0.9)
		position: relative
		&::before
			content: ''
			position: absolute
			z-index: -1
			left: 50%
			top: 50%
			width: calc(100% + 8px)
			height: calc(100% + 8px)
			background-color: #{$tsp}
			transform-origin: center
			border-radius: inherit
			transition: opacity $tr-1, translate $tr-1, background-color $tr-4
			opacity: 0
			transform: translate(-50%, -50%) scale(0)
	.logo_ln
		aspect-ratio: 1
		position: relative
		i
			position: absolute
			background-color: var(--color)
			transition: transform 0.2s ease-in-out, height 0.2s ease-in-out
			&:nth-of-type(1)
				width: 18.4%
				height: 76.1%
				left: 0
				top: 0
			&:nth-of-type(2)
				width: 18.4%
				height: 18%
				left: 0
				top: 82%
			&:nth-of-type(3)
				width: 18.4%
				height: 18%
				left: 24.7%
				top: 82%
			&:nth-of-type(4)
				clip-path: polygon(0 0, 100% 50%, 100% 100%, 0% 100%)
				width: 18.4%
				height: 83%
				left: 42%
				top: 17%
			&:nth-of-type(5)
				clip-path: polygon(50% 0, 100% 50%, 100% 100%, 0 0)
				width: 41.2%
				height: 100%
				left: 42%
				top: 0
			&:nth-of-type(6)
				width: 18.4%
				height: 100%
				right: 0
				top: 0
	h1
		font-size: 1em
		font-weight: 500
		text-transform: uppercase
</style>