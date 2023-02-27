import axios from 'axios';
import apiRoutes from '../apiRoutes';
import axiosInstance from '../axiosInstance';

const getAllProducts = async () => {
  const controller = new AbortController();
  const signal = controller.signal;

  try {
    const response = await axiosInstance.get(`${apiRoutes.design}`, {signal});
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
const getProductsBySubCategoryId = async id => {
  const controller = new AbortController();
  const signal = controller.signal;

  try {
    const response = await axiosInstance.get(`${apiRoutes.design}/${id}`, {
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
const searchProducts = async data => {
  const controller = new AbortController();
  const signal = controller.signal;

  try {
    const response = await axiosInstance.get(
      `${apiRoutes.design}search?name=${data}`,
      {
        signal,
      },
    );
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
  getAllProducts,
  getProductsBySubCategoryId,
  searchProducts,
};
