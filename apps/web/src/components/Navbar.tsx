import { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { ThemeToggle } from './ThemeToggle';
import { LangSwitch } from './LangSwitch';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLang } from '../context/LangContext';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { dark } = useTheme();
  const { t } = useLang();

  const links = [
    { href: '#features', label: t('nav.features') },
    { href: '#how-it-works', label: t('nav.how') },
    { href: '#pricing', label: t('nav.pricing') },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 border-b ${
      scrolled
        ? dark
          ? 'bg-gray-950/80 backdrop-blur-xl border-white/5'
          : 'bg-white/80 backdrop-blur-xl border-gray-200/50'
        : dark
          ? 'bg-transparent border-transparent'
          : 'bg-transparent border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-16">
        <div className="flex items-center justify-between h-16 md:h-18">
          <Logo size="sm" white={dark} />

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  dark
                    ? 'text-gray-400 hover:text-white'
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <LangSwitch />
            <ThemeToggle />

            {/* Desktop CTA */}
            <a
              href="#pricing"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-semibold text-sm transition-all hover:shadow-glow-green active:scale-[0.97]"
            >
              {t('nav.start')}
              <ArrowRight size={14} />
            </a>

            {/* Mobile hamburger */}
            <button
              className={`md:hidden w-9 h-9 flex items-center justify-center rounded-xl transition-colors ${
                dark ? 'hover:bg-white/5 text-gray-400' : 'hover:bg-gray-100 text-gray-500'
              }`}
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={17} /> : <Menu size={17} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-72' : 'max-h-0'}`}>
        <div className={`px-5 pb-4 space-y-1 ${dark ? 'bg-gray-950/95 backdrop-blur-xl' : 'bg-white/95 backdrop-blur-xl'}`}>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                dark
                  ? 'text-gray-400 hover:text-emerald-400 hover:bg-emerald-500/5'
                  : 'text-gray-500 hover:text-emerald-600 hover:bg-emerald-50/50'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#pricing"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2 mx-2 mt-2 py-2.5 bg-emerald-500 text-white rounded-xl text-sm font-bold"
          >
            {t('nav.start')}
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </nav>
  );
}
