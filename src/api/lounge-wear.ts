import qs from 'qs';
import { baseUrl, get } from './api';
import { ApiResponse, LoungeWear } from './types';

export const LoungeWearReviewQuery = qs.stringify({
  populate: {
    picture: {
      fields: ['width', 'height', 'url', 'name'],
    },
  },
});

export const getLoungeWearData = async (path: string) => {
  try {
    const url = new URL(path, baseUrl);

    url.search = LoungeWearReviewQuery;
    const response = await get<ApiResponse<LoungeWear[]>>(url.href);

    return response;
  } catch (error) {
    console.error(`Failed to fetch data: ${error}`);

    throw new Error();
  }
};
