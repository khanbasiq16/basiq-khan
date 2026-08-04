import { NextResponse } from "next/server";
import { getTransporter } from "@/lib/mailer";

export const runtime = "nodejs";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildEmailHtml(fields: {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  message: string;
}) {
  const row = (label: string, value: string) =>
    value
      ? `<tr>
          <td style="padding:10px 16px;background:#f8f8f7;font-size:12px;font-weight:600;letter-spacing:.03em;color:#6b6b68;text-transform:uppercase;white-space:nowrap;vertical-align:top;border-bottom:1px solid #ececea;">${label}</td>
          <td style="padding:10px 16px;font-size:14px;color:#1c1c1a;border-bottom:1px solid #ececea;">${value}</td>
        </tr>`
      : "";

  return `
  <div style="font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;max-width:600px;margin:0 auto;background:#ffffff;">
    <div style="padding:24px 28px;background:#141413;">
      <p style="margin:0;color:#fff;font-size:16px;font-weight:600;">New Contact Form Submission</p>
      <p style="margin:4px 0 0;color:#a8a8a5;font-size:13px;">Basiq Khan — Portfolio Website</p>
    </div>
    <table style="width:100%;border-collapse:collapse;">
      ${row("Name", escapeHtml(fields.name))}
      ${row("Email", `<a href="mailto:${escapeHtml(fields.email)}" style="color:#c2410c;text-decoration:none;">${escapeHtml(fields.email)}</a>`)}
      ${row("Phone", escapeHtml(fields.phone))}
      ${row("Project Type", escapeHtml(fields.projectType))}
      ${row("Budget", escapeHtml(fields.budget))}
    </table>
    <div style="padding:16px 16px 4px;">
      <p style="margin:0 0 8px;font-size:12px;font-weight:600;letter-spacing:.03em;color:#6b6b68;text-transform:uppercase;">Message</p>
      <p style="margin:0;padding:14px 16px;background:#f8f8f7;border-radius:8px;font-size:14px;line-height:1.6;color:#1c1c1a;white-space:pre-wrap;">${escapeHtml(fields.message)}</p>
    </div>
    <div style="padding:20px 28px;">
      <p style="margin:0;font-size:12px;color:#9a9a96;">Sent from the contact form at basiqkhan.dev</p>
    </div>
  </div>`;
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const projectType = typeof body.projectType === "string" ? body.projectType.trim() : "";
  const budget = typeof body.budget === "string" ? body.budget.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Name, email and message are required." }, { status: 400 });
  }

  if (!emailPattern.test(email)) {
    return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
  }

  const toEmail = process.env.CONTACT_TO_EMAIL || process.env.GMAIL_USER;

  try {
    const transporter = getTransporter();

    await transporter.sendMail({
      from: `"${name} via Portfolio Site" <${process.env.GMAIL_USER}>`,
      to: toEmail,
      replyTo: email,
      subject: `New inquiry from ${name}${projectType ? ` — ${projectType}` : ""}`,
      html: buildEmailHtml({ name, email, phone, projectType, budget, message }),
      text: `New contact form submission

Name: ${name}
Email: ${email}
Phone: ${phone || "-"}
Project Type: ${projectType || "-"}
Budget: ${budget || "-"}

Message:
${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to send contact email:", error);
    return NextResponse.json({ error: "Failed to send message. Please try again later." }, { status: 500 });
  }
}
