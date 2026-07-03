import { NextResponse } from "next/server";

/**
 * Enquiry form endpoint — validation + stub delivery.
 *
 * TODO(owner): wire up an email provider before launch. Recommended:
 * Resend (resend.com) — `npm i resend`, set RESEND_API_KEY in Vercel env,
 * then replace the console.log below with:
 *
 *   await resend.emails.send({
 *     from: "enquiries@thedailywag.co.uk",
 *     to: "hello@thedailywag-windsor.co.uk",
 *     subject: `New enquiry from ${name}`,
 *     text: ...,
 *   });
 */
export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  // Honeypot: real users never fill the hidden "company" field.
  if (typeof body.company === "string" && body.company.trim() !== "") {
    // Pretend success so bots learn nothing.
    return NextResponse.json({ ok: true });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";

  if (!name || name.length > 200) {
    return NextResponse.json({ error: "Please tell us your name." }, { status: 400 });
  }
  if (!email || email.length > 320 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
  }

  const enquiry = {
    name,
    email,
    phone: typeof body.phone === "string" ? body.phone.slice(0, 50) : "",
    dog: typeof body.dog === "string" ? body.dog.slice(0, 200) : "",
    service: typeof body.service === "string" ? body.service.slice(0, 100) : "",
    area: typeof body.area === "string" ? body.area.slice(0, 100) : "",
    message: typeof body.message === "string" ? body.message.slice(0, 5000) : "",
    receivedAt: new Date().toISOString(),
  };

  // TODO(owner): replace with real email delivery (see comment above).
  console.log("New enquiry received:", enquiry);

  return NextResponse.json({ ok: true });
}
