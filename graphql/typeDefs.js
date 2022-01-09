const { gql } = require('apollo-server');

const typeDefs = gql`
  type Stats {
    country: String,
    deaths: Int,
    critical: Int,
    confirmed: Int,
    recovered: Int
  }

  type Query {
    getDailyReportByCountryName(countryName: String): [Stats],
  }
`;

module.exports = typeDefs;