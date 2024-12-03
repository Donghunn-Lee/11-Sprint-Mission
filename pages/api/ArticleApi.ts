import axios from 'axios';

const BASE_URL: string = 'https://panda-market-api.vercel.app/articles';
const DEFAULT_PAGE_SIZE = 10;

export async function getArticles(
  pageSize: number = DEFAULT_PAGE_SIZE,
  orderBy: string = 'recent'
) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        pageSize: pageSize,
        orderBy: orderBy,
      },
    });
    console.log(response.data.list);
    return response.data.list;
  } catch (error) {
    console.error('Error fetching articles:', error);
    return null;
  }
}
