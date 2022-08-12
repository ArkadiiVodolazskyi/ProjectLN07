export default {
  title: 'Post author',
  name: 'post_author',
  type: 'document',
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'Author photo'
    },
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    }
  ]
}