const app = require('../../src/app');

describe('\'images\' service', () => {
  it('registered the service', () => {
    const service = app.service('images');
    expect(service).toBeTruthy();
  });
});
