import qs from 'qs';
import { baseUrl, get } from './api';
import { ApiResponse, OrderRule } from './types';

export const OrderRulesReviewQuery = qs.stringify({
  populate: {
    picture: {
      fields: ['width', 'height', 'url', 'name'],
    },
  },
});

export const getOrderRulesData = async (path: string) => {
  try {
    const url = new URL(path, baseUrl);

    url.search = OrderRulesReviewQuery;
    const response = await get<ApiResponse<OrderRule[]>>(url.href);

    return response;
  } catch (error) {
    console.error(`Failed to fetch data: ${error}`);

    throw new Error();
  }
};
