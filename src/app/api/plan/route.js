import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { createTransport, getSalesRecipient, getSendFromAddress, transformRecipients } from "@/lib/email";

const emailTransport = createTransport();

export async function POST(request) {
  const req = await request.json();

  const { date, plan, selectedAddOne, ipAddress, browserType, token } = req;

  let decoded = {};
  let data = {};
  try {
    decoded = jwt.verify(token, process.env.SECRET_TOKEN);
    data = decoded.data;
    // return decoded;
  } catch (err) {
    console.error(err); // Log the error to get more details
    return NextResponse.json({
      message: "Token is invalid",
      status: 0,
      err: err,
    });
  }

  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    googleAPIFullAddress,
    city,
    fullAddress,
  } = data;

  let totalPrice = parseFloat(plan.price);
  let citypl;
  if (selectedAddOne && selectedAddOne.price) {
    totalPrice += parseFloat(selectedAddOne.price);
  }
  if (fullAddress && fullAddress !== "undefined") {
    if (!city || city === "undefined") {
      citypl = fullAddress.split(",")[2];
    }
  } else {
    citypl = city;
  }
  const swiftMailOptions = {
    from: getSendFromAddress(),
    to: transformRecipients(getSalesRecipient()),
    subject: `$${totalPrice.toFixed(2)}, ${email}, ${date}, ${
      citypl ? citypl : ""
    }`,
    text: "",
    html: `
    <html>
      <body>
        <ul>
            <li>First Name : ${firstName}</li>
            <li>Last Name : ${lastName}</li>
            <li>City: ${citypl}</li>
            <li>Email: ${email}</li>
            <li>Plan: $${plan.price}</li>
            <li>Add ons: ${selectedAddOne.title && selectedAddOne.title}  ${
      selectedAddOne.price && `$${selectedAddOne?.price}`
    }</li>
            <li>Preferred installation date: ${date}</li>
            <li>Phone Number: <a href="https://www.ipqualityscore.com/free-carrier-lookup/lookup/CA/${phoneNumber}">${phoneNumber}</a></li>
            <li>Full Address: <a href="http://maps.google.com/maps?z=22&t=k&q=${fullAddress}">${fullAddress}</a></li>
            <li>Address lookup : ${googleAPIFullAddress} <li/>
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
          We're pleased to inform you that we have received your recent request for our ${plan.title} as well as your preferred installation date. We're currently processing your request and we appreciate your patience as we confirm the availability of your chosen plan and installation schedule.          </p>
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
    await emailTransport.sendMail(swiftMailOptions);
    await emailTransport.sendMail(mailOptions);

    return NextResponse.json({
      message: "Email sent successfully",
      status: 1,
    });
  } catch (error) {
    return NextResponse.json({
      message: error,
      status: 0,
    });
  }
}
