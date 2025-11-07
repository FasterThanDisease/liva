// pages/api/contact.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
    if (req.method !== "POST") return res.status(405).end();

    const { firstName, email, topic, phone } = req.body;

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.NEXT_PUBLIC_GMAIL_APP_USER,
            pass: process.env.NEXT_PUBLIC_GMAIL_APP_PW,
        },
    });

    try {
        await transporter.sendMail({
            from: `"${firstName}" <${email}>`,         // Absender
            to: "info.novaesolutions@gmail.com",           // Empfänger
            subject: "Neue Nachricht vom Kontaktformular",
            text: `Neue Nachricht von ${firstName} (${email}):\n\n${topic}`, // Fallback-Text
            html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.5;">
            <h2 style="color: #2c3e50;">Neue Kontaktanfrage</h2>
            <p><strong>Name:</strong> ${firstName}</p>
            <p><strong>Email:</strong> ${email}</p>
              <p><strong>Telefonnummer:</strong> ${phone}</p>
            <p><strong>ausgewähltes Thema (optional):</strong></p>
            <p style="white-space: pre-line;">${topic}</p>
            <hr>
            <small>Diese Nachricht wurde über das Kontaktformular deiner Website gesendet.</small>
          </div>
        `,
        });


        res.status(200).json({ success: true });
    } catch (error) {
        res.status(500).json({ success: false, error });
    }
}
