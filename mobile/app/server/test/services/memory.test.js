const app = require('../../src/app');

describe('\'memory\' service', () => {
  it('registered the service', () => {
    const service = app.service('memory');
    expect(service).toBeTruthy();
  });
});
