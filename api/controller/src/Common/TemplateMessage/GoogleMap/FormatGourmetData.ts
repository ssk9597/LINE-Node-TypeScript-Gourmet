// Load the module
import { getGourmetInfo } from './GetGourmetInfo';

// types
import { RequiredGourmetData } from './type/FormatGourmetData.type';

export const formatGourmetData = async (latitude: number, longitude: number) => {
  try {
    const gourmetData = await getGourmetInfo(latitude, longitude);

    // Extract only the data you need
    const sufficientDataArray: any = gourmetData.filter(
      (gourmet: any) => gourmet.photos !== undefined || null
    );

    const requiredGourmetData: RequiredGourmetData = sufficientDataArray.map((gourmet: any) => {
      return {
        geometry_location_lat: gourmet.geometry.location.lat,
        geometry_location_lng: gourmet.geometry.location.lng,
        name: gourmet.name,
        photo_reference: gourmet.photos[0].photo_reference,
        rating: gourmet.rating,
        vicinity: gourmet.vicinity,
      };
    });

    return requiredGourmetData;
  } catch (err) {
    console.log(err);
  }
};
