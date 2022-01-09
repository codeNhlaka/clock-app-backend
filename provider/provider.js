const { RESTDataSource } = require('apollo-datasource-rest');

class API extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://covid-19-data.p.rapidapi.com';
      }

    willSendRequest(request) {
        request.headers.set('x-rapidapi-host', 'covid-19-data.p.rapidapi.com');
        request.headers.set('x-rapidapi-key', process.env.KEY);
      }

    async getDailyReportByCountryName(countryName){

        const requestParams = {
            name: countryName
        }

        const response = await this.get('/country', requestParams);
        return response;
    }

}

module.exports = API;