'use client';

import { useEffect, useState } from 'react';

export const Preloader = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hasSeenIntro = typeof window !== 'undefined' && sessionStorage.getItem('atelier-preloader-shown');

    if (!hasSeenIntro) {
      setVisible(true);
      const timeout = setTimeout(() => {
        sessionStorage.setItem('atelier-preloader-shown', 'true');
        setVisible(false);
      }, 2200);

      return () => clearTimeout(timeout);
    }

    setVisible(false);
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4 text-emerald-700">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-600/10">
          <span className="text-4xl font-semibold tracking-wide text-emerald-700">V</span>
        </div>
        <p className="font-script text-4xl text-emerald-700">L’Atelier du Volcan</p>
        <span className="h-1 w-32 animate-[pulse_1.8s_ease-in-out_infinite] rounded-full bg-emerald-500/50" aria-hidden />
      </div>
    </div>
  );
};
