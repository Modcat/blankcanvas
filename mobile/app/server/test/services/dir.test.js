const app = require('../../src/app');

describe('\'dir\' service', () => {
  it('registered the service', () => {
    const service = app.service('dir');
    expect(service).toBeTruthy();
  });
});
