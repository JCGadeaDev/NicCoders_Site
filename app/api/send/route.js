import nodemailer from "nodemailer";

export async function POST(req) {
  const body = await req.json();
  const { firstname, lastname, email, phone, service, message } = body;

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

    return new Response(JSON.stringify({ message: "Correo enviado correctamente" }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Error al enviar el correo", error }), {
      status: 500,
    });
  }
}
