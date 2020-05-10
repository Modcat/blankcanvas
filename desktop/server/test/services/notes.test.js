const app = require('../../src/app');

describe('\'notes\' service', () => {
  it('registered the service', () => {
    const service = app.service('notes');
    expect(service).toBeTruthy();
  });
});
