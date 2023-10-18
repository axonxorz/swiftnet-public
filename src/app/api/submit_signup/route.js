import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

import { createTransport, getSalesRecipient, getSendFromAddress, transformRecipients } from "@/lib/email";

export function generateAccessToken(data) {
    return jwt.sign({data}, process.env.SECRET_TOKEN, {
        expiresIn: "24h",
    });
}

const emailTransport = createTransport();

const validateFormFields = (contact) => {
    // _Very_ basic input validation
    const errors = [];
    if(!contact.email) {
        errors.push('Invalid email address');
    }
    if(errors.length) {
        throw new Error(errors.join(', '))
    }
};

export async function POST(request) {
    const data = await request.json();
    const {session, location, contact} = data;

    const supported = true; // TODO: needs to be dynamic
    try {
        validateFormFields(contact)
        const token = generateAccessToken(data);
        const mailOptions = {
            from: getSendFromAddress(),
            to: transformRecipients(contact.email),
            subject: supported ? " Fantastic news! Service is available at your location. " : "Expanding our Network Together: Internet Service Availability",
            html: supported ? `
        <html lang="en">
            <body>
              <div style="text-align: center;">
                <div style="margin-top: 20px; margin-bottom: 40px">
                  <img src="https://swift-net.vercel.app/_next/static/media/logo2.2933c849.png" alt="logo" />
                </div>
                <h3>Dear ${contact.firstName},</h3>
        
                <p style="text-align: center; padding: 10px">
                  You're almost done! Pick your price and install date below:
                </p>
        
                <div>
                  <a href="https://swift-net.ca/installation-date?token=${token}" style="font-weight: bold; background-color: #05649c; color: white; padding: 0.9rem 20px; margin: 30px; border-radius: 0.5rem; text-decoration-line: none;">Click here</a>
                </div>
                <p style="text-align: center; padding: 10px">
                  Feel free to call us at <a href="tel:1-866-667-2375">tel:1-866-667-2375</a> or reply to this email with any questions.
                </p>
                <br />
                <p>Thank you!<br /></p>
                <div style="background-color: #05649c; padding: 20px; width: 100%">
                  <p style="color: white; text-align: center">
                    Swift-Net.ca | Customer Care<br />
                    <a style="color: white" href="mailto:support@swift-net.ca">support@swift-net.ca</a><br />
                    <a style="color: white" href="tel:1-866-667-2375">1-866-667-2375</a>
                  </p>
                </div>
              </div>
            </body>
          </html>
      ` : `
        <html lang="en">
          <body>
            <h3>Dear ${contact.firstName},</h3>
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
            from: getSendFromAddress(),
            to: transformRecipients(getSalesRecipient()),
            subject: `Web Sign-Up: Supported: ${supported ? "Yes" : "No"}, ${contact.email} , ${location.fullAddress}`,
            text: "",
            html: `
      <html>
        <body>
          <h2>New web sign up information: ${contact.firstName + " " + contact.lastName}  </h2>
            <ul>
              <li>First Name: ${contact.firstName}</li>
              <li>Last Name: ${contact.lastName}</li>
              <li>Email: ${contact.email}</li>
              <li>Phone Number: <a href="https://www.ipqualityscore.com/free-carrier-lookup/lookup/CA/${contact.phoneNumber}">${contact.phoneNumber}</a></li>
              <li>Address:<a href="https://www.google.com/maps/place/${location.fullAddress}"> ${location.fullAddress}</a></li>
              <li>Postal Code: ${location.postalCode}</li>
              <li>Supported: ${supported}</li>
              <li>GPS Coordinates: <a href="https://www.google.com/maps/place/${location.lat},${location.lng}">${location.lat},${location.lng}</a></li>
              <li>IP Address: <a href="https://ipinfo.io/${session.ipAddress}">${session.ipAddress}</a></li>
              <li>Browser: ${session.userAgent}</li>
            </ul>
        </body>
      </html>
    `,
        };

        await emailTransport.sendMail(mailOptions);
        await emailTransport.sendMail(swiftMailOptions);
        return NextResponse.json({
            message: "Email sent successfully", status: 1,
        });
    } catch (error) {
        console.error('Error sending email', error);
        return NextResponse.json({message: "Error sending email"}, {status: 500});
    }
}
