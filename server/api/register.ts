import type { IncomingMessage, ServerResponse } from "http";
import { useBody } from "h3";
import { SendMailOptions } from "nodemailer";
import { transporter } from "~/utils/mail";

export default async (req: IncomingMessage, res: ServerResponse) => {
  const { form } = await useBody(req);

  if (!(form.email )) {
    res.statusCode = 400;
    return "Invalid request Body";
  }

  const notifyAdminMail: SendMailOptions = {
    from: process.env.SMTP_ADMIN_EMAIL,
    to: process.env.CONTACT_FORM_SEND_TO,
    subject: "Dev Factory Landing page register Form",
    html: `<p>${Object.keys(form).map(
      (key) => `
        ${key} : ${form[key]} <br>
      `
    )}</p>`,
  };
  console.log({notifyAdminMail});
  

  const thankUserMail: SendMailOptions = {
    from: process.env.SMTP_ADMIN_EMAIL,
    to: form.email,
    subject: "Thank you for subscription",
    html: `<p>We will notify you when our saas version is out</p>`,
  };
  try {
    await transporter.sendMail(notifyAdminMail);
    await transporter.sendMail(thankUserMail);
    return "mail sent";
  } catch (error) {
    res.statusCode = 500;
    return "An error occurred";
  }
};
