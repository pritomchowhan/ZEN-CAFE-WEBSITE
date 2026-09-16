import { describe, it, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import handler from './chat.ts';

describe('chat API', () => {
  const originalFetch = global.fetch;

  afterEach(() => {
    global.fetch = originalFetch;
    delete process.env.GEMINI_API_KEY;
  });

  it('returns a clear configuration error when Gemini is unavailable', async () => {
    delete process.env.GEMINI_API_KEY;

    let statusCode = 0;
    let jsonBody: Record<string, unknown> | undefined;

    const response = {
      status: (code: number) => ({
        json: (body: Record<string, unknown>) => {
          statusCode = code;
          jsonBody = body;
        },
      }),
    };

    await handler(
      {
        method: 'POST',
        body: JSON.stringify({ message: 'What time are you open?' }),
      } as any,
      response as any,
    );

    assert.equal(statusCode, 503);
    assert.equal(jsonBody?.error, 'The cafe assistant is not configured yet.');
  });

  it('accepts a valid Gemini generateContent model even when the API does not return a flash/pro name', async () => {
    process.env.GEMINI_API_KEY = 'fake-key';

    global.fetch = (async (input: string | URL | Request) => {
      const url = String(input);

      if (url.includes('/models?')) {
        return {
          ok: true,
          json: async () => ({
            models: [{
              name: 'models/gemini-2.5-flash',
              supportedGenerationMethods: ['generateContent'],
            }],
          }),
        } as Response;
      }

      if (url.includes(':generateContent')) {
        return {
          ok: true,
          json: async () => ({
            candidates: [{
              content: {
                parts: [{ text: 'Hello from Zen Cafe.' }],
              },
            }],
          }),
        } as Response;
      }

      return {
        ok: false,
        status: 500,
        json: async () => ({ error: 'unexpected call' }),
      } as Response;
    }) as typeof fetch;

    let statusCode = 0;
    let jsonBody: Record<string, unknown> | undefined;

    const response = {
      status: (code: number) => ({
        json: (body: Record<string, unknown>) => {
          statusCode = code;
          jsonBody = body;
        },
      }),
    };

    await handler(
      {
        method: 'POST',
        body: JSON.stringify({ message: 'Hi' }),
      } as any,
      response as any,
    );

    assert.equal(statusCode, 200);
    assert.equal(jsonBody?.answer, 'Hello from Zen Cafe.');
  });
});
