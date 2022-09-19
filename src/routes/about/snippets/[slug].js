import {client} from '$src/service/sanityClient.js';

export async function get({params: {slug}}) {
  const snippet = await client.fetch(/* groq */ `*[_type == "snippet" && slug.current == "${slug}"][0]`)

  if (snippet) {
    return {
      status: 200,
      body: {
        snippet
      }
    }
  }

  return {
    status: 404
  }
}