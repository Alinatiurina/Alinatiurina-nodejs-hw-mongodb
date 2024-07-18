import nodemailer from "nodemailer";
import "dotenv/config";
import { SMTP } from '../constants/index.js';
import env  from '../utils/env.js';

// const {UKR_NET_EMAIL, UKR_NET_PASSWORD} = process.env;

// const nodemailerConfig = {
//     host: "smtp.ukr.net",
//     port: 465,
//     secure: true,
//     auth: {
//         user: UKR_NET_EMAIL,
//         pass: UKR_NET_PASSWORD
//     }
// };

// const transport = nodemailer.createTransport(nodemailerConfig);

// const sendEmail = data => {
//     const email = {...data, from: UKR_NET_EMAIL};
//     return transport.sendMail(email);
// }

// export default sendEmail;

const transporter = nodemailer.createTransport({
  host: env(SMTP.SMTP_HOST),
  port: Number(env(SMTP.SMTP_PORT)),
  auth: {
    user: env(SMTP.SMTP_USER),
    pass: env(SMTP.SMTP_PASSWORD),
  },
});

export const sendEmail = async (options) => {
  return await transporter.sendMail(options);
};