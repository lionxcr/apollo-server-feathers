const graphql = require('./graphql/graphql.service.js');
const example = require('./example/example.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(graphql);
  app.configure(example);
};
