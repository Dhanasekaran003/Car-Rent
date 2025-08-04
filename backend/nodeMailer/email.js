import { transporter } from "./email.config.js";
import {
    Verification_Email_Template,
    Welcome_Email_Template,
    PASSWORD_RESET_REQUEST_TEMPLATE,
    PASSWORD_RESET_SUCCESS_TEMPLATE
} from "./email.template.js";


export const sendVerificationEmail = async (email, verificationCode) => {
    try {
        const response = await transporter.sendMail({
            from: process.env.EMAIL,
            to: email,
            subject: "Verify Your Email",
            text: "Verify Your Email",
            html: Verification_Email_Template.replace("{verificationCode}", verificationCode)
        });
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

export const welcomeEmail = async (email, name) => {
    try {
        const response = await transporter.sendMail({
            from: process.env.EMAIL,
            to: email,
            subject: "Welcome Email",
            text: "Welcome to BookNow.com",
            html: Welcome_Email_Template.replace("{name}", name)
        })
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
