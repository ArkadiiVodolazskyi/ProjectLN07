<script>
	export let type = 'default';

	const icons = {
		opened_book: `
		viewBox="0 0 1600 150"
		preserveAspectRatio="none">
			<path d="M1600 150H800H0V-1.19209e-06H375.92C763.867 4.7 800 68.8636 800 68.8636C800 68.8636 842.667 4.7 1230.67 -1.19209e-06H1600V150Z" />
		</svg>`
	};
</script>

{@html `<svg xmlns="http://www.w3.org/2000/svg"
	class="ico_${type}"
	${icons[type]}`
}