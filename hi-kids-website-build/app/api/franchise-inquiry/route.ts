import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const inquirySchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(5, "Phone number is required"),
  country: z.string().min(1, "Country is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = inquirySchema.parse(body);

    // TODO: Integrate with email service (e.g., Resend, SendGrid)
    // For now, log the submission
    console.log("[HiKids] Franchise inquiry received:", {
      name: data.name,
      email: data.email,
      phone: data.phone,
      country: data.country,
      message: data.message.substring(0, 100) + "...",
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      { success: true, message: "Inquiry submitted successfully" },
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
