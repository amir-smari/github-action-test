import { createTransport } from "nodemailer";

export const transporter = createTransport({
    host: String(process.env.SMTP_HOST),
    port: Number(process.env.SMTP_PORT),
    secure: true, // true for 465, false for other ports
    debug: false,
    auth: {
      user: String(process.env.SMTP_USER),
      pass: String(process.env.SMTP_PASS),
    },
  });