import qs from 'qs';
import { baseUrl, get } from './api';
import { ApiResponse, UserContent } from './types';

export const UsersContentQuery = qs.stringify({
  populate: {
    usersPictures: {
      fields: ['width', 'height', 'url', 'name'],
    },
  },
});

export const getUsersContentData = async (path: string) => {
  try {
    const url = new URL(path, baseUrl);

    url.search = UsersContentQuery;
    const response = await get<ApiResponse<UserContent>>(url.href);

    return response;
  } catch (error) {
    console.error(`Failed to fetch data: ${error}`);

    throw new Error();
  }
};
