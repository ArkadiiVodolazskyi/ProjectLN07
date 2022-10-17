<script>
	export let categories,
							date_published_formatted,
							publishedAt;
</script>

<div class="meta">
	{#if categories && categories.length}
		<div class="categories">
			<h6>Категории: </h6>
			<ul class="categories_list">
				{@html categories.map(category => `<li>${category.title}</li>`)}
			</ul>
		</div>
	{/if}

	{#if date_published_formatted}
		<div class="post_publish_date">
			<h6>Дата публикации: </h6>
			<time datetime={publishedAt}>
				{date_published_formatted}
			</time>
		</div>
	{/if}
</div>

<style lang="sass">
	.meta
		margin: 2em auto 0
		border-radius: $rad
		line-height: 1.5em
		padding-inline: 2em
		text-align: center
		> *:not(:first-child)
			margin-top: .2em
		.categories, .post_publish_date
			display: flex
			align-items: center
			justify-content: center
			h6
				margin-right: 0.5em
		.categories_list li:not(:first-child)
			margin-left: .2em
</style>