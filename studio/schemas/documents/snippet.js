export default {
  name: 'snippet',
  type: 'document',
  title: 'Snippet',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 120
      },
      validation: (Rule) => Rule.required()
    },
    {
      name: 'description',
      title: 'Post body',
      type: 'portableText',
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'tech_tag'}]
        }
      ]
    },
  ]
}
