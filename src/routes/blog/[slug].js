import {client} from '$src/service/sanityClient.js';

export async function get({params: {slug}}) {
  const post = await client.fetch(/* groq */ `*[_type == "post" && slug.current == "${slug}"][0]{
    authors[]->{name},
    body,
    book_first_published,
    categories[]->{title},
    contents,
    gradient,
    image,
    publishedAt,
    slug,
    title,
    "printed_version": printed_version.asset->url
  }`)

  if (post) {
    return {
      status: 200,
      body: {
        post
      }
    }
  }

  return {
    status: 404
  }
}
