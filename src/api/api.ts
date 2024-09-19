import qs from 'qs';
import { ApiResponse, HeroAdvantage } from './types';

export const baseUrl = process.env.API_URL;

const heroScreenQuery = qs.stringify({
  populate: {
    icon: {
      fields: ['width', 'height', 'url', 'name'],
    },
  },
});

export const get = async <T>(url: string): Promise<T> => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    return await response.json();
  } catch (error) {
    console.error(`Failed to fetch data: ${error}`);

    throw new Error();
  }
};

export const getStrapiData = async (path: string) => {
  try {
    const url = new URL(path, baseUrl);
    url.search = heroScreenQuery;

    const response = await get<ApiResponse<HeroAdvantage[]>>(url.href);

    return response;
  } catch (error) {
    console.error(`Failed to fetch data: ${error}`);

    throw new Error();
  }
};
