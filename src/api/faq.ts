import { baseUrl, get } from './api';
import { ApiResponse, FaqData } from './types';

export const getFaqData = async (path: string) => {
  try {
    const url = new URL(path, baseUrl);

    const response = await get<ApiResponse<FaqData[]>>(url.href);

    return response;
  } catch (error) {
    console.error(`Failed to fetch data: ${error}`);

    throw new Error();
  }
};
