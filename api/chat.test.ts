import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import handler from './chat.ts';

describe('chat API', () => {
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
});
