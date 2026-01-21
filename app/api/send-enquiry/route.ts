// app/api/send-enquiry/route.ts

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import crypto from "crypto";

export const runtime = "nodejs"; // REQUIRED for nodemailer

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      fullName,
      email,
      mobileNumber,
      startDate,
      passengers,
      pickupCity,
      vehicle,
      message,
    } = body;

    // ---------------------------
    // BASIC VALIDATION
    // ---------------------------
    if (!fullName || !email || !mobileNumber) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // ---------------------------
    // SMTP CONFIG
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

    // Verify SMTP connection
    await transporter.verify();

    // ---------------------------
    // UNIQUE ENQUIRY ID
    // ---------------------------
    const enquiryId = crypto.randomUUID();

    // ---------------------------
    // SEND EMAIL (ANTI-THREADING)
    // ---------------------------
    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: "info@rnk.com",                // ✅ OFFICIAL EMAIL
      replyTo: email,                    // reply goes to customer

      // 🔥 UNIQUE SUBJECT (prevents Gmail grouping)
      subject: `RNK Website Enquiry #${enquiryId.slice(0, 8)}`,

      // 🔥 UNIQUE HEADERS (MOST IMPORTANT)
      headers: {
        "Message-ID": `<${enquiryId}@rnk.com>`,
        "X-RNK-Enquiry-ID": enquiryId,
        "X-Entity-Ref-ID": enquiryId,
      },

      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New RNK Website Enquiry</h2>
          <p><strong>Enquiry ID:</strong> ${enquiryId}</p>
          <hr />

          <p><strong>Full Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Mobile Number:</strong> ${mobileNumber}</p>

          <p><strong>Service:</strong> ${vehicle || "General Enquiry"}</p>
          <p><strong>Pickup City:</strong> ${pickupCity || "Contact Page"}</p>
          <p><strong>Start Date:</strong> ${startDate || "Not specified"}</p>
          <p><strong>Passengers:</strong> ${passengers || "Not specified"}</p>

          ${
            message
              ? `<p><strong>Message:</strong><br />${message}</p>`
              : ""
          }

          <hr />
          <p style="font-size: 12px; color: #666;">
            Submitted from RNK Website Contact Form
          </p>
        </div>
      `,
    });

    // ---------------------------
    // SUCCESS RESPONSE
    // ---------------------------
    return NextResponse.json({ ok: true }, { status: 200 });

  } catch (error) {
    console.error("❌ Error sending enquiry email:", error);

    return NextResponse.json(
      { ok: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
