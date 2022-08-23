import axiosInstance from "./ApiConfig";
import { baseURL, commonUrl } from "./serviceUrl";

// Get cat lists
export const getCatsList = (requestBody) => {
  return new Promise(async (resolve, reject) => {

    try {
      const res = await axiosInstance.get(
        `${baseURL + commonUrl.IMAGES + commonUrl.SEARCH}?limit=${
          requestBody.limit
        }`
      );
      resolve(res);
    } catch (error) {
      console.log("[getCatsList]" + JSON.stringify(error));
      reject(error);
    }
  });
};
// https://api.thecatapi.com/v1/breeds
export const getBreeds = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let url = `${baseURL + commonUrl.BREED}`;
      const res = await axiosInstance.get(url);
      resolve(res);
    } catch (error) {
      console.log("API ERROR (getBreeds):: " + JSON.stringify(error.response));
      reject(error);
    }
  });
};
