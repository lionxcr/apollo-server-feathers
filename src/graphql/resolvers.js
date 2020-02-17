const { fileLoader, mergeResolvers } = require('merge-graphql-schemas');
const path = require('path');

const resolversArray = fileLoader(path.join(__dirname, './resolvers'));

module.exports = mergeResolvers(resolversArray);
