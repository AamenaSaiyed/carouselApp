import axiosInstance from './ApiConfig';
import {baseURL, commonUrl} from './serviceUrl';

// Get User Details
export const getCatsList = requestBody => {
  return new Promise(async (resolve, reject) => {
    console.log(`${baseURL +commonUrl.IMAGES +commonUrl.SEARCH}?limit=${requestBody.limit}`);
    try {
      const res = await axiosInstance.get(
        `${baseURL+commonUrl.IMAGES + commonUrl.SEARCH}?limit=${requestBody.limit}`,
      );
      resolve(res);
    } catch (error) {
      console.log('[getCatsList]' + JSON.stringify(error));
      reject(error);
    }
  });
};
