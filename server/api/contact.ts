import type { IncomingMessage, ServerResponse } from "http";
import { useBody } from "h3";
import { createTransport, SendMailOptions } from "nodemailer";

export default async (req: IncomingMessage, res: ServerResponse) => {
  const { form } = await useBody(req);
  console.log(form);
  if (form.email && form.name && form.message && form.subject) {
    const transporter = createTransport({
      service: "gmail",
      port: 465,
      secure: true, // true for 465, false for other ports
      logger: true,
      debug: true,
      secureConnection: false,
      auth: {
        user: "",
        pass: "",
      },
      tls: {
        rejectUnAuthorized: true,
      },
    });
    //TODO set envirenment variable for smtp config
    // TODO set content of the email
    const mailOptions: SendMailOptions = {
      from: "",
      to: form.email,
      subject: "test",
      html: `<h1>test email</h1><p>ete</p><br></br>`,
    };
    transporter.sendMail(mailOptions, (err: any, data: any) => {
      if (err) {
        return console.log("Error occurs", err);
      }
      return console.log("Email sent!!!");
    });
    // try {
    //   const info = await transporter.sendMail(mailOptions);
    //   console.log(info);
    // } catch (error) {
    //   console.log(error);
    // }
  } else {
    res.statusCode = 404;
    return "error";
  }
};
