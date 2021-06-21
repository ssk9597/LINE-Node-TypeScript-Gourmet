// Load the package
import { Client, ClientConfig, MiddlewareConfig, middleware, WebhookEvent } from '@line/bot-sdk';
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import axios, { AxiosResponse } from 'axios';

// Load the module
import { sendLocationOrError } from './Common/SendMessage/SendLocationOrError';

// Read the ports from process.env.file
const PORT = process.env.PORT || 3000;

// Load the access token and channel secret from the .env file
const clientConfig: ClientConfig = {
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN || '',
  channelSecret: process.env.CHANNEL_SECRET || '',
};
const middlewareConfig: MiddlewareConfig = {
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN || '',
  channelSecret: process.env.CHANNEL_SECRET || '',
};

// Instantiate
const app: express.Express = express();
const client: Client = new Client(clientConfig);

// Do routing
// Test
app.get('/', (req: express.Request, res: express.Response): void => {
  res.send('Hello World');
});

// API Routing
app.post(
  '/api/line/message',
  middleware(middlewareConfig),
  async (req: express.Request, res: express.Response): Promise<void> => {
    const events: WebhookEvent[] = req.body.events;

    events.map(
      async (event: WebhookEvent): Promise<void> => {
        try {
          await sendLocationOrError(client, event);

          // const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=1500&type=food&key=${process.env.GOOGLE_DEV_API}`;
          // const data = await axios.get(url);
          // console.log(data);
          console.log(event);
        } catch (err) {
          console.log(err);
        }
      }
    );
  }
);

// Start the server
app.listen(PORT, (): void => {
  console.log('http://localhost:3000');
});
