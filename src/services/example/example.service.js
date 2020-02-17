// Initializes the `example` service on path `/example`
const createService = require('feathers-memory');
const hooks = require('./example.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/example', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('example');

  service.hooks(hooks);
};
