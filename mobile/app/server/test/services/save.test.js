const app = require('../../src/app');

describe('\'save\' service', () => {
  it('registered the service', () => {
    const service = app.service('save');
    expect(service).toBeTruthy();
  });
});
