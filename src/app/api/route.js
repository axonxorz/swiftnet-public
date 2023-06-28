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
      from: "younss.india@gmail.com", // sender
      to: email, // recipient
      subject: supported
        ? " Good News! High-Speed Internet Service is Available at Your Address"
        : "Expanding our Network Together: Internet Service Availability",
      text: "",
      html: supported
        ? `
        <html>
          <body>
            
            <h3>Dear ${firstName},</h3>
            <p>
              We are thrilled to inform you that our high-speed Internet service is available at your address! Now, you can enjoy faster downloads, seamless streaming, and uninterrupted video calls.
            </p>
            <p>
              Getting started is simple. Follow the steps below:
            </p>
            <ol>
              <li><strong>Choose Your Plan</strong>: Visit our website and browse through our range of service plans. From basic packages to premium plans with lightning-fast speed, we have something for everyone.</li>
              <li><strong>Schedule Your Installation</strong>: Once you've selected your preferred plan, schedule an installation appointment that fits your timetable. Our professional team will ensure a hassle-free installation process.</li>
            </ol>
            <p>
              Please note that you will not be billed until your service is installed and verified. We believe in 100% customer satisfaction and won't charge you a penny until you're connected and happy with your service.
            </p>
            <p>
              For any queries related to our plans, installation process, or other services, please do not hesitate to contact us at <a href="tel:1-866-667-2375">1-866-667-2375</a>. Our dedicated customer support team is always ready to assist you.
            </p>
            <p>
              We look forward to welcoming you to our high-speed Internet community.
            </p>
            <p>
              Thank you!<br>
              Swift-Net.ca Customer Care<br>
              <a href="mailto:support@swift-net.ca">support@swift-net.ca</a><br>
              <a href="tel:1-866-667-2375">tel:1-866-667-2375</a>
            </p>
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
          </body>
        </html>
      `,
    };

    const swiftMailOptions = {
      from: "no-reply@swift-net.ca",
      to: "support@swift-net.ca,younesbouchbouk.py@gmail.com",
      subject: `${supported ? "Yes ," : "No ,"} ${
        firstName + " " + lastName
      } , ${fullAddress} `,
      text: "",
      html: `
      <html>
        <body>
          <h2>New subscription information : ${
            firstName + " " + lastName
          }  </h2>

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
