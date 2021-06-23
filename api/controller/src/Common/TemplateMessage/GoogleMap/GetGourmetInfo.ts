// Load the package
import axios, { AxiosResponse } from 'axios';

export const getGourmetInfo = async (latitude: number, longitude: number) => {
  try {
    // Google Map API
    const Google_API = process.env.GOOGLE_PROD_API;

    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=800&type=restaurant&key=${Google_API}&language=ja`;
    const gourmets: AxiosResponse<any> = await axios.get(url);
    const gourmetData = gourmets.data.results;

    return gourmetData;
  } catch (err) {
    console.log(err);
  }
};
