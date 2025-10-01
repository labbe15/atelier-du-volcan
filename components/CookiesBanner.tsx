'use client';

import { useState, useEffect } from 'react';
import { X, Cookie, Settings } from 'lucide-react';

const CookiesBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookies-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('cookies-consent', 'all');
    setIsVisible(false);
  };

  const acceptNecessary = () => {
    localStorage.setItem('cookies-consent', 'necessary');
    setIsVisible(false);
  };

  const rejectAll = () => {
    localStorage.setItem('cookies-consent', 'rejected');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-stone-200 shadow-lg">
      <div className="max-w-7xl mx-auto p-6">
        {!showDetails ? (
          /* Simple Banner */
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div className="flex items-start space-x-3 flex-1">
              <Cookie className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-stone-900 mb-2">
                  Nous utilisons des cookies
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Nous utilisons des cookies pour améliorer votre expérience sur notre site, 
                  analyser le trafic et personnaliser le contenu. En continuant à naviguer, 
                  vous acceptez notre utilisation des cookies.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <button
                onClick={() => setShowDetails(true)}
                className="flex items-center justify-center px-4 py-2 text-stone-600 border border-stone-300 rounded-lg hover:bg-stone-50 transition-colors"
              >
                <Settings className="w-4 h-4 mr-2" />
                Personnaliser
              </button>
              <button
                onClick={acceptNecessary}
                className="px-6 py-2 text-stone-700 border border-stone-300 rounded-lg hover:bg-stone-50 transition-colors"
              >
                Nécessaires uniquement
              </button>
              <button
                onClick={acceptAll}
                className="px-6 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
              >
                Accepter tout
              </button>
            </div>
          </div>
        ) : (
          /* Detailed Settings */
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-stone-900">
                Paramètres des cookies
              </h3>
              <button
                onClick={() => setShowDetails(false)}
                className="p-2 text-stone-500 hover:text-stone-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-stone-900">Cookies nécessaires</h4>
                  <span className="text-sm text-green-600 font-medium">Toujours actifs</span>
                </div>
                <p className="text-sm text-stone-600">
                  Ces cookies sont essentiels au fonctionnement du site et ne peuvent pas être désactivés.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-stone-900">Cookies analytiques</h4>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-stone-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-600"></div>
                  </label>
                </div>
                <p className="text-sm text-stone-600">
                  Nous aident à comprendre comment vous utilisez notre site pour l'améliorer.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-stone-900">Cookies marketing</h4>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-stone-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-600"></div>
                  </label>
                </div>
                <p className="text-sm text-stone-600">
                  Utilisés pour vous proposer des publicités pertinentes sur d'autres sites.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-stone-200">
              <button
                onClick={rejectAll}
                className="px-6 py-2 text-stone-700 border border-stone-300 rounded-lg hover:bg-stone-50 transition-colors"
              >
                Tout refuser
              </button>
              <button
                onClick={acceptNecessary}
                className="px-6 py-2 text-stone-700 border border-stone-300 rounded-lg hover:bg-stone-50 transition-colors"
              >
                Nécessaires uniquement
              </button>
              <button
                onClick={acceptAll}
                className="px-6 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
              >
                Accepter la sélection
              </button>
            </div>
            
            <p className="text-xs text-stone-500">
              Pour plus d'informations, consultez notre{' '}
              <a href="/privacy" className="text-amber-600 hover:text-amber-700">
                politique de confidentialité
              </a>
              .
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CookiesBanner;