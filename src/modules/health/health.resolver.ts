const resolvers = {
  Query: {
    health: (): string => {
      return 'OK';
    },
  },
};

export default resolvers;
