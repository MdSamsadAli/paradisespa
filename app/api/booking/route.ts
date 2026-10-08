import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body?.email || !body?.first || !Array.isArray(body?.lines) || body.lines.length === 0) {
    return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
  }
  // TODO: persist to a database / send email here.
  console.log("New booking request:", body);
  return NextResponse.json({ ok: true });
}
