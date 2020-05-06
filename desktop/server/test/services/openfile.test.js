const app = require('../../src/app');

describe('\'openfile\' service', () => {
  it('registered the service', () => {
    const service = app.service('openfile');
    expect(service).toBeTruthy();
  });
});
