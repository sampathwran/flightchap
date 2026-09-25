import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: 'FlightChap <info@flightchap.com>',
      to: email,
      subject: 'Thank you for subscribing to FlightChap! ✈️',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #1a0b2e;">Welcome to FlightChap! 🌍</h2>
          <p>You have successfully subscribed to our exclusive fare alerts and travel newsletter.</p>
          <p>We will make sure you are the first to know about secret flight deals, flash sales, and premium offers.</p>
          <br/>
          <p>Best Regards,<br/><strong>The FlightChap Team</strong></p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend API Error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: 'Email sent successfully', data }, { status: 200 });
  } catch (error) {
    console.error('API Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
