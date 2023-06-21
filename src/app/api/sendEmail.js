import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

// Function to validate form fields
const validateFormFields = (name, email, message) => {
  if (!name || !email || !message) {
    return false;
  }
  if (!email.includes("@")) {
    return false;
  }
  return true;
};

export async function GET() {
  return NextResponse.json({ name: "Anuj Singh" });
}

export default async function handler(req, res) {
  // Check the request method
  if (req.method === "POST") {
    // Get form data from the request body
    const { name, email, message } = req.body;

    // Validate form fields
    const isValid = validateFormFields(name, email, message);

    if (isValid) {
      // If form fields are valid, send an email
      const mailOptions = {
        from: process.env.GMAIL_USER, // sender
        to: email, // recipient
        subject: "Form Submission Successful",
        text: `Hello ${name}, your form submission was successful!`,
      };

      // Send the email
      transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          console.error(err);
          res.status(500).json({ message: "Error sending email" });
        } else {
          res.status(200).json({ message: "Email sent successfully" });
        }
      });
    } else {
      res.status(400).json({ message: "Invalid form data" });
    }
  } else {
    // Handle any other HTTP method
    res.status(400).send("Invalid request method");
  }
}
