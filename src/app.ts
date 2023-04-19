import cors from 'cors';
import express from 'express';
import { RegisterRoutes } from './routes';

const app = express();

app.use(cors());
app.use(express.json());

RegisterRoutes(app);

export default app;
