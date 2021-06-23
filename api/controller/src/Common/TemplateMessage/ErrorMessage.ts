// Load the package
import { TextMessage } from '@line/bot-sdk';

export const errorMessageTemplate = (): TextMessage => {
  return {
    type: 'text',
    text: 'ごめんなさい、このメッセージは対応していません',
  };
};
