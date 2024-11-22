import axios from 'axios';
import { Product, ProductResponse } from '../types/product';

const TOTAL_COUNT = 1000; // 전체에서의 Best상품을 뽑기 위해 첫 렌더링 시 모든 데이터를 요청.
const BASE_URL = 'https://panda-market-api.vercel.app/products';

const DEFAULT_HEADERS = {
  'Content-Type': 'application/json',
};

interface FetchProductsParams {
  page?: number;
  pageSize?: number;
  orderBy?: 'recent' | 'favorite';
  keyword?: string;
}

async function fetchProducts(
  params: FetchProductsParams
): Promise<ProductResponse | undefined> {
  try {
    const response = await axios.get<ProductResponse>(BASE_URL, {
      headers: DEFAULT_HEADERS,
      params: params,
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return undefined;
  }
}

export async function getAllProducts(): Promise<ProductResponse | undefined> {
  return fetchProducts({
    page: 1,
    pageSize: TOTAL_COUNT,
    orderBy: 'recent',
  });
}

export async function getProducts(
  pageNum: number,
  pageLimit: number,
  query = ''
): Promise<ProductResponse | undefined> {
  return fetchProducts({
    page: pageNum,
    pageSize: pageLimit,
    orderBy: 'recent',
    keyword: query,
  });
}

export async function getProductById(
  id: number
): Promise<Product | undefined> {
  try {
    const response = await axios.get<Product>(`${BASE_URL}/${id}`, {
      headers: DEFAULT_HEADERS,
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching product:', error);
    return undefined;
  }
}
