// Load the module
import { formatGourmetData } from './FormatGourmetData';

// types
import { gourmetData } from './type/SortRatingGourmet.type';

export const sortRatingGourmet = async (latitude: number, longitude: number) => {
  try {
    const gourmetData = await formatGourmetData(latitude, longitude);

    if (gourmetData === undefined) {
      return;
    }

    // Sort by rating
    gourmetData.sort((a: gourmetData, b: gourmetData) => b.rating - a.rating);

    // narrow it down to 10 stores.
    const sortGourmetData = gourmetData.slice(0, 10);

    return sortGourmetData;
  } catch (err) {
    console.log(err);
  }
};
