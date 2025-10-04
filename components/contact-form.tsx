'use client';

import { FormEvent, useState } from 'react';

export const ContactForm = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(Object.fromEntries(formData.entries())),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage(data.message || 'Merci, votre message a été envoyé');
        form.reset();
      } else {
        setStatus('error');
        setMessage(data.message || 'Une erreur est survenue, merci de réessayer.');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
      setMessage('Une erreur est survenue, merci de réessayer.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm text-emerald-900">
          Nom et prénom
          <input
            name="name"
            required
            className="rounded-lg border border-emerald-200 bg-white px-4 py-3 text-base text-emerald-900 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-100"
            placeholder="Votre nom"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm text-emerald-900">
          Email
          <input
            type="email"
            name="email"
            required
            className="rounded-lg border border-emerald-200 bg-white px-4 py-3 text-base text-emerald-900 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-100"
            placeholder="vous@exemple.fr"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm text-emerald-900">
          Téléphone
          <input
            type="tel"
            name="phone"
            className="rounded-lg border border-emerald-200 bg-white px-4 py-3 text-base text-emerald-900 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-100"
            placeholder="06 00 00 00 00"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm text-emerald-900 md:col-span-2">
          Message
          <textarea
            name="message"
            required
            rows={6}
            className="rounded-lg border border-emerald-200 bg-white px-4 py-3 text-base text-emerald-900 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-100"
            placeholder="Parlez-nous de votre projet..."
          />
        </label>
      </div>
      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-emerald-500"
        disabled={status === 'loading'}
      >
        {status === 'loading' ? 'Envoi en cours…' : 'Envoyer le message'}
      </button>
      {message && (
        <p className={status === 'error' ? 'text-sm text-red-600' : 'text-sm text-emerald-700'}>{message}</p>
      )}
    </form>
  );
};
