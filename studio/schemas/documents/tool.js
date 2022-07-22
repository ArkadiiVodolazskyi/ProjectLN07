export default {
  name: 'tool',
  type: 'document',
  title: 'Tool',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description'
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
      name: 'subcategory',
      title: 'Subcategory',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'tool_category'}]
        }
      ],
      validation: (Rule) => Rule.required().max(1),
    },
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
