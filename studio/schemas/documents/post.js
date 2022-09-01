const today = new Date();

const angles = [];
for (let i = 0; i <= 35; i++) {
  angles.push(i * 10);
}

const hexString = "0123456789abcdef";
const randomColor = () => {
  let hexCode = "#";
  for (let i = 0; i < 6; i++) {
    hexCode += hexString[Math.floor(Math.random() * hexString.length)];
  }
  return hexCode;
}

export default {
  name: 'post',
  type: 'document',
  title: 'Blog Post',
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
      description: 'Address of this post in the website',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: (Rule) => Rule.required()
    },
    {
      name: 'book_first_published',
      type: 'number',
      title: 'Year of first publishing',
      validation: (Rule) => Rule.max(parseInt(today.getFullYear())),
      initialValue: 2000
    },
    {
      name: 'authors',
      title: 'Authors',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'post_author'}]
        }
      ]
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'post_category'}]
        }
      ]
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published at',
      description: 'This can be used to schedule post for publishing',
      initialValue: today.toISOString()
    },
    {
      name: 'image',
      type: 'image',
      title: 'Main image'
    },
    {
      name: 'gradient',
      title: 'Background gradient settings',
      type: 'object',
      fields: [
        { name: 'color_1', title: 'First color', type: 'colorPicker' },
        { name: 'color_2', title: 'Second color', type: 'colorPicker' },
        {
          name: 'angle',
          title: 'Gradient angle',
          type: 'number',
          options: {
            list: angles
          }
        },
      ],
      initialValue: {
        color_1: randomColor(),
        color_2: randomColor(),
        angle: 180
      },
      options: {
        columns: 3
      }
    },
    {
      name: 'body',
      title: 'Post body',
      type: 'portableText',
    },
    {
      name: 'printed_version',
      title: 'PDF Version',
      type: 'file',
      options: {
        storeOriginalFilename: true,
        accept: '.docx,.pdf'
      }
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
      // authors: 'authors', // TODO: preview for author names
      book_first_published: 'book_first_published'
    },
    prepare({title = '-', media, book_first_published = ''}) {
      const preparedTitle = `${title} (${book_first_published})`;
      // const preparedAuthors = authors.map(author => { console.log(1, author, get_authors(author._ref)); });
      return {
        title: preparedTitle,
        media,
        // subtitle: preparedAuthors
      }
    }
  }
}
