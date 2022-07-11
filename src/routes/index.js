import {taxonomies_data, getPostsQuery} from '$lib/queries'
import {client} from '$lib/sanityClient'

// Fetch all valid posts to display in the homepage
export async function get() {
  const data = await client.fetch(/* groq */ `{
		"posts": ${getPostsQuery()},
    "authors": *[_type == "author"] { ${taxonomies_data} },
    "categories": *[_type == "category"] { ${taxonomies_data} }
  }`)

  if (data) {
    return {
      status: 200,
      body: data
    }
  }

  return {
    status: 404
  }
}
