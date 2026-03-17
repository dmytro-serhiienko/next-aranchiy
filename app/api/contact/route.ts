import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, phone, date, type, city } = await req.json();

  // ─── Telegram ───────────────────────────────────────────
  const TG_TOKEN = process.env.TELEGRAM_TOKEN;
  const TG_CHAT = process.env.TELEGRAM_CHAT_ID;

  let message = `<b>🚀 Нова заявка!</b>\n\n`;
  message += `👤 <b>Ім'я:</b> ${name || "Не вказано"}\n`;
  message += `📞 <b>Телефон:</b> ${phone || "Не вказано"}\n`;
  message += `📅 <b>Дата:</b> ${date || "Не вказано"}\n`;
  message += `🎭 <b>Захід:</b> ${type || "—"}\n`;
  message += `📍 <b>Місто:</b> ${city || "—"}`;

  // ─── Nodemailer ─────────────────────────────────────────
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Бот Сайту" <${process.env.MAIL_USER}>`,
    to: process.env.MAIL_TO,
    subject: "🚀 Нове замовлення з сайту",
    html: `
      <h2>Нова заявка!</h2>
      <p><b>Ім'я:</b> ${name || "Не вказано"}</p>
      <p><b>Телефон:</b> ${phone || "Не вказано"}</p>
      <p><b>Дата:</b> ${date || "Не вказано"}</p>
      <p><b>Захід:</b> ${type || "—"}</p>
      <p><b>Місто:</b> ${city || "—"}</p>
    `,
  };

  try {
    await Promise.all([
      // Telegram
      fetch(`https://api.telegram.org/bot${TG_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: TG_CHAT,
          parse_mode: "html",
          text: message,
        }),
      }),
      // Email
      transporter.sendMail(mailOptions),
    ]);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
