import { describe, it, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import handler from './chat.ts';

describe('chat API', () => {
  const originalFetch = global.fetch;

  afterEach(() => {
    global.fetch = originalFetch;
    delete process.env.OPENROUTER_API_KEY;
  });

  const makeResponse = () => {
    let statusCode = 0;
    let jsonBody: Record<string, unknown> | undefined;
    return {
      response: {
        status: (code: number) => ({
          json: (body: Record<string, unknown>) => {
            statusCode = code;
            jsonBody = body;
          },
        }),
      },
      getStatus: () => statusCode,
      getBody: () => jsonBody,
    };
  };

  it('returns a configuration error when OpenRouter is unavailable', async () => {
    delete process.env.OPENROUTER_API_KEY;
    const result = makeResponse();

    await handler(
      { method: 'POST', body: JSON.stringify({ message: 'What time are you open?' }) } as any,
      result.response as any,
    );

    assert.equal(result.getStatus(), 503);
    assert.match(String(result.getBody()?.error), /OPENROUTER_API_KEY/);
  });

  it('returns the assistant answer from OpenRouter', async () => {
    process.env.OPENROUTER_API_KEY = 'fake-key';
    let requestedUrl = '';
    global.fetch = (async (input: string | URL | Request) => {
      requestedUrl = String(input);
      if (requestedUrl.endsWith('/models')) {
        return {
          ok: true,
          json: async () => ({ data: [{ id: 'test/free-model:free' }] }),
        } as Response;
      }
      return {
        ok: true,
        json: async () => ({ choices: [{ message: { content: 'Hello from Zen Cafe.' } }] }),
      } as Response;
    }) as typeof fetch;
    const result = makeResponse();

    await handler(
      { method: 'POST', body: JSON.stringify({ message: 'Hi' }) } as any,
      result.response as any,
    );

    assert.equal(requestedUrl, 'https://openrouter.ai/api/v1/chat/completions');
    assert.equal(result.getStatus(), 200);
    assert.equal(result.getBody()?.answer, 'Hello from Zen Cafe.');
  });

  it('reports rejected OpenRouter credentials clearly', async () => {
    process.env.OPENROUTER_API_KEY = 'fake-key';
    global.fetch = (async () => ({
      ok: false,
      status: 401,
      json: async () => ({ error: 'unauthorized' }),
    }) as Response) as typeof fetch;
    const result = makeResponse();

    await handler(
      { method: 'POST', body: JSON.stringify({ message: 'Hi' }) } as any,
      result.response as any,
    );

    assert.equal(result.getStatus(), 502);
    assert.match(String(result.getBody()?.error), /OPENROUTER_API_KEY/);
  });
});
