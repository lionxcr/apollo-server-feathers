const { disallow } = require('feathers-hooks-common');
const exampleData = require('../../hooks/example/before/exampleData');

module.exports = {
  before: {
    all: [],
    find: [
      disallow('rest'),
      exampleData()
    ],
    get: [
      disallow()
    ],
    create: [
      disallow()
    ],
    update: [
      disallow()
    ],
    patch: [
      disallow()
    ],
    remove: [
      disallow()
    ]
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
