const app = require('../../src/app');

describe('\'example\' service', () => {
  it('registered the service', () => {
    const service = app.service('example');
    expect(service).toBeTruthy();
  });
});
