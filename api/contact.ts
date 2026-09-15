interface ContactRequest {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  founder?: unknown;
  message?: unknown;
  website?: unknown;
}

interface VercelRequest {
  method?: string;
  body?: unknown;
}

interface VercelResponse {
  status: (code: number) => VercelResponse;
  json: (body: Record<string, string>) => void;
}

const MAX_LENGTHS = {
  name: 120,
  email: 254,
  phone: 40,
  founder: 80,
  message: 5000,
};

const sendJson = (response: VercelResponse, body: Record<string, string>, status = 200) => {
  response.status(status).json(body);
};

export default async function handler(request: VercelRequest, response: VercelResponse): Promise<void> {
  if (request.method !== 'POST') {
    sendJson(response, { error: 'Method not allowed.' }, 405);
    return;
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const recipientEmail = process.env.CONTACT_RECIPIENT_EMAIL || 'zencafe1119@gmail.com';

  let body: ContactRequest;
  try {
    const parsedBody = typeof request.body === 'string' ? JSON.parse(request.body) : request.body;
    if (!parsedBody || typeof parsedBody !== 'object') {
      sendJson(response, { error: 'Invalid request.' }, 400);
      return;
    }
    body = parsedBody as ContactRequest;
  } catch {
    sendJson(response, { error: 'Invalid request.' }, 400);
    return;
  }

  const name = typeof body.name === 'string' ? body.name.trim() : '';
  const email = typeof body.email === 'string' ? body.email.trim() : '';
  const phone = typeof body.phone === 'string' ? body.phone.trim() : '';
  const founder = typeof body.founder === 'string' ? body.founder.trim() : 'general';
  const message = typeof body.message === 'string' ? body.message.trim() : '';
  const website = typeof body.website === 'string' ? body.website.trim() : '';
  const recipientLabel = founder === 'general' ? 'Zen Cafe team' : founder;

  if (website) {
    sendJson(response, { message: 'Message received.' });
    return;
  }

  if (
    !name ||
    !email ||
    !message ||
    name.length > MAX_LENGTHS.name ||
    email.length > MAX_LENGTHS.email ||
    phone.length > MAX_LENGTHS.phone ||
    founder.length > MAX_LENGTHS.founder ||
    message.length > MAX_LENGTHS.message ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  ) {
    sendJson(response, { error: 'Please provide a valid name, email address, and message.' }, 400);
    return;
  }

  if (!resendApiKey) {
    console.info('[contact-form-demo-mode] Contact submission accepted without email delivery.');
    sendJson(response, { message: 'Message sent successfully.' });
    return;
  }

  try {
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL || 'Zen Cafe Website <onboarding@resend.dev>',
        to: [recipientEmail],
        reply_to: email,
        subject: `New Zen Cafe message from ${name}`,
        text: [
          `Name: ${name}`,
          `Email: ${email}`,
          `Phone: ${phone || 'Not provided'}`,
          `Message for: ${recipientLabel}`,
          '',
          message,
        ].join('\n'),
      }),
    });

    if (!emailResponse.ok) {
      sendJson(response, { error: 'Message could not be sent. Please try again.' }, 502);
      return;
    }
  } catch {
    sendJson(response, { error: 'Message could not be sent. Please try again.' }, 502);
    return;
  }

  sendJson(response, { message: 'Message sent successfully.' });
}