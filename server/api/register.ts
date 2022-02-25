import type { IncomingMessage, ServerResponse } from "http";
import { useBody } from "h3";
import { SendMailOptions } from "nodemailer";
import { transporter } from "~/utils/mail";

export default async (req: IncomingMessage, res: ServerResponse) => {
  const { form } = await useBody(req);

  if (!(form.email)) {
    res.statusCode = 400;
    return "Invalid request Body";
  }

  const notifyAdminMail: SendMailOptions = {
    from: process.env.SMTP_ADMIN_EMAIL,
    to: process.env.CONTACT_FORM_SEND_TO?.split(','),
    subject: "Dev Factory Landing page register Form",
    html: `<p>${Object.keys(form).map(
      (key) => `
        ${key} : ${form[key]} <br>
      `
    )}</p>`,
  };
  const thankUserMail: SendMailOptions = {
    from: process.env.SMTP_ADMIN_EMAIL,
    to: form.email,
    subject: "Inscription à la liste d’attente pour la version SaaS",
    html: `<p>Bonjour, <br> <br>

    Merci pour votre inscription sur la liste d’attente pour planifier une démo de la version SaaS de la plateforme DevFactory.<br>
    Nous reviendrons vers vous prochainement pour vous proposer des créneaux de 45mn et vous présenter notre plateforme pour le développement et la gestion de vos applications web.<br><br>
    Bien cordialement

     <br> <br>
    <b>L’équipe DevFactory </b>
    </p>`,
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
