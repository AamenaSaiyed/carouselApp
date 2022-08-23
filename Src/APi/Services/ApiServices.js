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
//get breed types
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
// Get cat lists by breed

export const getCatsListByBreed = (requestBody) => {
  console.log(
    `${baseURL + commonUrl.IMAGES + commonUrl.SEARCH}?breed_ids={${
      requestBody.breed_ids
    }}&limit=${requestBody.limit}`
  );
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axiosInstance.get(
        `${baseURL + commonUrl.IMAGES + commonUrl.SEARCH}?breed_ids=${
          requestBody.breed_ids
        }&limit=${requestBody.limit}`
      );
      resolve(res);
    } catch (error) {
      console.log("[getCatsList]" + JSON.stringify(error));
      reject(error);
    }
  });
};
