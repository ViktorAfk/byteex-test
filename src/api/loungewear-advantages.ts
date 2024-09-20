import qs from 'qs';
import { baseUrl, get } from './api';
import { ApiResponse, LoungeWearAdvantages } from './types';

export const LoungeWearAdvantageReviewQuery = qs.stringify({
  populate: {
    advantageIcon: {
      fields: ['width', 'height', 'url', 'name'],
    },
  },
});

export const getLoungeWearAdvantagesData = async (path: string) => {
  try {
    const url = new URL(path, baseUrl);

    url.search = LoungeWearAdvantageReviewQuery;
    const response = await get<ApiResponse<LoungeWearAdvantages[]>>(url.href);

    return response;
  } catch (error) {
    console.error(`Failed to fetch data: ${error}`);

    throw new Error();
  }
};
