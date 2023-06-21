import { NextResponse } from "next/server";

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
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
      from: "younes.bouc@gmail.com", // sender
      to: email, // recipient
      subject: "Form Submission Successful",
      text: `Hello ${firstName}, your form submission was successful!`,
    };

    // Send the email
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.error(err);
        return NextResponse.json({ message: "Error sending email" });
      } else {
        return NextResponse.json({ message: "Email sent successfully" });
      }
    });
  } else {
    return NextResponse.json({ message: "Invalid form data" });
  }

  return NextResponse.json({ status: 1 });
}
