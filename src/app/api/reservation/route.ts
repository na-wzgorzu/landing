import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const body = await req.json();
  const { lastName, firstName, email, phone, message } = body;

  if (!lastName || !firstName || !email || !message)  {
    return NextResponse.json({ error: 'Brakuje wymaganych danych' }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Rezerwacja" <${process.env.EMAIL_USER}>`,
      to: "na-wzgorzu@na-wzgorzu.pl",      
      subject: 'Zapytanie o Rezerwację.',
      html: `
          <div style="font-family: Arial, sans-serif; background-color: #f6f6f6; padding: 20px;">
            <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); overflow: hidden;">
              <div style="background-color: #146143; color: white; padding: 16px 24px;">
                <h2 style="margin: 0; font-size: 20px;">Nowa rezerwacja</h2>
              </div>
              <div style="padding: 24px;">
              <p style="margin: 0 0 12px;"><strong>Nazwisko:</strong> ${lastName}</p>
              <p style="margin: 0 0 12px;"><strong>Imię:</strong> ${firstName}</p>
                ${phone ? `<p style="margin: 0 0 12px;"><strong>Telefon:</strong> ${phone}</p>` : ""}
                <p style="margin: 0 0 12px;"><strong>Email:</strong> ${email}</p>
                <p style="margin: 0 0 12px;"><strong>Wiadomość:</strong><br/> ${message}</p>
              </div>
            </div>
          </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('[MAIL ERROR]', error);
    return NextResponse.json({ error: 'Błąd podczas wysyłania wiadomości' }, { status: 500 });
  }
}
