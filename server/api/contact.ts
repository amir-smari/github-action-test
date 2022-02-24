import { transporter } from '~/utils/mail';
import type { IncomingMessage, ServerResponse } from "http";
import { useBody } from "h3";
import { SendMailOptions } from "nodemailer";

export default async (req: IncomingMessage, res: ServerResponse) => {
  const { form } = await useBody(req);

  if (!(form.email && form.name && form.message && form.subject)) {
    res.statusCode = 400;
    return "Invalid request Body";
  }
  
  const mailOptions: SendMailOptions = {
    from: process.env.SMTP_ADMIN_EMAIL,
    to: process.env.CONTACT_FORM_SEND_TO,
    subject: "Dev Factory Landing page contact Form",
    html: `<p>${Object.keys(form).map(
      (key) => `
        ${key} : ${form[key]} <br>
      `
    )}</p>`,
  };
  try {
    await transporter.sendMail(mailOptions);
    return "mail sent";
  } catch (error) {
    res.statusCode = 500;
    return "An error occurred";
  }
};
