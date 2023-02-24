import axios from 'axios';
import axiosInstance from '../axiosInstance';

const getAllProducts = async () => {
  const controller = new AbortController();
  const signal = controller.signal;

  try {
    const response = await axiosInstance.get('design', {signal});
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
    const response = await axiosInstance.get(`design/${id}`, {signal});
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
};
