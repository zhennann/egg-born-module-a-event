const { app, mockUrl, assert } = require('egg-born-mock')(__dirname);

describe.only('test/controller/test.test.js', () => {

  it('actin:event test', async () => {
    app.mockSession({});
    const result = await app.httpRequest().post(mockUrl('test/test'));
    assert(result.body.code === 0);
  });

});
