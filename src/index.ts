import express from 'express';
import { configDotenv } from 'dotenv';

configDotenv();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, Node.js with TypeScript !');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
