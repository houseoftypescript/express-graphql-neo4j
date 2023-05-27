import { mergeResolvers } from '@graphql-tools/merge';
import { Neo4jGraphQL } from '@neo4j/graphql';
import { driver } from '../common/libs/neo4j';
import {
  countriesResolvers,
  countriesTypeDefs,
} from './countries/countries.module';
import { healthResolvers, healthTypeDefs } from './health/health.module';

const rootTypeDefs = `#graphql
  type Query {
    test: String
  }
`;

const rootResolvers = {
  Query: {
    test: (): string => 'test',
  },
};

const typeDefs = [rootTypeDefs, healthTypeDefs, countriesTypeDefs];

const resolvers = mergeResolvers([
  rootResolvers,
  healthResolvers,
  countriesResolvers,
]);

export const neo4jSchema = new Neo4jGraphQL({ driver, resolvers, typeDefs });
