import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'nakamura-r-test',
  apiKey: process.env.API_KEY,
});