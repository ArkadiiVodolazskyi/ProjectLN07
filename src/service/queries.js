export function getPostsQuery(extraFilter) {
  return /* groq */ `*[
    _type == "post" &&
    defined(slug.current) &&
    publishedAt < now()
    ${extraFilter ? `&& ${extraFilter}` : ''}
  ] | order(publishedAt desc)`
}