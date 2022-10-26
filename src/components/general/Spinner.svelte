<script>
	export const size = '2em';
</script>

<div
	class="spinner"
	style={`--size: ${size}`}
></div>

<style lang="scss">
$p: 2em;
$r: 1em;
$b: 20*$r;
$d: 2*($b - $r);
$c: #001f3f, #f012be;
$n: length($c);
$q: 20%;
$t: 1s;

.spinner {
	overflow: hidden;
	position: relative;
	padding: $p;
	border-radius: 1em;
	animation:
		fbg 2*$n*$t steps(1) #{-$t} infinite,
		fsc 2*$t steps(1) infinite;

	&::after {
		position: absolute;
		top: 50%; left: 50%;
		margin: -$r (-.5*$d - $r);
		padding: $b;
		transform-origin: 50% 0;
		animation:
			fbg 2*$n*$t steps(1) -3*$t infinite,
			mov $t infinite alternate,
			exp $t ease-in infinite alternate;
		content: ''
	}
}

@keyframes fsc { 50% { transform: scaley(-1) } }

@keyframes fbg {
	@for $i from 0 to $n {
		#{$i/$n*100%} { background: nth($c, $i + 1) }
	}
}

@keyframes mov {
	0%, #{$q} { transform: none }
	100% { transform: translatey($r) rotate(.5turn) }
}

@keyframes exp {
	0%, #{$q} { clip-path: inset(0 .5*$d $d round 50%) }
	100% { clip-path: inset(0 round 50%/ 0) }
}
</style>