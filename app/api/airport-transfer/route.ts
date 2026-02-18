// app/api/airport-transfer/route.ts

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, phone, date, terminal, car } = body;

    // ---------------------------
    // BASIC VALIDATION
    // ---------------------------
    if (!name || !phone || !date || !terminal || !car) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // ---------------------------
    // SMTP CONFIG (Same as existing)
    // ---------------------------
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.verify();

    // ---------------------------
    // SEND EMAIL
    // ---------------------------
    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: "nandaniyadav521@gmail.com",
      replyTo: process.env.SMTP_USER,
      subject: `🚗 New Airport Transfer Lead — ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New Mumbai Airport Transfer Enquiry</h2>
          <hr />

          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Pickup Date:</strong> ${date}</p>
          <p><strong>Airport Terminal:</strong> ${terminal}</p>
          <p><strong>Car Preference:</strong> ${car}</p>

          <hr />
          <p style="font-size: 12px; color: #666;">
            This lead was submitted from the Mumbai Airport Landing Page.
          </p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true }, { status: 200 });

  } catch (error) {
    console.error("❌ Error sending airport transfer email:", error);

    return NextResponse.json(
      { ok: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
