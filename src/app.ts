import compression from 'compression';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { json, urlencoded } from 'express';
// import helmet from 'helmet';
import morgan from 'morgan';
import { RegisterRoutes } from './routes';

const app = express();

app.use(cors());
app.use(json());
// app.use(helmet());
app.use(compression());
app.use(cookieParser());
app.use(morgan('combined'));
app.use(urlencoded({ extended: true }));

RegisterRoutes(app);

export default app;
