import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import handler from './contact.ts';

describe('contact form API', () => {
  it('accepts the form in demo mode when the email API key is missing', async () => {
    delete process.env.RESEND_API_KEY;

    let statusCode = 0;
    let jsonBody: Record<string, string> | undefined;

    const request = {
      method: 'POST',
      body: JSON.stringify({
        name: 'Test User',
        email: 'test@example.com',
        phone: '+8801712345678',
        founder: 'general',
        message: 'Hello from the contact form test.',
        website: '',
      }),
    };

    const response = {
      status: (code: number) => ({
        json: (body: Record<string, string>) => {
          statusCode = code;
          jsonBody = body;
        },
      }),
    };

    await handler(request as any, response as any);

    assert.equal(statusCode, 200);
    assert.equal(jsonBody?.message, 'Message sent successfully.');
  });
});
