import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASSWORD,
  },
});

// Function to validate form fields
const validateFormFields = (email, message) => {
  if (!email || !message) {
    return false;
  }
  if (!email.includes("@")) {
    return false;
  }
  return true;
};

export async function POST(request) {
  const req = await request.json();

  const {
    firstName,
    fullAdress,
    lastName,
    lat,
    lng,
    phoneNumber,
    postal_code,
    region,
    email,
    // notes,
  } = req;

  const isValid = validateFormFields(email, "sfsdf");

  if (isValid) {
    // If form fields are valid, send an email
    const mailOptions = {
      from: "younss.india@gmail.com", // sender
      to: email, // recipient
      subject: "Form Submission Successful",
      text: `Hello ${firstName}, your form submission was successful!`,
    };

    try {
      // Send the email
      await transporter.sendMail(mailOptions);
      return NextResponse.json({
        message: "Email sent successfully",
        status: 1,
      });
    } catch (error) {
      console.error(error);
      return NextResponse.json({ message: "Error sending email", status: 0 });
    }
  } else {
    return NextResponse.json({ message: "Invalid form data", status: 0 });
  }
}
