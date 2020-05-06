const app = require('../../src/app');

describe('\'files\' service', () => {
  it('registered the service', () => {
    const service = app.service('files');
    expect(service).toBeTruthy();
  });
});
