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
      from: "support@swift-net.ca", // sender
      to: email, // recipient
      subject: supported
        ? " Fantastic news! Service is available at your location. "
        : "Expanding our Network Together: Internet Service Availability",
      text: "",
      html: supported
        ? `
        <html>
        <body>
            
            <div style="margin-top: 20px; margin-bottom: 40px;">
                <img src="https://swift-net.vercel.app/_next/static/media/logo2.2933c849.png" alt="logo">
            </div>
          <h3>Dear ${firstName},</h3>
          <p>
            <br>
          <a href="https://swift-net.vercel.app/installation-date?email=${email}&address=${fullAddress}&phone=${phoneNumber}&city=${region}&firstName=${firstName}&lastName=${lastName} style="font-weight: bold; color:#05649C>Click here</a> to choose your pricing and plans and schedule the installation . Feel free to call us at <a href="tel:1-866-667-2375">tel:1-866-667-2375</a> or reply to this email with any questions.</p>
            <br>
            <p>Thank you!<br></p>
          <div style="background-color: #05649C; padding: 20px; ">
            <p style="color: white ">
                
                Swift-Net.ca Customer Care<br>
                <a style="color: white" href="mailto:support@swift-net.ca">support@swift-net.ca</a> <br>
                <a  style="color: white" href="tel:1-866-667-2375">tel:1-866-667-2375</a>
    
              </p>
          </div>
  
        </body>
      </html>
      `
        : `
        <html>
          <body>
            
            
            <h3>Dear ${firstName},</h3>
            <p>
              Thank you for your interest in our high-speed Internet services. We have checked the serviceability of the address you provided and regret to inform you that our services are not currently available in your area.
            </p>
            <p>
              However, there's good news for property owners like you. We have an innovative solution that can bring our high-speed Internet service right to your doorstep. If you're open to it, we can partner with you to establish an Internet service tower on your property.
            </p>
            <p>
              Building a tower on your property would not only increase your property value by making our services available for you, but also extend coverage to your neighbors and the surrounding community. It's a fantastic opportunity to enhance the connectivity and lifestyle of your community while enjoying our top-tier Internet services yourself.
            </p>
            <p>
              Here's how you can get started:
            </p>
            <ol>
              <li><strong>Provide Consent</strong>: If you're interested in this opportunity, the first step is to give your consent to move forward with the project.</li>
              <li><strong>Site Evaluation</strong>: Our team of professionals will then visit your site to conduct a feasibility study and plan for the tower installation.</li>
              <li><strong>Installation</strong>: If the site is found feasible, we will manage all the necessary permits and construction to install the tower.</li>
            </ol>
            <p>
              Please note, all costs associated with the tower installation and maintenance will be taken care of by our company.
            </p>
            <p>
              If you'd like more information about this opportunity or have any questions, please contact us at <a href="mailto:support@swift-net.ca">support@swift-net.ca</a>. We would be delighted to discuss this in more detail and answer any queries you might have.
            </p>
            <p>
              We look forward to exploring this opportunity together and hope to bring our high-speed Internet services to your area soon.
            </p>
            <p>
              Best Regards,<br>
              Swift-Net.ca Customer Care Team<br>
              <a href="mailto:support@swift-net.ca">support@swift-net.ca</a><br>
              <a href="tel:1-866-667-2375">tel:1-866-667-2375</a>
            </p>

            <div style="background-color: #05649C; padding: 20px; ">
            <p style="color: white ">
                
                Swift-Net.ca Customer Care<br>
                <a style="color: white" href="mailto:support@swift-net.ca">support@swift-net.ca</a> <br>
                <a  style="color: white" href="tel:1-866-667-2375">tel:1-866-667-2375</a>
    
              </p>
          </div>
    

          </body>
        </html>
      `,
    };

    const swiftMailOptions = {
      from: "no-reply@swift-net.ca",
      to: "support@swift-net.ca,david@turnkeyisp.co",
      subject: `${supported ? "Yes," : "No,"} ${
        firstName + " " + lastName
      } , ${fullAddress} `,
      text: "",
      html: `
      <html>
        <body>
          <h2>New web sign up information: ${firstName + " " + lastName}  </h2>

          <ul>
          <li>First Name: ${firstName}</li>
          <li>Last Name: ${lastName}</li>
          <li>Email: ${email}</li>
          <li>Phone Number: ${phoneNumber}</li>
          <li>Full Address:<a href="https://www.google.com/maps/place/${fullAddress}"> ${fullAddress}</a></li>
          <li>Google lookup: <a href="https://www.google.com/maps/place/${ipAddress}">${googleAPIFullAddress}</a></li>
          <li>Postal Code: ${postal_code}</li>
          <li>Region: ${region}</li>
          <li>Supported: ${supported}</li>
          <li>lng: <a href="https://www.google.com/maps/place/${lat},${lng}">${lng}</a></li>
          <li>lat:<a href="https://www.google.com/maps/place/${lat},${lng}"> ${lat}</a></li>
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
