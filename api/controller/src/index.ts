// Load the package
import { Client, ClientConfig, MiddlewareConfig, middleware, WebhookEvent } from '@line/bot-sdk';
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

// Load the module
import { sendLocationOrError } from './Common/SendMessage/SendLocationOrError';
import { sendTransportation } from './Common/SendMessage/sendTransportation';

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
          await sendTransportation(client, event);
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
