
const resolvers = {
    Query: {
        getDailyReportByCountryName: async (_, { countryName }, { dataSources }) => {
            const data = await dataSources.covidAPI.getDailyReportByCountryName(countryName);
            return data;
          },
      },
}

module.exports = resolvers;