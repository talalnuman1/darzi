import {APP_API_URL} from '@env';

const BASE_URL = `${APP_API_URL}api/`;

export default {
  base: BASE_URL,
  categoryList: `${BASE_URL}categorylist`,
  subCategoryList: `${BASE_URL}subcategorylist`,
  auth: `${BASE_URL}auth`,
};
