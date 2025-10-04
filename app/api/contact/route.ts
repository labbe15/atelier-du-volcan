import { NextResponse } from 'next/server';
import { getSettings } from '@/lib/content';

const settings = getSettings();
const resendApiKey = process.env.RESEND_API_KEY;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body as {
      name?: string;
      email?: string;
      phone?: string;
      message?: string;
    };

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: 'Merci de renseigner un nom, un email et un message.' },
        { status: 400 },
      );
    }

    const textContent = `Nouveau message reçu depuis le site atelierduvolcan.fr\n\nNom : ${name}\nEmail : ${email}\nTéléphone : ${phone || 'Non précisé'}\n\nMessage :\n${message}`;

    if (resendApiKey) {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'L’Atelier du Volcan <contact@atelier-du-volcan.com>',
          to: [settings.resend.recipient],
          reply_to: email,
          subject: `Nouveau message de ${name}`,
          text: textContent,
        }),
      });

      if (!response.ok) {
        console.error('Resend API error', await response.text());
      }
    }

    return NextResponse.json({ message: 'Merci, votre message a été envoyé.' });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'Une erreur est survenue lors de l’envoi. Vous pouvez nous contacter au 07 50 44 50 55.' },
      { status: 500 },
    );
  }
}
