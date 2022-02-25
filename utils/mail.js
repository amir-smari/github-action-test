import { createTransport } from "nodemailer";
import config from '#config';

export const transporter = createTransport({
    host: String(config.SMTP_HOST),
    port: Number(config.SMTP_PORT),
    secure: false, // true for 465, false for other ports
    debug: false,
    auth: {
      user: String(config.SMTP_USER),
      pass: String(config.SMTP_PASS),
    },
  });