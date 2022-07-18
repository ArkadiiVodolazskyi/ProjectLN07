import {client} from '$src/service/sanityClient.js';

export async function get({params: {slug}}) {
  const post = await client.fetch(/* groq */ `*[_type == "post" && slug.current == "${slug}"][0]{
    ...,
    body[] {
      ...,
			children[] {
				...,
			}
    }
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
