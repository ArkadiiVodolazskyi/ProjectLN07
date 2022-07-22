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
      type: 'string',
      validation: (Rule) => Rule.required(),
      // TODO: use taxonomies instead of list
      options: {
        list: [
          'Цветовая палитра',
          'Шрифты',
          'Иконки',
          'Изображения',
          'Экосистема',
          'Образовательные ресурсы',
          'Документация',
          'Задачи по программированию',
        ]
      }
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
