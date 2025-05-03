// src/app/api/contact/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { name, email, message } = (await request.json()) as {
    name: string;
    email: string;
    message: string;
  };

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Website Contact" <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_TO,
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });
    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error("Mail error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
