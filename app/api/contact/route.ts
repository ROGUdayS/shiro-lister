import { NextResponse } from "next/server";
import { appendToSheet } from "@/lib/utils/googleSheets";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, projectName } = body;

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Name, email, and phone are required" },
        { status: 400 }
      );
    }

    // Append to Google Sheet
    const result = await appendToSheet({ name, email, phone, projectName });

    if (!result.success) {
      return NextResponse.json(
        { error: "Failed to save contact information" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
