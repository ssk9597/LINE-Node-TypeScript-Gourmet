// Load the package
import { Client, WebhookEvent } from '@line/bot-sdk';

// Load the module
import { yourLocationTemplate } from '../TemplateMessage/YourLocation';
import { errorMessageTemplate } from '../TemplateMessage/ErrorMessage';

export const sendLocationOrError = async (client: Client, event: WebhookEvent): Promise<void> => {
  try {
    // If the message is different from the target, returned
    if (event.type !== 'message' || event.message.type !== 'text') {
      return;
    }

    // Retrieve the required items from the event
    const replyToken = event.replyToken;
    const text = event.message.text;

    // Perform a conditional branch
    if (text === 'お店を探す') {
      await client.replyMessage(replyToken, yourLocationTemplate());
    } else {
      await client.replyMessage(replyToken, errorMessageTemplate());
    }
  } catch (err) {
    console.log(err);
  }
};
