import { baseUrl, get } from './api';
import { ApiResponse, Review } from './types';

export const getCustomersReviewsData = async (path: string) => {
  try {
    const url = new URL(path, baseUrl);

    const response = await get<ApiResponse<Review[]>>(url.href);

    return response;
  } catch (error) {
    console.error(`Failed to fetch data: ${error}`);

    throw new Error();
  }
};
