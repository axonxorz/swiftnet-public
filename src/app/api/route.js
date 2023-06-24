import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.NEXT_PUBLIC_GMAIL_USER,
    pass: process.env.NEXT_PUBLIC_GMAIL_PASSWORD,
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
    fullAddress,
    lastName,
    lat,
    lng,
    phoneNumber,
    postal_code,
    region,
    email,
    supported,
    ipAddress,
    browserType,
    googleAPIFullAddress,
  } = req;

  const isValid = validateFormFields(email, "sfsdf");

  if (isValid) {
    // If form fields are valid, send an email
    const mailOptions = {
      from: "younss.india@gmail.com", // sender
      to: email, // recipient
      subject: supported ? "congratulations" : "Sorry you re place",
      text: supported
        ? `you place ${fullAddress} is  supported see pricing`
        : `Sorry you place ${fullAddress} is not supported`,
    };

    const swiftMailOptions = {
      from: "no-reply@swift-net.ca",
      to: "support@swift-net.ca,younesbouchbouk.py@gmail.com",
      subject: "New subscription information ",
      html: `
      <html>
        <body>
          <h2>New subscription information</h2>

          <ul>
          <li>First Name: ${firstName}</li>
          <li>Last Name: ${lastName}</li>
          <li>Email: ${email}</li>
          <li>Phone Number: ${phoneNumber}</li>
          <li>Full Address: ${fullAddress}</li>
          <li>Google Full Address: ${googleAPIFullAddress}</li>
          <li>Postal Code: ${postal_code}</li>
          <li>Region: ${region}</li>
          <li>Supported: ${supported}</li>
          <li>lng: ${lng}</li>
          <li>lat: ${lat}</li>
          <li>IP Address: <a href="https://ipinfo.io/${ipAddress}">${ipAddress}</a></li>
          <li>Browser Type: ${browserType}</li>
        </ul>

          <p>IP Address: ${ipAddress}</p>
          <p>Browser Type: ${browserType}</p>
          <p>
            Click <a href="https://ipinfo.io/${ipAddress}">here</a> to lookup more information about the IP address.
          </p>



        </body>
      </html>
    `,
    };

    try {
      // Send the email
      await transporter.sendMail(mailOptions);
      await transporter.sendMail(swiftMailOptions);
      return NextResponse.json({
        message: "Email sent successfully",
        status: 1,
      });
    } catch (error) {
      return NextResponse.json({ message: "Error sending email", status: 0 });
    }
  } else {
    return NextResponse.json({ message: "Invalid form data", status: 0 });
  }
}

// export async function POST(request) {
//   const req = await request.json();

//   return NextResponse.json({ ...req });
// }
