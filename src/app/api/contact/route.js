import ejs from "ejs";
import { NextResponse } from "next/server";

import { createTransport, getSalesRecipient, getSendFromAddress, transformRecipients } from "@/lib/email";
import template_contact from "@/assets/email_contact.ejs.html"


export async function POST(request) {
    const templateData = await request.json();
    try {
        const rendered = ejs.render(template_contact, templateData);

        const emailTransport = createTransport();
        const message = {
            from: getSendFromAddress(),
            to: transformRecipients(getSalesRecipient()),
            subject: `Web Contact: ${templateData.name} (${templateData.email})`,
            html: rendered
        }
        await emailTransport.sendMail(message);
        return NextResponse.json({
            result: true,
            message: "Contact email sent successfully",
        });
    } catch (error) {
        console.log('Error sending contact email', error);
        return NextResponse.json({
            result: false,
            message: "Server error sending email"
        });
    }
}
