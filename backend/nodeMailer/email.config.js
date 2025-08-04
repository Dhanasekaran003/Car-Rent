import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "romanrubin2002@gmail.com",
        pass: "uknp qrqn apby wvbh"
    }
});

