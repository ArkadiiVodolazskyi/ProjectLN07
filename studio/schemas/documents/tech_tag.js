export default {
  title: 'Tech Tag',
  name: 'tech_tag',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image'
    },
    {
			name: 'color',
			title: 'Color',
			type: 'colorPicker'
		},
  ]
}