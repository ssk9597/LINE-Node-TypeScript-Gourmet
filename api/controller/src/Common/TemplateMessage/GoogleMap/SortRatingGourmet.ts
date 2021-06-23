// Load the module
import { formatGourmetData } from './FormatGourmetData';

// types
import { GourmetData, SortGourmetData } from './type/SortRatingGourmet.type';

export const sortRatingGourmet = async (
  latitude: number,
  longitude: number
): Promise<SortGourmetData | undefined> => {
  try {
    const gourmetData = await formatGourmetData(latitude, longitude);

    if (gourmetData === undefined) {
      return;
    }

    // Sort by rating
    gourmetData.sort((a: GourmetData, b: GourmetData) => b.rating - a.rating);

    // narrow it down to 10 stores.
    const sortGourmetData: SortGourmetData = gourmetData.slice(0, 10);

    return sortGourmetData;
  } catch (err) {
    console.log(err);
  }
};
