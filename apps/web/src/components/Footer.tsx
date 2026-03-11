import { useState } from 'react';
import { Logo } from './Logo';
import { useTheme } from '../context/ThemeContext';
import { useLang } from '../context/LangContext';
import { Send, ArrowRight } from 'lucide-react';

export function Footer() {
  const { dark } = useTheme();
  const { t } = useLang();
  const [email, setEmail] = useState('');

  return (
    <footer className={`py-12 md:py-16 ${dark ? 'bg-gray-950 border-t border-white/5' : 'bg-gray-900'}`}>
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo size="sm" white />
            <p className="text-sm text-gray-500 leading-relaxed mt-4 max-w-[280px]">
              {t('footer.desc')}
            </p>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">{t('footer.pages')}</h4>
            <ul className="space-y-2.5">
              {[
                { href: '#features', label: t('nav.features') },
                { href: '#how-it-works', label: t('nav.how') },
                { href: '#pricing', label: t('nav.pricing') },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-gray-600 hover:text-emerald-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Socials */}
          <div>
            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">{t('footer.contact')}</h4>
            <ul className="space-y-2.5 text-sm text-gray-600">
              <li>info@savdo.uz</li>
              <li>+998 90 123 45 67</li>
              <li>Toshkent</li>
            </ul>

            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mt-6 mb-3">{t('footer.social')}</h4>
            <div className="flex gap-2.5">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-emerald-500/20 flex items-center justify-center transition-colors group"
                aria-label="Telegram"
              >
                <Send size={14} className="text-gray-500 group-hover:text-emerald-400" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-emerald-500/20 flex items-center justify-center transition-colors group"
                aria-label="Instagram"
              >
                <svg className="w-3.5 h-3.5 text-gray-500 group-hover:text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">{t('footer.newsletter')}</h4>
            <p className="text-sm text-gray-600 mb-3">{t('footer.newsletter.desc')}</p>
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('footer.newsletter.placeholder')}
                className="flex-1 px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-gray-600 focus:outline-none focus:border-emerald-500/50 transition-colors"
              />
              <button className="px-4 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl text-sm font-semibold transition-colors flex items-center gap-1.5">
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-700">&copy; 2026 Savdo</p>
          <div className="flex gap-5">
            <a href="#" className="text-xs text-gray-700 hover:text-emerald-400 transition-colors">{t('footer.privacy')}</a>
            <a href="#" className="text-xs text-gray-700 hover:text-emerald-400 transition-colors">{t('footer.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
