import express from 'express';
import cors from 'cors';
import { schema } from './datasets/schema.js';
import { data } from './datasets/data.js';
import { companies } from './datasets/companies.js';
import { record } from './datasets/record.js';

const app = express();
const port = 8080;

app.use(cors()); 

app.get('/api/data', (req, res) => {
  try {
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/schema', (req, res) => {
  try {
    res.json(schema);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/companies', (req, res) => {
  try {
    res.json(companies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/record', (req, res) => {
  try {
    res.json(record);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});