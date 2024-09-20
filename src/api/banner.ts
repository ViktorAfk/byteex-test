import { baseUrl, get } from './api';
import { ApiResponse, Banner } from './types';

export const getBannersData = async (path: string) => {
  try {
    const url = new URL(path, baseUrl);

    const response = await get<ApiResponse<Banner[]>>(url.href);

    return response;
  } catch (error) {
    console.error(`Failed to fetch data: ${error}`);

    throw new Error();
  }
};
