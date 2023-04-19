import { mergeResolvers } from '@graphql-tools/merge';
import healthTypeDefs from './health/health.graphql';
import healthResolvers from './health/health.resolver';

const rootTypeDefs = `#graphql
  type Query {
    health: String
  }
`;

const rootResolvers = {
  Query: {
    health: () => 'healthy',
  },
};

export const typeDefs = [rootTypeDefs, healthTypeDefs];

export const resolvers = mergeResolvers([rootResolvers, healthResolvers]);
