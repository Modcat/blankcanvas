const app = require('../../src/app');

describe('\'recovered\' service', () => {
  it('registered the service', () => {
    const service = app.service('recovered');
    expect(service).toBeTruthy();
  });
});
