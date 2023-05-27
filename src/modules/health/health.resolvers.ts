export const resolvers = {
  Query: {
    health: (): string => {
      return 'OK';
    },
  },
};
