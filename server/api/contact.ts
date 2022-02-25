import config from '#config';
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
    from: config.SMTP_ADMIN_EMAIL,
    to: config.CONTACT_FORM_SEND_TO?.split(','),
    subject: "Dev Factory Landing page contact Form",
    html: `<p>${Object.keys(form).map(
      (key) => `
        ${key} : ${form[key]} <br>
      `
    )}</p>`,
  };

  const thankUserMail: SendMailOptions = {
    from: config.SMTP_ADMIN_EMAIL,
    to: form.email,
    subject: "Formulaire de contact DevFactory",
    html: `<p>Bonjour, <br> <br>

    Nous avons bien reçu votre message et nous vous remercions de l’intérêt que vous portez à DevFactory. <br>
    Un consultant va prendre contact avec vous très rapidement.<br><br>

    Bien cordialement

     <br> <br>
    <b>L’équipe DevFactory </b>
    </p>`,
  };
  try {
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(thankUserMail);
    return "mail sent";
  } catch (error) {
    console.log(error);
    res.statusCode = 500;
    return "An error occurred";
  }
};
