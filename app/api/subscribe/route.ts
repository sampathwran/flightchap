import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"FlightChap" <${process.env.SMTP_USER}>`,
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
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('API Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
