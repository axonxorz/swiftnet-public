import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "webmaster@swift-net.ca",
    pass: "inkfbyetcqbeafxn",
  },
});

export async function POST(request) {
  const req = await request.json();

  const { email, ipAddress, browserType, phoneNumber, description } = req;

  const mailOptions = {
    from: "support@swift-net.ca", // sender
    to: `support@swift-net.ca,david@turnkeyisp.co`, // recipient
    subject: `Contact : ${email}`,
    text: "",
    html: `
      <html>
        <body>

          <h3>From ${email}, Phone ${phoneNumber}</h3>

          <p>
            ${description}
          </p> 

          <ul>
          <li>IP Address: <a href="https://ipinfo.io/${ipAddress}">${ipAddress}</a></li>
          <li>Browser Type: ${browserType}</li>
        </ul>

        </body>
      </html>
    `,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      message: "Contact Email sent successfully",
      status: 1,
    });
  } catch (error) {
    return NextResponse.json({ message: "Error sending email", status: 0 });
  }
}
