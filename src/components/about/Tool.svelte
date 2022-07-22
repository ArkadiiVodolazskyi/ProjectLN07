<script>
	import {urlFor} from '$src/service/sanityClient.js';

	export let tool;
  const {
    title,
		link,
		image
  } = tool;

	const post_thumbnail_url = image ? urlFor(image) : null; // TODO: default 'blank' image
</script>

<a class="card tool" href={link.current}>
	<img src={post_thumbnail_url} alt={title}>
	<h4>{title}</h4>
</a>