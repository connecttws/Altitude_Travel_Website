import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, destination, travelDate, guests, message, tripType } = body;

    if (!name || (!phone && !email)) {
      return NextResponse.json(
        { success: false, error: "Please provide your name and contact phone or email." },
        { status: 400 }
      );
    }

    console.log("=== NEW ALTITUDE TRAVEL LEAD INQUIRY ===", {
      timestamp: new Date().toISOString(),
      name,
      phone,
      email,
      destination,
      travelDate,
      guests,
      tripType,
      message,
    });

    return NextResponse.json({
      success: true,
      message: "Thank you for reaching out! Our Delhi travel specialist will contact you shortly with your customized itinerary and best quotes.",
    });
  } catch (error) {
    console.error("Error processing inquiry:", error);
    return NextResponse.json(
      { success: false, error: "Unable to submit inquiry at this moment. Please call us directly." },
      { status: 500 }
    );
  }
}
