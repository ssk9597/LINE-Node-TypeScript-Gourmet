// Load the package
import { TemplateMessage } from '@line/bot-sdk';

export const TransportationTemplate = (): TemplateMessage => {
  return {
    type: 'template',
    altText: '移動手段は何ですか？',
    template: {
      type: 'confirm',
      text: '移動手段は何ですか？',
      actions: [
        {
          type: 'message',
          label: '車',
          text: '車です',
        },
        {
          type: 'message',
          label: '徒歩',
          text: '徒歩です',
        },
      ],
    },
  };
};
