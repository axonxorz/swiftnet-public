import { NextResponse } from "next/server";
import dotenv from "dotenv";
import { writeToGoogleSheet } from "./googleSheetApi";

// Load environment variables from .env file
dotenv.config();

export async function POST(request) {
  const req = await request.json();

  const {
    id,
    email,
    lat,
    lng,
    address,
    phone,
    country,
    city,
    zip,
    ipAddress,
    browserType,
    confirm,
    completeProcess,
    step,
  } = req;

  try {
    const spreadsheetId = "1BA_WvSLx5L7Orm_KACDNwi0Vk4taD04ueLqzkm1hs5s"; // Replace with the actual Google Sheet ID
    await writeToGoogleSheet(spreadsheetId, {
      id,
      email,
      lat,
      lng,
      address,
      phone,
      country,
      city,
      zip,
      ipAddress,
      browserType,
      confirm,
      completeProcess,
      step,
    });
    return NextResponse.json({
      message: "Data written to Google Sheet successfully",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      error: "Failed to write to Google Sheet",
    });
  }
}
