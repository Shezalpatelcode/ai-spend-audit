import { NextResponse } from "next/server";
import dbConnect from "../../../lib/mongodb";
import Audit from "../../../models/Audit";
export async function GET() {
  return NextResponse.json({ message: "API working" });
}

export async function POST(req: Request) {
  try {
    await dbConnect();

    const body = await req.json();

    const audit = await Audit.create(body);

    return NextResponse.json(audit);
  } catch (error) {
  console.error(error);

  return NextResponse.json(
    { error: "Failed to save audit" },
    { status: 500 }
  );
}
}