import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendContactEmail } from "@/lib/emails";
import { rateLimit } from "@/lib/rate-limit";

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for") ?? "unknown";

  const allowed = await rateLimit(ip);
  if (!allowed) {
    return NextResponse.json(
      { error: "Too many requests" },
      { status: 429 }
    );
  }

  const { name, email, phone, message } = await req.json();

  if (
    !name ||
    !email ||
    !phone ||
    !message ||
    name.length > 100 ||
    email.length > 100 ||
    phone.length > 10 ||
    message.length > 1000
  ) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  await prisma.contactMessage.create({
    data: { name, email, phone, message },
  });

  await sendContactEmail({ name, email, phone, message });

  return NextResponse.json({ success: true });
}
