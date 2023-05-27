import { getCountries } from './countries.service';
import { Country } from './countries.types';

export const resolvers = {
  Query: {
    countries: async (): Promise<Country[]> => {
      return getCountries();
    },
  },
};
