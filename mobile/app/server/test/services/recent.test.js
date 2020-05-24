const app = require('../../src/app');

describe('\'recent\' service', () => {
  it('registered the service', () => {
    const service = app.service('recent');
    expect(service).toBeTruthy();
  });
});
