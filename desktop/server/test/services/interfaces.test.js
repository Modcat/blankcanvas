const app = require('../../src/app');

describe('\'interfaces\' service', () => {
  it('registered the service', () => {
    const service = app.service('interfaces');
    expect(service).toBeTruthy();
  });
});
