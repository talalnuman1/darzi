import axios from 'axios';
import axiosInstance from '../axiosInstance';

const getCategories = async () => {
  const controller = new AbortController();
  const signal = controller.signal;

  try {
    const response = await axiosInstance.get('categorylist', {signal});
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
  getCategories,
};
