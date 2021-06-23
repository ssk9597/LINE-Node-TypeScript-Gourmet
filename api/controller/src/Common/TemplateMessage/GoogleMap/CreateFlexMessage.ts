// Load the package
import { FlexMessage, FlexCarousel, FlexBubble } from '@line/bot-sdk';

// Load the module
import { sortRatingGourmet } from './SortRatingGourmet';

// types
import { Gourmet } from './type/CreateFlexMessage.type';

export const createFlexMessage = async (
  latitude: number,
  longitude: number
): Promise<FlexMessage | undefined> => {
  try {
    const sortGourmetData = await sortRatingGourmet(latitude, longitude);

    if (sortGourmetData === undefined) {
      return;
    }

    // FlexMessage
    const FlexMessageContents: FlexBubble[] = await sortGourmetData.map((gourmet: Gourmet) => {
      // Google Map API
      const Google_API = process.env.GOOGLE_PROD_API || undefined;

      // Create a URL for a store photo
      const photoURL = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${gourmet.photo_reference}&key=${Google_API}`;

      // Create a URL for the store details
      const encodeURI = encodeURIComponent(`${gourmet.name} ${gourmet.vicinity}`);
      const storeDetailsURL = `https://maps.google.co.jp/maps?q=${encodeURI}&z=15&iwloc=A`;

      // Create a URL for store routing information
      const storeRoutingURL = `https://www.google.com/maps/dir/?api=1&destination=${gourmet.geometry_location_lat},${gourmet.geometry_location_lng}`;

      const flexBubble: FlexBubble = {
        type: 'bubble',
        hero: {
          type: 'image',
          url: photoURL,
          size: 'full',
          aspectMode: 'cover',
          aspectRatio: '20:13',
        },
        body: {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'text',
              text: gourmet.name,
              size: 'xl',
              weight: 'bold',
            },
            {
              type: 'box',
              layout: 'baseline',
              contents: [
                {
                  type: 'icon',
                  url:
                    'https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png',
                  size: 'sm',
                },
                {
                  type: 'text',
                  text: `${gourmet.rating}`,
                  size: 'sm',
                  margin: 'md',
                  color: '#999999',
                },
              ],
              margin: 'md',
            },
          ],
        },
        footer: {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'button',
              action: {
                type: 'uri',
                label: '店舗詳細',
                uri: storeDetailsURL,
              },
            },
            {
              type: 'button',
              action: {
                type: 'uri',
                label: '店舗案内',
                uri: storeRoutingURL,
              },
            },
          ],
          spacing: 'sm',
        },
      };

      return flexBubble;
    });

    const flexContainer: FlexCarousel = {
      type: 'carousel',
      contents: FlexMessageContents,
    };

    const flexMessage: FlexMessage = {
      type: 'flex',
      altText: 'this is a flex message',
      contents: flexContainer,
    };

    return flexMessage;
  } catch (err) {
    console.log(err);
  }
};
