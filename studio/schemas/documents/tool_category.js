export default {
  title: 'Tool category',
  name: 'tool_category',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      name: 'tools',
      title: 'Tools',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'tool'}]
        }
      ],
      validation: (Rule) => Rule.unique()
    }
  ]
}