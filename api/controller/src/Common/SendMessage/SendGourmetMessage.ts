// Load the package
import { Client, WebhookEvent } from '@line/bot-sdk';

// Load the module
import { createFlexMessage } from '../TemplateMessage/GoogleMap/CreateFlexMessage';

export const sendGourmetMessage = async (client: Client, event: WebhookEvent) => {
  try {
    // If the message is different from the target, returned
    if (event.type !== 'message' || event.message.type !== 'location') {
      return;
    }

    // Retrieve the required items from the event
    const replyToken = event.replyToken;
    const latitude = event.message.latitude;
    const longitude = event.message.longitude;

    const flexMessage = await createFlexMessage(latitude, longitude);

    if (flexMessage === undefined) {
      return;
    }

    await client.replyMessage(replyToken, flexMessage);
  } catch (err) {
    console.log(err);
  }
};
