// Load the package
import { Client, ClientConfig } from '@line/bot-sdk';
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

// Read the ports from process.env.file
const PORT = process.env.PORT || 3000;

// Load the access token and channel secret from the .env file
const clientConfig: ClientConfig = {
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

// Start the server
app.listen(PORT, (): void => {
  console.log('http://localhost:3000');
});
