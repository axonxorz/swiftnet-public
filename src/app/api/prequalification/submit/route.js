import { NextResponse } from "next/server";
import ejs from "ejs";

import { apiClient } from "@/lib/terek";
import template_sales from "@/assets/email_sales.ejs.html"
import { createTransport, getSalesRecipient, getSendFromAddress, transformRecipients } from "@/lib/email";


export async function POST(request) {
    const data = await request.json();
    try {
        const url = 'api/prequalification/submit';
        const response = await apiClient.post(url, data);

        const templateData = {
            serviceable: data.serviceable,
            plan: data.plan,
            addon: data.addon,
            installationDate: data.installationDate,
            session: data.session,
            location: data.location,
            contact: data.contact
        }
        const rendered = ejs.render(template_sales, templateData);

        const emailTransport = createTransport();
        const message = {
            from: getSendFromAddress(),
            to: transformRecipients(getSalesRecipient()),
            subject: `Web Sign-Up: Serviceable: ${data.serviceable ? "Yes" : "No"}, ${data.location.fullAddress}`,
            html: rendered
        }
        await emailTransport.sendMail(message);
        return NextResponse.json(response.data);
    } catch(error) {
        console.error(error);
        return NextResponse.json({message: error?.message || 'Unknown server error'}, {status: 400});
    }
}
