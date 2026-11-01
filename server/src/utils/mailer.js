import nodemailer from "nodemailer";

let transporter = null;

// Email is optional: it only works when SMTP_USER and SMTP_PASS are set.
export function mailEnabled() {
  return Boolean(process.env.SMTP_USER && process.env.SMTP_PASS);
}

export async function sendNotification({ name, email, subject, message }) {
  if (!mailEnabled()) return false;
  if (!transporter) {
    const port = Number(process.env.SMTP_PORT) || 465;
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port,
      secure: port === 465,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });
  }
  await transporter.sendMail({
    from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
    to: process.env.MAIL_TO || process.env.SMTP_USER,
    replyTo: email,
    subject: `[Portfolio] ${subject}`,
    text: `From: ${name} <${email}>\n\n${message}`,
  });
  return true;
}
