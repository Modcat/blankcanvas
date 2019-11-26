const assert = require('assert');
const app = require('../../src/app');

describe('\'public\' service', () => {
  it('registered the service', () => {
    const service = app.service('public');

    assert.ok(service, 'Registered the service');
  });
});
