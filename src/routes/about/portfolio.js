import {getPortfoliosQuery} from '$src/service/queries.js';
import {client} from '$src/service/sanityClient.js';

export async function get() {
  const data = await client.fetch(/* groq */ `{
		"portfolios": ${getPortfoliosQuery()}
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
