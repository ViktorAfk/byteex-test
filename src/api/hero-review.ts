import qs from 'qs';
import { baseUrl, get } from './api';
import { ApiResponse, HeroReview } from './types';

export const heroReviewQuery = qs.stringify({
  populate: {
    userIcon: {
      fields: ['width', 'height', 'url', 'name'],
    },
  },
});

export const getReviewData = async (path: string) => {
  try {
    const url = new URL(path, baseUrl);
    url.search = heroReviewQuery;

    const response = await get<ApiResponse<HeroReview>>(url.href);

    return response;
  } catch (error) {
    console.error(`Failed to fetch data: ${error}`);

    throw new Error();
  }
};
