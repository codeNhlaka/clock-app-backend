const { ApolloServer } = require('apollo-server');
const dotenv = require('dotenv');
const resolvers = require('./resolvers/resolvers');
const typeDefs = require('./graphql/typeDefs');
const API = require('./provider/provider');

const dataSources = () => {
    return {
        covidAPI: new API()
    }
}

dotenv.config();

const server = new ApolloServer({ 
    typeDefs, 
    resolvers, 
    dataSources 
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
    console.log(`
      🚀  Server is ready at ${url}
    `);
  });