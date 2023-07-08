import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "webmaster@swift-net.ca",
    pass: "inkfbyetcqbeafxn",
  },
});

export async function POST(request) {
  const req = await request.json();

  const {
    date,
    plan,
    selectedAddOne,
    address,
    phone,
    email,
    city,
    ipAddress,
    browserType,
    firstName,
  } = req;

  let totalPrice = parseFloat(plan.price);

  if (selectedAddOne && selectedAddOne.price) {
    totalPrice += parseFloat(selectedAddOne.price);
  }
  const swiftMailOptions = {
    from: "no-reply@swift-net.ca",
    to: "support@swift-net.ca,david@turnkeyisp.co",
    subject: `$${totalPrice}, ${email}, ${date}, ${city ? city : ""}`,
    text: "",
    html: `
    <html>
      <body>
        <ul>
            <li>City: ${city}</li>
            <li>Email: ${email}</li>
            <li>Plan: ${plan.price}$</li>
            <li>Add ones: ${selectedAddOne.title && selectedAddOne.title}  ${
      selectedAddOne.price && `$${selectedAddOne?.price}`
    }$</li>
            <li>Preferred installation date: ${date}</li>
            <li>Phone Number: ${phone}</li>
            <li>Full Address: <a href="http://maps.google.com/maps?z=22&t=k&q=${address}">${address}</a></li>
            <li>IP Address: <a href="https://ipinfo.io/${ipAddress}">${ipAddress}</a></li>
          <li>Browser Type: ${browserType}</li>
       </ul>

      </body>
    </html>
  `,
  };

  const mailOptions = {
    from: "support@swift-net.ca", // sender
    to: email, // recipient
    subject: "Welcome to Swift-Net.ca - Install Request Confirmation",
    text: "",
    html: `
      <html>
        <body>

          <h3>Dear ${firstName},</h3>
          <p>
          Welcome to Swift-Net.ca! We're excited to help you stay connected with our robust and reliable internet services.
          </p>
          <p>
          We're pleased to inform you that we have received your recent request for our [Preferred Plan's Name] as well as your preferred installation date. We're currently processing your request and we appreciate your patience as we confirm the availability of your chosen plan and installation schedule.          </p>
          <p>
          One of our scheduling representatives will contact you during the next business day to finalize the details. They will help ensure that your selected plan is the perfect fit for your needs, and they will also confirm your preferred installation date and time. If there are any changes or adjustments needed, they'll be happy to assist you through the process.          </p>
          <p>
          We believe in absolute customer satisfaction, hence you will not be charged until the service is installed and fully operational. After our team completes the installation, they will verify the service to ensure it's working as expected before we finalize your billing setup.          </p>

          <p>
          We're looking forward to helping you experience the fastest and most reliable internet service. Thank you for choosing Swift-Net.ca. If you have any immediate questions or concerns, please feel free to reply to this email or call our customer service line at 1-866-667-2375. We're here for you!          </p>

          <p>
            Best Regards,<br>
            Swift-Net.ca Customer Care Team<br>
            <a href="mailto:support@swift-net.ca">support@swift-net.ca</a><br>
            <a href="tel:1-866-667-2375">tel:1-866-667-2375</a>
          </p>

        </body>
      </html>
    `,
  };

  try {
    // Send the email
    await transporter.sendMail(swiftMailOptions);
    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      message: "Email sent successfully",
      status: 1,
    });
  } catch (error) {
    return NextResponse.json({ message: "Error sending email", status: 0 });
  }
}
