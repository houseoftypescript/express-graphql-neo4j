export type Country = {
  name: { official: string; common: string };
  cca2: string;
  cca3: string;
  region: string;
  subregion: string;
  unMember: boolean;
  borders: string[];
  tld: string[];
  capital: string[];
  timezones: string[];
  flag: string;
  area: number;
  population: number;
};
