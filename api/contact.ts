interface ContactRequest {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  founder?: unknown;
  message?: unknown;
  website?: unknown;
}

const json = (body: Record<string, string>, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

export default async function handler(request: Request): Promise<Response> {
  if (request.method !== 'POST') {
    return json({ error: 'Method not allowed.' }, 405);
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const recipientEmail = process.env.CONTACT_RECIPIENT_EMAIL || 'zencafe1119@gmail.com';

  if (!resendApiKey) {
    return json({ error: 'Email service is not configured.' }, 500);
  }

  let body: ContactRequest;
  try {
    body = await request.json() as ContactRequest;
  } catch {
    return json({ error: 'Invalid request.' }, 400);
  }

  const name = typeof body.name === 'string' ? body.name.trim() : '';
  const email = typeof body.email === 'string' ? body.email.trim() : '';
  const phone = typeof body.phone === 'string' ? body.phone.trim() : '';
  const founder = typeof body.founder === 'string' ? body.founder.trim() : 'general';
  const message = typeof body.message === 'string' ? body.message.trim() : '';
  const website = typeof body.website === 'string' ? body.website.trim() : '';

  if (website) {
    return json({ message: 'Message received.' });
  }

  if (!name || !email || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ error: 'Please provide a valid name, email address, and message.' }, 400);
  }

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
        `Message for: ${founder}`,
        '',
        message,
      ].join('\n'),
    }),
  });

  if (!emailResponse.ok) {
    return json({ error: 'Message could not be sent. Please try again.' }, 502);
  }

  return json({ message: 'Message sent successfully.' });
}