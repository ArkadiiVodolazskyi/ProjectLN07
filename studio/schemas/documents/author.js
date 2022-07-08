import {TagIcon} from '@sanity/icons'

export default {
  name: 'author',
  type: 'document',
  icon: TagIcon,
  title: 'Author',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description'
    }
  ]
}
