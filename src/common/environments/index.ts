import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';

const environments = dotenv.config();
dotenvExpand.expand(environments);

export const NODE_ENV: string = process.env.NODE_ENV ?? 'development';
export const PORT: string = process.env.PORT ?? '5000';

export const NEO4J_URL: string =
  process.env.NEO4J_URL ?? 'neo4j://localhost:7687';
export const NEO4J_USERNAME: string = process.env.NEO4J_USERNAME ?? 'neo4j';
export const NEO4J_PASSWORD: string = process.env.NEO4J_PASSWORD ?? 'password';
