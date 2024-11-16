import axios from 'axios';

const BASE_URL = 'https://panda-market-api.vercel.app/products/';

const DEFAULT_HEADERS = {
  'Content-Type': 'application/json',
};

export async function getCommentsByProductId(id, limit = 10) {
    const params = {
        limit: limit,
    }

  try {
    const response = await axios.get(`${BASE_URL}${id}/comments`, {
      headers: DEFAULT_HEADERS,
      params: params,
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}
