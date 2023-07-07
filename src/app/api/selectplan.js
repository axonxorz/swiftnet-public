import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "webmaster@swift-net.ca",
    pass: "inkfbyetcqbeafxn",
  },
});
// Function to validate form fields

export async function GET() {
  return NextResponse.json({ name: "get Method" });
}

export default async function handler(req, res) {
  // Check the request method
  if (req.method === "POST") {
    // Get form data from the request body
    const {
      selectedDate,
      selectedPlan,
      selectedAddOne,
      email,
      address,
      phone,
    } = req.body;

    // Validate form fields
    const isValid = validateFormFields(name, email, message);

    if (isValid) {
      // If form fields are valid, send an email
      const mailOptions = {
        from: process.env.GMAIL_USER, // sender
        to: email, // recipient
        subject: "Plan has been selected",
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
