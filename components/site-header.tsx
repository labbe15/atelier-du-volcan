'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

type NavigationLink = {
  label: string;
  href: string;
};

type NavigationGroup = NavigationLink & {
  children?: NavigationLink[];
};

type SiteHeaderProps = {
  navigation: NavigationGroup[];
};

export const SiteHeader = ({ navigation }: SiteHeaderProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-emerald-100">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-white font-semibold">
            V
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-script text-2xl text-emerald-800">L’Atelier du Volcan</span>
            <span className="text-xs uppercase tracking-wider text-emerald-700/70">Artisans bois</span>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navigation.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && setOpenDropdown(item.label)}
              onMouseLeave={() => item.children && setOpenDropdown((current) => (current === item.label ? null : current))}
            >
              <Link
                href={item.href}
                className="flex items-center gap-1 text-sm font-medium text-slate-800 transition hover:text-emerald-700"
              >
                {item.label}
                {item.children && <ChevronDown className="h-4 w-4" />}
              </Link>
              {item.children && openDropdown === item.label && (
                <div
                  onMouseLeave={() => setOpenDropdown(null)}
                  className="absolute left-0 top-full mt-2 w-64 rounded-lg border border-emerald-100 bg-white shadow-xl"
                >
                  <ul className="py-3">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block px-4 py-2 text-sm text-slate-700 transition hover:bg-emerald-50 hover:text-emerald-700"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </nav>
        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          className="inline-flex items-center rounded-lg border border-emerald-200 p-2 text-emerald-700 transition hover:border-emerald-400 hover:text-emerald-900 md:hidden"
          aria-expanded={mobileOpen}
          aria-label="Ouvrir le menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      <div
        className={cn(
          'border-t border-emerald-100 bg-white/95 shadow-sm md:hidden',
          mobileOpen ? 'block' : 'hidden',
        )}
      >
        <div className="space-y-4 px-4 py-6">
          {navigation.map((item) => (
            <div key={`${item.label}-mobile`}>
              <Link
                href={item.href}
                className="flex items-center justify-between text-base font-medium text-slate-800"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
                {item.children && <ChevronDown className="h-4 w-4" />}
              </Link>
              {item.children && (
                <div className="mt-2 space-y-2 border-l border-emerald-100 pl-4">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block text-sm text-slate-600 hover:text-emerald-700"
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};
