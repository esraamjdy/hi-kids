import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const certSchema = z.object({
  email: z.string().email("Valid email is required"),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = certSchema.parse(body);

    // TODO: Integrate with email service (e.g., Resend, SendGrid)
    // Send certification program details to the requested email
    console.log("[HiKids] Educator certification request:", {
      email: data.email,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      { success: true, message: "Certification information sent" },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
