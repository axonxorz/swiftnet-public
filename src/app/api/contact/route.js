import { NextResponse } from "next/server";
import { createTransport, getSalesRecipient, getSendFromAddress, transformRecipients } from "@/lib/email";

const emailTransport = createTransport();

export async function POST(request) {
  const req = await request.json();

  const { email, ipAddress, browserType, phoneNumber, description } = req;

  const mailOptions = {
    from: getSendFromAddress(),
    to: transformRecipients(getSalesRecipient()),
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
    await emailTransport.sendMail(mailOptions);

    return NextResponse.json({
      message: "Contact Email sent successfully",
      status: 1,
    });
  } catch (error) {
    return NextResponse.json({ message: "Error sending email", status: 0 });
  }
}
