import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método no permitido" });
  }

  const { firstname, lastname, email, phone, service, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Formulario Web" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: "Nuevo mensaje de contacto",
      text: `
        Nombre: ${firstname} ${lastname}
        Email: ${email}
        Teléfono: ${phone}
        Servicio: ${service}
        Mensaje: ${message}
      `,
    });

    res.status(200).json({ message: "Correo enviado correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al enviar el correo", error });
  }
}