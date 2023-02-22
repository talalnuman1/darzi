import {APP_API_URL} from '@env';

const BASE_URL = APP_API_URL;

export default {
  base: BASE_URL,
  categoryList: `${BASE_URL}categorylist`,
  auth: `${BASE_URL}auth`,
};
