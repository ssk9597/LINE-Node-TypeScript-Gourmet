// Load the package
import { Client, WebhookEvent } from '@line/bot-sdk';

// Load the module
import { TransportationTemplate } from '../TemplateMessage/Transportation';

export const sendTransportation = async (client: Client, event: WebhookEvent): Promise<void> => {
  try {
    // If the message is different from the target, returned
    if (event.type !== 'message' || event.message.type !== 'location') {
      return;
    }

    // Retrieve the required items from the event
    const replyToken = event.replyToken;

    await client.replyMessage(replyToken, TransportationTemplate());
  } catch (err) {
    console.log(err);
  }
};
