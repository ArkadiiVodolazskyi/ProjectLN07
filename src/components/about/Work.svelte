<script>
	import {PortableText} from '@portabletext/svelte';
	import {urlFor} from '$src/service/sanityClient.js';

	export let portfolio;
  const {
    title,
		link,
		image,
		short_description
  } = portfolio;

	const post_thumbnail_url = image ? urlFor(image) : null; // TODO: default 'blank' image
</script>

<a class="card work" href={link.current}>
	<img src={post_thumbnail_url} alt={title}>
	<h4>{title}</h4>
	<div class="short_description">
		<PortableText value={short_description} />
	</div>
</a>