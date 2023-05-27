import neo4j, { AuthToken, Driver } from 'neo4j-driver';
import { NEO4J_PASSWORD, NEO4J_URL, NEO4J_USERNAME } from '../../environments';

const authToken: AuthToken = neo4j.auth.basic(NEO4J_USERNAME, NEO4J_PASSWORD);
export const driver: Driver = neo4j.driver(NEO4J_URL, authToken);
