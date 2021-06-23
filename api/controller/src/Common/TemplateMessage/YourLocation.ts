// Load the package
import { TemplateMessage } from '@line/bot-sdk';

export const yourLocationTemplate = (): TemplateMessage => {
  return {
    type: 'template',
    altText: '現在地を送ってください！',
    template: {
      type: 'buttons',
      text: '今日はどこでご飯を食べる？',
      actions: [
        {
          type: 'uri',
          label: '現在地を送る',
          uri: 'https://line.me/R/nv/location/',
        },
      ],
    },
  };
};
