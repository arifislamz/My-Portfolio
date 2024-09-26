import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const { name, email, message } = await req.json();
   // Log the environment variable to verify it's loaded correctly
   console.log('GMAIL_USER:', process.env.GMAIL_USER);

  try {
    // Create transporter
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
      auth: {
        user: process.env.GMAIL_USER, // Your Gmail address
        pass: process.env.GMAIL_PASS, // Your Gmail password or app password
      },
    });

    // Mail options
    const mailOptions = {
      from: email,
      to: process.env.GMAIL_USER, // Your Gmail address (where you want to receive messages)
      subject: `Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Error sending email' }, { status: 500 });
}
}



