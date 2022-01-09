const { RESTDataSource } = require('apollo-datasource-rest');

class API extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://covid-19-data.p.rapidapi.com';
        this.apiDate = '2020-04-01';
      }

    willSendRequest(request) {
        request.headers.set('x-rapidapi-host', 'covid-19-data.p.rapidapi.com');
        request.headers.set('x-rapidapi-key', process.env.KEY);
      }

    async getDailyReportByCountryName(countryName){

        const requestParams = {
            name: countryName,
            date: this.apiDate
        }

        const response = await this.get('/report/country/name', requestParams);
        return response;
    }

}

module.exports = API;