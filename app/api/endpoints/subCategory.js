import axios from 'axios';
import apiRoutes from '../apiRoutes';
import axiosInstance from '../axiosInstance';

const getSubCategories = async () => {
  const controller = new AbortController();
  const signal = controller.signal;

  try {
    const response = await axiosInstance.get(`${apiRoutes.subCategory}`, {
      signal,
    });
    return response.data;
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log('Request cancelled');
    } else {
      console.log(error.message);
    }
  } finally {
    controller.abort();
  }
};
const getSubCategoryById = async id => {
  const controller = new AbortController();
  const signal = controller.signal;

  try {
    const response = await axiosInstance.get(`${apiRoutes.subCategory}/${id}`, {
      signal,
    });
    return response.data;
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log('Request cancelled');
    } else {
      console.log(error.message);
    }
  } finally {
    controller.abort();
  }
};

export default {
  getSubCategories,
  getSubCategoryById,
};
