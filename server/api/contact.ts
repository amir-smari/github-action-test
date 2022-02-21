import type { IncomingMessage, ServerResponse } from "http";
import { useBody } from "h3";
import { createTransport, SendMailOptions } from "nodemailer";

export default async (req: IncomingMessage, res: ServerResponse) => {
  const { form } = await useBody(req);
  console.log("EMAIL_HOST: ",process.env.EMAIL_HOST);
  
  console.log(form);
  if (form.email && form.name && form.message && form.subject) {
    const transporter = createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: true, // true for 465, false for other ports
      logger: false,
      debug: false,
      secureConnection: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnAuthorized: true,
      },
    });
    //TODO set envirenment variable for smtp config
    // TODO set content of the email
    const mailOptions: SendMailOptions = {
      from: process.env.SMTP_ADMIN_EMAIL,
      to: process.env.CONTACT_FORM_SEND_TO,
      subject: "Dev Factory Landing page contact Form",
      html: `<p>${Object.keys(form).map(key => `
        ${key} : ${form[key]} <br>
      `)}</p>`,
    };
    transporter.sendMail(mailOptions, (err: any, data: any) => {
      if (err) {
        return console.log("Error occurs", err);
      }
      return console.log("Email sent!!!");
    });
  } else {
    res.statusCode = 400;
    return "error";
  }
};
