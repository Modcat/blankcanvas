const app = require('../../src/app');

describe('\'invitation\' service', () => {
  it('registered the service', () => {
    const service = app.service('invitation');
    expect(service).toBeTruthy();
  });
});
