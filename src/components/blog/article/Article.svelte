<script>
	import {slugify} from '$src/service/helpers.js';
	import {PortableText} from '@portabletext/svelte';
	import ImageBlock from '$components/general/ImageBlock.svelte';
	import Link from '$components/general/Link.svelte';
	import Footnote from '$components/blog/article/Footnote.svelte';
	import Chapter from '$components/blog/article/Chapter.svelte';
	export let body;

	let chapter_index = 0;
	const body_with_h4_ids = !body ? null : (
    body.map(item => {
      if (item.style === 'h4') {
        const text = (item.children.reduce((sum, child) => sum + child.text, '')).split('[')[0];
        item.chapter_id = `ch-${slugify(text)}`;
				item.chapter_index = chapter_index;
				chapter_index++;
      }
      return item;
    })
  );
</script>

{#if body_with_h4_ids}
	<PortableText
		value={body_with_h4_ids}
		components={{
			types: {
				image: ImageBlock
			},
			marks: {
				link: Link,
				code: Footnote
			},
			block: {
				h4: Chapter
			}
		}}
	/>
{:else}
	body_with_h4_ids is null
{/if}