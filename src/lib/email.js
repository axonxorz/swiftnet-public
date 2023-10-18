import nodemailer from "nodemailer";


export const createTransport = () => {
    return nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.GMAIL_USERNAME,
            pass: process.env.GMAIL_PASSWORD,
        },
    });
}

export const getSendFromAddress = () => {
    if(!process.env.EMAIL_SEND_FROM) {
        console.warn('EMAIL_SEND_FROM address not specified');
        return 'support@swift-net.ca'; // hardcoded fallback
    }
    return process.env.EMAIL_SEND_FROM;
}

export const getSalesRecipient = () => {
    if(!process.env.EMAIL_SALES_RECIPIENT) {
        console.warn('EMAIL_SALES_RECIPIENT address not specified');
        return 'support@swift-net.ca'; // hardcoded fallback
    }
    return process.env.EMAIL_SALES_RECIPIENT;
}

export const transformRecipients = (recipients) => {
    // For debugging, if the EMAIL_OVERRIDE_RECIPIENT envvar is set, recipient addresses will be overridden to it.
    if(!!process.env.EMAIL_OVERRIDE_RECIPIENT) {
        console.log(`Email recipients overridden (${recipients} -> ${process.env.EMAIL_OVERRIDE_RECIPIENT})`);
        return process.env.EMAIL_OVERRIDE_RECIPIENT;
    }
    return recipients;
}