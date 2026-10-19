// app/api/send-enquiry/route.ts

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

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
        {
          ok: false,
          error: "Missing required fields",
        },
        { status: 400 }
      );
    }

    // ---------------------------
    // SMTP TRANSPORTER
    // ---------------------------
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Verify SMTP
    await transporter.verify();

    console.log("✅ SMTP Connected");

    // ---------------------------
    // SEND EMAIL
    // ---------------------------
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: "nanyad012@gmail.com",

      replyTo: email,

      subject: `New RNK Contact Enquiry — ${fullName}`,

      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.7; color: #111;">
          
          <h2 style="margin-bottom: 20px;">
            New RNK Website Enquiry
          </h2>

          <hr style="margin-bottom: 20px;" />

          <p>
            <strong>Full Name:</strong> ${fullName}
          </p>

          <p>
            <strong>Email:</strong> ${email}
          </p>

          <p>
            <strong>Mobile Number:</strong> ${mobileNumber}
          </p>

          <p>
            <strong>Service:</strong> ${
              vehicle || "General Enquiry"
            }
          </p>

          <p>
            <strong>Pickup City:</strong> ${
              pickupCity || "Contact Page"
            }
          </p>

          <p>
            <strong>Start Date:</strong> ${
              startDate || "Not specified"
            }
          </p>

          <p>
            <strong>Passengers:</strong> ${
              passengers || "Not specified"
            }
          </p>

          ${
            message
              ? `
                <p>
                  <strong>Message:</strong>
                </p>

                <p>${message}</p>
              `
              : ""
          }

          <hr style="margin-top: 30px;" />

          <p style="font-size: 12px; color: #666;">
            This enquiry was submitted from the RNK website contact form.
          </p>

        </div>
      `,
    });

    console.log("✅ Email Sent Successfully");

    // ---------------------------
    // SUCCESS RESPONSE
    // ---------------------------
    return NextResponse.json(
      {
        ok: true,
        message: "Email sent successfully",
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("❌ FULL MAIL ERROR:", error);

    return NextResponse.json(
      {
        ok: false,
        error: "Failed to send email",
      },
      { status: 500 }
    );
  }
}