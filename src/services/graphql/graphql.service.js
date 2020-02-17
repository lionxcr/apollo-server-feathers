// Initializes the `graphql` service on path `/graphql`
const {
  ApolloServer,
  makeExecutableSchema
} = require('apollo-server-express');

const typeDefs = require('../../graphql/typeDefs');
const resolvers = require('../../graphql/resolvers');

module.exports = function (app) {

  const executableSchema = makeExecutableSchema({
    typeDefs,
    resolvers
  });

  const server = new ApolloServer({
    schema: executableSchema,
    context: ({
      req
    }) => ({
      provider: req.feathers.provider,
      headers: req.headers,
      app
    }),
    introspection: true,
    playground: true
  });

  server.applyMiddleware({
    app
  });
};
