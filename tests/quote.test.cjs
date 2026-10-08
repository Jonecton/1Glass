const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const ts = require('typescript');

function handler(options = {}) {
  const calls = [];
  const code = ts.transpileModule(fs.readFileSync('src/app/api/quote/route.ts', 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
  const sandbox = {
    exports: {}, Response, TextEncoder, AbortSignal, console: { error() {} }, URL,
    require: () => ({ getCloudflareContext: () => ({ env: {
      RESEND_API_KEY: options.missingKey ? undefined : 'test-key',
      QUOTE_RATE_LIMITER: { limit: async () => ({ success: !options.limited }) },
    } }) }),
    fetch: async (...args) => { calls.push(args); return options.rejected ? new Response('{}', { status: 403 }) : Response.json({ id: 'test-id' }); },
  };
  vm.runInNewContext(code, sandbox);
  return { post: sandbox.exports.POST, calls };
}
const valid = { name: 'Test customer', phone: '(956) 555-0123', email: 'customer@example.com', description: 'A new glass shower door.', website: '', requestId: '12345678-1234-1234-1234-123456789abc' };
function request(data = valid, origin = 'https://the1glassshop.com') {
  return new Request('https://the1glassshop.com/api/quote', { method: 'POST', headers: { origin, 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
}
test('sends to the fixed support inbox with customer reply-to and idempotency', async () => {
  const { post, calls } = handler();
  assert.equal((await post(request())).status, 200);
  const payload = JSON.parse(calls[0][1].body);
  assert.deepEqual(payload.to, ['support@the1glassshop.com']);
  assert.equal(payload.reply_to, valid.email);
  assert.equal(calls[0][1].headers['Idempotency-Key'], `quote/${valid.requestId}`);
});
test('email is optional', async () => {
  const { post, calls } = handler();
  assert.equal((await post(request({ ...valid, email: '' }))).status, 200);
  assert.equal(JSON.parse(calls[0][1].body).reply_to, undefined);
});
test('rejects invalid fields, foreign origins, and honeypot without sending', async () => {
  const { post, calls } = handler();
  for (const change of [{ phone: 'abc' }, { email: 'bad' }, { name: 'Header\nInjection' }, { description: '' }, { website: 'spam' }]) assert.equal((await post(request({ ...valid, ...change }))).status, 400);
  assert.equal((await post(request(valid, 'https://another.example'))).status, 403);
  assert.equal(calls.length, 0);
});
test('rate limiting, missing credentials, and provider failure never report success', async () => {
  for (const [options, status] of [[{ limited: true }, 429], [{ missingKey: true }, 503], [{ rejected: true }, 502]]) {
    assert.equal((await handler(options).post(request())).status, status);
  }
});
