// Load the package
import { Client, WebhookEvent } from '@line/bot-sdk';

// Load the module
import { getGourmetInfo } from '../TemplateMessage/GoogleMap/GetGourmetInfo';
import { formatGourmetData } from '../TemplateMessage/GoogleMap/FormatGourmetData';

export const sendGourmetMessage = async (client: Client, event: WebhookEvent): Promise<void> => {
  try {
    // If the message is different from the target, returned
    if (event.type !== 'message' || event.message.type !== 'location') {
      return;
    }

    // Retrieve the required items from the event
    const replyToken = event.replyToken;
    const latitude = event.message.latitude;
    const longitude = event.message.longitude;

    // await getGourmetInfo(latitude, longitude);
    await formatGourmetData(latitude, longitude);
  } catch (err) {
    console.log(err);
  }
};
