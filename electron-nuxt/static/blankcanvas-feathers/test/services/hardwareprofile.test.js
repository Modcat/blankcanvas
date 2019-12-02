const assert = require('assert');
const app = require('../../src/app');

describe('\'hardwareprofile\' service', () => {
  it('registered the service', () => {
    const service = app.service('hardwareprofile');

    assert.ok(service, 'Registered the service');
  });
});
