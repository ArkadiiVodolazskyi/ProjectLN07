export default {
  name: 'work',
  type: 'document',
  title: 'Portfolio work',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'link',
      type: 'slug',
      title: 'External link'
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image'
    },
    {
      name: 'short_description',
      title: 'Short description',
      type: 'portableText',
    }
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'link',
      media: 'image'
    },
    prepare({title = 'No title', slug, media}) {
      return {
        title,
        media,
        subtitle: slug.current
      }
    }
  }
}
