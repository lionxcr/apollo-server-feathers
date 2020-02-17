const { makeExecutableSchema } = require('graphql-tools');

const typeDefs = require('../src/graphql/typeDefs');
const resolvers = require('../src/graphql/resolvers');

module.exports = makeExecutableSchema({ typeDefs, resolvers });