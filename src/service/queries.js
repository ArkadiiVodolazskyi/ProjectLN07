export const getPostsQuery = extraFilter => {
  return /* groq */ `*[
    _type == "post" &&
    defined(slug.current) &&
    publishedAt < now()
    ${extraFilter ? `&& ${extraFilter}` : ''}
  ] | order(publishedAt desc) {
    authors[]->{name},
    body,
    book_first_published,
    categories[]->{title},
    contents,
    gradient,
    image,
    publishedAt,
    slug,
    title
  }`;
}

export const getToolsCategoriesQuery = () => {
  return /* groq */ `*[_type == "tool_category"]{
    title,
    tools[]->{
      description,
      image,
      link,
      title
    }
  }`;
}

export const getPortfoliosQuery = () => {
  return /* groq */ `*[_type == "work"]`;
}