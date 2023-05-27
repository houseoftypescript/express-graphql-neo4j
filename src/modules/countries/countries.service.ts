import { get } from '../../common/libs/axios';
import { Country } from './countries.types';

export const getCountries = async (): Promise<Country[]> => {
  const url = 'https://restcountries.com/v3.1/all';
  const countries: Country[] = await get<Country[]>(url);
  const unMembers: Country[] = countries
    .filter(({ unMember }) => unMember)
    .map((country) => {
      const { borders = [], tld = [] } = country;
      return { ...country, borders: borders || [], tld: tld || [] };
    });
  unMembers.sort((a, b) => (a.name.common > b.name.common ? 1 : -1));
  return unMembers;
};
