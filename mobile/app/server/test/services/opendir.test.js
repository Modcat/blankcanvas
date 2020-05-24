const app = require('../../src/app');

describe('\'opendir\' service', () => {
  it('registered the service', () => {
    const service = app.service('opendir');
    expect(service).toBeTruthy();
  });
});
