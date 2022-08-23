let isStage = true; // To determine APIs for stage or production

let stageUrl = 'https://api.thecatapi.com/v1/'; // staging url
let liveUrl = '';
const baseURL = isStage ? stageUrl : liveUrl;
const commonUrl = {
  BREED: 'breeds/',
  SEARCH: 'search/',
  IMAGES:'images/'
};

export {baseURL, isStage, commonUrl};
