export const typeDefs = `#graphql
  extend type Query {
    countries: [Country]
  }

  type Country {
    name: Name
    cca2: String
    cca3: String
    region: String
    subregion: String
    unMember: Boolean
    borders: [String!]!
    tld: [String]
    capital: [String]
    timezones: [String]
    flag: String
    area: Float
    population: Int
  }

  type Name {
    official: String
    common: String
  }
`;
