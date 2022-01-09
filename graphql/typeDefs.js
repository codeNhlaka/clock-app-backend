const { gql } = require('apollo-server');

const typeDefs = gql`
  type Province {
    province: String,
    confirmed: Int,
    recovered: Int,
    deaths: Int,
    active: Int
  }

  type Stats {
    country: String,
    provinces: [Province],
    date: String
  }

  type Query {
    getDailyReportByCountryName(countryName: String): [Stats],
  }
`;

module.exports = typeDefs;